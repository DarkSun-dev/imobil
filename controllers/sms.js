const Reset = require('../models/resetPassword');
const client = require('twilio')(process.env.ACCOUNTSID, process.env.AUTHTOKEN)
function gerador(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.sendCode = async (req, res) => {
    client.messages
        .create({
            body: `From iMobil auth. n\ Codigo de confirmação:${gerador(4)}`,
            messagingServiceSid: process.env.MSS,
            to: '+258' + req.body.telefone
        })
        .then(message => res.send({ status: 'success', log: message }))
}

exports.sendPassword = async (req, res) => {
    const user = await Reset.findOne({ telefone: req.body.telefone })
    if (!user) {
        res.send({ status: 'error', message: 'Use usuário não possui registos para recuperação da sua password' }) 
    }else{/*
        client.messages 
        .create({ 
           body: `From iMobil auth. n\ Sua password é:${user.password}`,  
           messagingServiceSid: process.env.MSS,      
           to: '+258'+req.body.telefone
         }) 
        .then(message => res.send({status: 'success', message: message})) 
        .catch(e => res.send({message: 'error'}))*/
        res.send({status: 'success', message: user.password})
    }
}