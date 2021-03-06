const express = require('express');
require('./db/mongoose');
const Product = require('./models/product');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/products', (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then(() => {
      res.status(201).send(product);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get('/products', (req, res) => {
  Product.find({})
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => {
      res.status(500).send();
    });
});

app.get('/products/:id', (req, res) => {
  const _id = req.params.id;
  Product.findOne({ _id })
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
app.get('/actives', (req, res) => {
  const ac = Product.find({ isActive: false });
  console.log('req');
  Product.find({ isActive: true })
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }
      res.status(200).send(product);
    })
    .catch((err) => {
      res.status(500).send('why');
    });
});

app.get('/price/:min', (req, res) => {
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
