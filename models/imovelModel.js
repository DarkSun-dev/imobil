const mongoose = require('mongoose');
const ImovelSchema = new mongoose.Schema(
    {
        owner: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: [true, 'Preço: campo obrigatório']
        },
        address: {
            type: String,
            required: [true, 'Localização: campo obrigatório']
        },
        province: String,
        whatsapp: String,
        QA: { 
            label: {
                type: String,
                default: 'Número de salas ?'
            },
            response: {
                type: String,
                required: [true, 'Número de salas']
            }
        },
        QB: { 
            label: {
                type: String,
                default: 'Número cozinhas ?'
            },
            response: {
                type: String,
            }
        },
        QC: { 
            label: {
                type: String,
                default: 'Número quartos ?'
            },
            response: {
                type: String,
                required: [true, 'Número de quartos']
            }
        },
        QD: { 
            label: {
                type: String,
                default: 'Banheiro interno ?'
            },
            response: {
                type: String,
            }
        },
        QE: { 
            label: {
                type: String,
                default: 'Quintal compartilhado ?'
            },
            response: {
                type: String,
            }
        },
        QF: { 
            label: {
                type: String,
                default: 'Casa de banho compartilhada ?'
            },
            response: {
                type: String,
            }
        },
        QG: { 
            label: {
                type: String,
                default: 'Agua/torneira compartilhada ?'
            },
            response: {
                type: String,
            }
        },
        QH: { 
            label: {
                type: String,
                default: 'Luz/Credeleck compartilhado ?'
            },
            response: {
                type: String,
            }
        },
        QI: { 
            label: {
                type: String,
                default: 'Muro de vedação ?'
            },
            response: {
                type: String,
            }
        },
        QJ: { 
            label: {
                type: String,
                default: 'Cerca electrica ou metalica no murro de vedação ?'
            },
            response: {
                type: String,
            }
        },
        data: {
            type: String,
            required: true
        }
    }, {
        timestamps: true
    })


const Imovel = mongoose.model('Imovel', ImovelSchema)
module.exports = Imovel
