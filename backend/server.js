const express = require('express');
const products = require('./data/products');
const dotenv = require('dotenv');
const connectDB = require('./db/connection');

dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => {
  res.send('Today will be a good day');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/product/:id', (req, res) => {
  res.json(products.find((p) => p._id == req.params.id));
});

const port = 5000;
app.listen(port, () => {
  console.log(
    `Server listening on ${process.env.NODE_ENV} mode on PORT ${port}`
  );
});
