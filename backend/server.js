const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connection');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
connectDB();
const app = express();

app.use('/api/products', productRoutes);

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(
    `Server listening on ${process.env.NODE_ENV} mode on PORT ${port}`
  );
});
