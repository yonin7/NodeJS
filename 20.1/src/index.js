const express = require('express');
require('./db/mongoose');
const Product = require('./models/product');
const productRouter = require('./routers/product');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(productRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
