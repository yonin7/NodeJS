const express = require('express');
const Product = require('../models/product');

const router = new express.Router();

router.post('/products', async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).send(product);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send();
  }
});

router.get('/products/actives', async (req, res) => {
  try {
    const activProduct = await Product.find({ isActive: true });
    if (!activProduct) {
      return res.status(404).send();
    }
    res.status(200).send(activProduct);
  } catch (err) {
    res.status(500).send();
  }
});

router.get('/price/:min/:max', async (req, res) => {
  const min = req.params.min;
  const max = req.params.max;

  try {
    const products = await Product.find({
      $and: [
        { 'details.Price': { $gte: min } },
        { 'details.Price': { $lte: max } },
      ],
    });
    if (!products) {
      return res.status(400).send();
    }
    res.status(200).send(products);
  } catch {
    res.status(500).send();
  }
});

router.get('/products/:id', async (req, res) => {
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

router.patch('/products/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  console.log(updates);
  const allowedUpdates = ['name', 'isActive', 'discount'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(404).send({ error: 'Invalid updates!' });
  }
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(404).send();
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send();
  }
});

router.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).send();
    }
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send();
  }
});

router.delete('/products', async (req, res) => {
  try {
    const products = await Product.deleteMany({});

    if (!products || products.deletedCount === 0) {
      return res.status(404).send('No products');
    }
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
