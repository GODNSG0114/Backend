import mongoose, { Types } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    UserName: {
      types: String,
      required: true,
      unique: true,
      lowercase: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    interest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'interest',
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
