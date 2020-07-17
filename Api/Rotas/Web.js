const express = require('express');
const app = express.Router();
const cors = require('cors');
const Rotas = require('./Routes');
const GAPI = require('../Classes/GoogleAPI/GApi');

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")

// [GET]----------------------------------------------------------------------------------------------
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get(Rotas.Cardapios, (req,res) => {
    let gApi = new GAPI();
    gApi.LerCardapio().then(function(result,err){
        res.json(result);
    });
});
app.get(Rotas.InfoContato, (req,res) => {
    let gApi = new GAPI();
    gApi.LerInformacaoContato().then(function(result,err){
        res.json(result);
    });
});
app.get(Rotas.Sobre, (req,res) => {
    let gApi = new GAPI();
    gApi.LerSobre().then(function(result,err){
        res.json(result);
    });
});
app.get(Rotas.Registro, (req,res)=>{
    const msg = {
    to: 'test@example.com',
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    
    sgMail.send(msg)
})
app.use(cors());
module.exports = app;