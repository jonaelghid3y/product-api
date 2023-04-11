const express = require('express')
const router = express.Router()
const controller = require('../controllers/productControllers')

router.get('/', controller.fetchAllProducts)
router.get('/:productId', controller.fetchSpecifikProducts)
router.post('/', controller.createProduct)
router.delete('/:productId', controller.deleteProduct)
router.patch('/:productId', controller.uppdateProduct)




module.exports = router