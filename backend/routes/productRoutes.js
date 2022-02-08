const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

router.get('/', (req, res) => {
  Product.find({})
    .then((products) => res.json(products))
    .catch((err) => console.log(err));
});

router.get('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => console.log(err));
});

module.exports = router;
