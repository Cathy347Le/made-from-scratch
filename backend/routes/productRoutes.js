const express = require('express');
const router = express.Router();
const {
	getProducts,
	getProductById,
} = require('../controllers/productControllers');

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

//CHAINING PROMISES
// router.get('/', (req, res) => {
// 	//empty object grabs all the data
// 	Product.find({})
// 		.then((products) => res.json(products))
// 		// .catch((err) => console.log(err)); Instead of console.log the error, render the error message right on the browser
// 		.catch((err) => res.json({ message: err.message }));
// });

// router.get('/:id', (req, res) => {
// 	Product.findById(req.params.id)
// 		.then((product) =>
// 			product
// 				? res.json(product)
// 				: res.status(404).json({ message: 'Product not found' })
// 		)
// 		.catch((err) => res.json({ message: err.message }));
// });

//ASYNC AWAIT METHOD
// router.get(
//   '/',
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     res.json(products);
//   })
// );

// router.get(
//   '/:id',
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);
//     product
//       ? res.json(product)
//       : res.status(404).json({ message: 'Product not found' });
//   })
// );

module.exports = router;
