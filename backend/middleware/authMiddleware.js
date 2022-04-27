import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

export const protect = asyncHandler(async (req, res, next) => {
	let token;

	//Check to see server can capture the JWT correctly
	// console.log(req.headers.authorization);
	// next();

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			//So you don't grab the Bearer text
			token = req.headers.authorization.split(' ')[1];

			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			//Terminal should return the decoded JWT
			//console.log(decoded);

			//Grab all the user info except the password
			req.user = await User.findById(decoded.id).select('-password');

			next();
		} catch (error) {
			console.error(error);
			res.status(401).json({ message: 'Not authorized, token failed' });
			// throw new Error('Not authorized, token failed');
		}
	}

	if (!token) {
		res.status(401).json({ message: 'Not authorized, no token exists' });
		// throw new Error('Not authorized, no token');
	}
});
