const express = require('express')
const propertyController = require('../controllers/propertyController')
const router = express.Router()
router.post('/createItem', propertyController.createItem)
router.get('/getItems', propertyController.getItems)
module.exports = router