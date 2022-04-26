import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connection.js';
import parser from 'body-parser';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();
const app = express();
app.use(parser.json());

app.use(errorHandler);

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(
		`Server listening on ${process.env.NODE_ENV} mode on PORT ${PORT}`
	);
});
