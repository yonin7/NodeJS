const express = require('express');
require('./db/mongoose');
const Product = require('./models/product');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/products', async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).send(product);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send();
  }
});

app.get('/products/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const product = await Product.findOne({ _id });
    if (!product) {
      return res.status(404).send();
    }
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send();
  }
});
app.get('/actives', async (req, res) => {
  try {
    const activProduct = await Product.find({ isActive: false });
    if (!activProduct) {
      return res.status(404).send();
    }
    res.status(200).send(activProduct);
  } catch (err) {
    res.status(500).send();
  }
});

app.get('/price/:min', async (req, res) => {
  const min = req.params.min;
  console.log(min);
  const max = req.params.max;
  Product.aggregate({
    $group: {
      _id: null,
      //   max: { $max: '$price' },
      $min: { 'details.price': min },
    },
  })
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }
      res.status(200).send(product);
    })
    .catch((err) => {
      res.status(500).send();
    });
});
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
