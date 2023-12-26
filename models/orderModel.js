const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    orderID: {
        type: String, //propertyObjID + order-user Telefone
        unique: true,
        required: true
    },
    publisherID: {
        type: String, //user publisher telefone
        required: true
    },
    propertyID: {
        type: String,
        required: true
    },
    client: {
        type: String, //order-user Telefone
        required: true
    },
    date: String,
    status: {
        type: String,
        enum: ['sold', 'available'],
        default: 'available'
    }
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order