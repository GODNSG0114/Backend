import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderId: {
      type: Number,
      unique: true,
      required: true,
    },
    orderDate: {
      type: Date,
      required: true,
    },
    orderItems: {
      type: [orderItemSchema],
    },
    status: {
      type: String,
      enum: ['Pending', 'Cancelled', 'Delivered'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

export const order = mongoose.model('order', orderSchema);
