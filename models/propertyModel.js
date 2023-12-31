const mongoose = require('mongoose')
const propertSchema = new mongoose.Schema({
    publisherID: {
        type: String,//user publisher telefone
        required: true
    },
    property_name: {
        type: String,
        required: [true, 'Por favor forneça-nos o nome do património!']
    },
    price: {
        type: Number,
        required: [true, 'Por favor forneça-nos o preço do património!']
    },
    whatsapp: String,
    description: {
        type: String,
        required: [true, 'Por favor forneça-nos a descriçãodo património!']
    },
    class: {
        type: String,
        enun: ['client', 'owner']
    },
    date: {
        type: String,
        default: new Date().toLocaleString()
    }
})

const Propert = mongoose.model('Propert', propertSchema);
module.exports = Propert
