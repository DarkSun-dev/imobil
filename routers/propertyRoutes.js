const express = require('express')
const propertyController = require('../controllers/propertyController')
const router = express.Router()
router.post('/createItem', propertyController.createItem)
router.get('/getItems', propertyController.getItems)
router.get('/getMyItems/:id', propertyController.getMyItems)
router.delete('/deleteItem/:id', propertyController.deleteItem)
module.exports = router 