import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: Number,
      unique: true,
    },
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    productImage: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'categories',
    },
    owner: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const product = mongoose.model('product', productSchema);
