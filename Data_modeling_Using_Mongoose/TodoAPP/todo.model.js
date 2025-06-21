import mongoose from 'mongoose';
import User from 'User';

const todoScheme = new mongoose.Schema({
  content :{
    type: String,
    required : true,
  },
  complete:{
    type : Boolean,
    default : false,
  },
  createdBy:{
    type : mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  subTodo : [
    {
         type : mongoose.Schema.Types.ObjectId,
         ref : "subtodo"
    }
  ]
  
}, { timestamps: true });

export  const todo = mongoose.model('todo' , todoScheme);