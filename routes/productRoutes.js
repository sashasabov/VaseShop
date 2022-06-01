const express = require('express')
const router = express.Router();
const productCtrl = require('../controllers/productController')



// router.get('/', (req, res) => {
//     res.send("Welcome to my store!")
// })


router.get('/', productCtrl.index)

router.get('/new', productCtrl.newForm)

router.get('/:id/edit', productCtrl.editForm)

router.put('/:id', productCtrl.update)

router.delete('/:id', productCtrl.deleteOne)

router.get('/:id/itembought', productCtrl.buyOne)

router.patch('/:id', productCtrl.oneBought)

router.post('/', productCtrl.create)

router.get('/:id', productCtrl.show)





module.exports = router;