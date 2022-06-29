const Product = require('../models/product')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json({products})
  } catch (error) {
    res.status(500)
  }
}
const getProduct = async (req, res) => {
  try {
    const {id: productID} = req.params
    const product = await Product.findOne({_id: productID})
    res.status(200).json({product})
  } catch (error) {
    res.status(500)
  }
}

const updateProduct = async (req, res) => {
  try {
    const {id: productID} = req.params
    const product = await Product.findByIdAndUpdate({_id: productID}, req.body)
    res.status(200).json({product})
  } catch (error) {
    res.status(500)
  }
}

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json({ product })
  } catch (error) {
    res.status(500)
  }
}



// const deleteProduct = async (req, res) => {
//   try {
//     const {id: productID} = req.params
//     const product = await Product.findByIdAndDelete({_id: productID})
//     res.status(200).json({product})
//   } catch (error) {
//     res.status(500)
//   }
// }

module.exports = {getAllProducts, 
                  createProduct,
                  getProduct,
                  updateProduct,
                  // deleteProduct
                }