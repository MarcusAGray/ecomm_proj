const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  quantity: Number,
  company: String,
  types: Array,
  description: String,
  category: String
})

module.exports = mongoose.model('Product', ProductSchema)