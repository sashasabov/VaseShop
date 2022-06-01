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
    res.render('products/show',{
        product: product,
        id: req.params.id
    } )
   
})
}


let newForm = (req, res) => {
    res.render('products/new')
}


let editForm = (req, res) =>{
    Product.findById(req.params.id, (err, product) =>{
        if (err){
            console.log(err.message)
            return
    }
    res.render('products/edit', {
        product: product,
        id: req.params.id
    })
})
}

let deleteOne = (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, product) => {
            if (err){
                res.status(400).json(err)
                return
            }
            console.log('item deleted')
            res.redirect('/products')
        })
    }

let update = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, 
        {new:true}, (err, product) => {
            if(err){
                res.status(400).json(err)
                return
            }
            res.redirect('/products')
        } )
}

let create = (req, res) => {
    Product.create(req.body, (err, product) => {
        if (err){
            res.status(400).json(err)
            return
        }
    res.redirect('/products')
    })
}

let buyOne = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
            if(err){
                res.status(400).json(err)
            return
            }
            product.qty -= 1;
            res.render('products/itembought', {
                product: product,
                id: req.params.id,
                qty: product.qty
            })
        })
}

let oneBought = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true},
        (err, product) => {
            if(err){
                res.status(400).json(err)
            return
            }
            res.redirect('/products')
        })
}


module.exports = {
        index,
        show,
        newForm,
        editForm,
        deleteOne,
        update,
        create,
        buyOne,
        oneBought
    }



