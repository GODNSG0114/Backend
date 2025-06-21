import mongoose from 'mongoose';

const categoriesSchema = new mongoose.Schema(
  {
    categoryName: {
      type: string,
      required: true,
      unique: true,
    },
    NoOfItems: {
      type: Number,
    },  
  },
  { timestamps: true }
);

export const categories = mongoose.model('categories', categoriesSchema);
