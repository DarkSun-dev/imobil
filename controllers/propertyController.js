const Property = require('../models/propertyModel')
const factory = require('./handlerFactory')
exports.createItem = factory.createOne(Property)
exports.getItems = async (req, res, next) => {
    try {
        const doc = await Property.find().sort({ createdAt: -1, date: -1 })
        res.status(200).json({
            status: 'success',
            data: {
                data: doc
            }
        })
    } catch (error) { res.send({ e: error }) }
}

