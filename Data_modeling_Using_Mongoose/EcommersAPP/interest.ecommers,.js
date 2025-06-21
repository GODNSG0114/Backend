import mongoose from 'mongoose';

const interestSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'categories',
    },
    userBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const interest = mongoose.model('interest', interestSchema);
