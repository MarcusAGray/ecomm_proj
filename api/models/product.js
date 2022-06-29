const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  company: String,
  type: String,
  description: String,
  categories: Array
})

module.exports = mongoose.model('Product', ProductSchema)