import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
	try {
		//Delete any data before importing
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		//Insert user data in
		const createdUsers = await User.insertMany(users);

		//Also capture the userAdmin to be added into the product data
		const adminUser = createdUsers[0]._id;

		//update the product data with userAdmin added to user field
		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser };
		});

		//Insert product data in
		await Product.insertMany(sampleProducts);

		console.log('Data Imported!');
		process.exit();
	} catch (error) {
		console.error(`${error}`);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		console.log('Data Destroyed!');
		process.exit();
	} catch (error) {
		console.error(`${error}`);
		process.exit(1);
	}
};

//the second index in your node script
if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
