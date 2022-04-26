const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

module.exports = {
	index: asyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.json(products);
	}),
	show: asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);
		product
			? res.json(product)
			: res.status(404).json({ message: 'Product not found' });
	}),
};

//TRAVIS WAY
// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
// const getProducts = asyncHandler(async (req, res) => {
// 	const products = await Product.find({});
// 	res.json(products);
// });

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
// const getProductById = asyncHandler(async (req, res) => {
// 	const product = await Product.findById(req.params.id);
// 	product
// 		? res.json(product)
// 		: res.status(404).json({ message: 'Product not found' });
// });

// module.exports = { getProducts, getProductById };
