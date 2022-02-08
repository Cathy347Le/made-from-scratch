const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connection');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
connectDB();
const app = express();

app.use('/api/products', productRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(
    `Server listening on ${process.env.NODE_ENV} mode on PORT ${port}`
  );
});
