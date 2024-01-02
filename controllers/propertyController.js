const Property = require('../models/propertyModel')
const factory = require('./handlerFactory')
exports.createItem = factory.createOne(Property)
exports.getItems = async (req, res, next) => {
    if (Object.keys(req.query).length === 0) {
        try {
            const doc = await Property.find().sort({ createdAt: -1, date: -1 })
            res.status(200).json({
                status: 'success',
                data: {
                    data: doc
                }
            })
        } catch (error) { res.send({ e: error }) }
    } else {
        console.log(req.query)
        try {
            const doc = await Property.find({ province: req.query.province }).sort({ createdAt: -1, date: -1 })
            res.status(200).json({
                status: 'success',
                data: {
                    data: doc
                }
            })
        } catch (error) { res.send({ e: error }) }
    }

}
exports.deleteItem = factory.deleteOne(Property)
exports.getMyItems = async (req, res, next) => {
    try {
        const doc = await Property.find({ publisherID: req.params.id }).sort({ createdAt: -1, date: -1 })
        res.status(200).json({
            status: 'success',
            data: {
                data: doc
            }
        })
    } catch (error) { res.send({ e: error }) }
}
