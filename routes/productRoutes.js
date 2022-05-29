const express = require('express')
const router = express.Router();
// const Product = require('../models/products');
// const newProducts = require('../seed/newproducts');
const productCtrl = require('../controllers/productController')



// router.get('/', (req, res) => {
//     res.send("Welcome to my store!")
// })

router.get('/', productCtrl.index)

router.get('/new', productCtrl.newForm)

router.get('/:id/edit', productCtrl.updateForm)





router.get('/:id', productCtrl.show)





module.exports = router;