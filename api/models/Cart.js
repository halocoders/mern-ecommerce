const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true } // untuk createdAtt, ini fungsi gampangnya yg udah disediain dari mongoose
);

module.exports = mongoose.model('Cart', CartSchema);
