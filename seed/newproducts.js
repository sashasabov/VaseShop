// const mongoose = require('mongoose');

require('../db/connection');

const Product = require('../models/products');

const productseeds = require('./newproducts.json')

Product.deleteMany({})
.then(() => {
  return Product.insertMany(productseeds)
})
.then((product) => {
  console.log("products created: ", product)
})
.catch((err) =>{
  console.log(err)
})
.finally(()=> {
  process.exit
})



