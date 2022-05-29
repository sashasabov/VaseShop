//const mongoose = require('mongoose');
const Product = require('../models/products');
require('../db/connection');
const productseeds = require('./newproducts.json')

Product.deleteMany({})
.then(() => {
  return Product.insertMany(productseeds)
})
.then((products) => {
  console.log("products created: ", products)
})
.catch((err) =>{
  console.log(err)
})
.finally(()=> {
  process.exit
})



