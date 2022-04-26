import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connection.js';
import productRoutes from './routes/productRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();
const app = express();

app.use(errorHandler);

app.use('/api/products', productRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(
		`Server listening on ${process.env.NODE_ENV} mode on PORT ${PORT}`
	);
});
