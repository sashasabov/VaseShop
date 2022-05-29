const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
        //function (){return this.name != null;}
        },
    description: String,
    img: String,
    price: {
        type: Number,
        min: [0, 'out of stock']
    },
    qty: {
        type: Number,
        min: [0, 'out of stock']
    },
})

const Product = mongoose.model('Product', productSchema);


module.exports = Product;