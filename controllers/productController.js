const res = require('express/lib/response');
const { rawListeners } = require('../models/products');
const Product = require('../models/products');


let index = (req, res) => {
    Product.find({}, (err, product) =>{
        if (err){
            console.log(err.message)
            return
    }
    res.render('products/index', {product: product})
}
)}

let show = (req, res) => {
Product.findById(req.params.id, (err, product) =>{
    if (err){
        console.log(err.message)
        return
    }
    console.log(product.qty);
    // console.log(req.body.qty);
    res.render('products/show',{
        product: product,
        id: req.params.id
    } )
    console.log(product.qty);
})
}

let newForm = (req, res) => {
    res.render('products/new')
}


let updateForm = (req, res) =>{
    Product.findById(req.params.id, (err, product) =>{
        if (err){
            console.log(err.message)
            return
    }
    res.render('products/edit', {product: product})
})
}

module.exports = {
        index,
        show,
        newForm,
        updateForm
    }



