const express = require('express');
const app = express();
const products = require('./data/products');

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
  console.log(`Server listening on PORT ${port}`);
});
