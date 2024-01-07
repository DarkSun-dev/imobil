const express = require('express')
const propertyController = require('../controllers/propertyController')
const imovelController = require('./../controllers/imovelController')
const router = express.Router()
router.post('/createItem', propertyController.createItem)
router.get('/getItems', propertyController.getItems)
router.get('/getMyItems/:id', propertyController.getMyItems)
router.delete('/deleteItem/:id', propertyController.deleteItem)

router.post('/createImob', imovelController.createImob)
router.get('/getImbos', imovelController.getImobs)
router.get('/getMyImobs/:id', imovelController.getMyImobs)   

module.exports = router 