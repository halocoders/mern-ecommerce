const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order');
const stripeRouter = require('./routes/stripe');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DBConnection Success');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/api/orders', orderRouter);
app.use('/api/checkout', stripeRouter);

// ===== Deployment ======
app.use(express.static('./client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});
// ==========

app.listen(process.env.PORT || 5000, () => {
  console.log('Backend is running!');
});
