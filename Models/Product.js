const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  
    releaseyear:{
      type: String,
      required: true

    } 
  ,
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {   
        type: String,
        required: false  
  },

  date: { type: Date,
     default: Date.now },
 
});

module.exports = mongoose.model('Product', ProductSchema);