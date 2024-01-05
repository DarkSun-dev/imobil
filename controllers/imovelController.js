const Imovel = require('../models/imovelModel')
const factory = require('./handlerFactory')

exports.createImob = factory.createOne(Imovel)
exports.getImobs = async (req, res, next) => {
    try {
        const doc = await Imovel.find().sort({ createdAt: -1, data: -1 })
        res.json({
            status: 'success',
            data: doc
        })
    } catch (error) {
        res.send({ e: error })
    }
}

exports.getMyImobs = async (req, res, next) => {
    try {
        const doc = await Imovel.find({ owner: req.params.id }).sort({ createdAt: -1, data: -1 })  
        res.json({
            status: 'success',
            data: doc
        })
    } catch (error) {
        res.send({ e: error })
    }
}

