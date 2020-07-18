import {Rotas} from './Rotas';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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")
import express = require('express');

const app: express.Application = express();
import {Mongo} from '../MongoDB/Mongo';
import {Collections} from '../MongoDB/MongoCollections';

// [GET]----------------------------------------------------------------------------------------------
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get(Rotas.Cardapios, (req,res) =>{
    let dados = Mongo.Ler(Collections.Cardapio.NomeID);
    res.json(dados);
});
app.get(Rotas.InfoContato, (req,res) => {
    let dados = Mongo.Ler(Collections.InformacoesContato.NomeID);
    res.json(dados);
});
app.get(Rotas.Sobre, (req,res) => {
    let dados = Mongo.Ler(Collections.Sobre.NomeID);
    res.json(dados);
});
app.get(Rotas.Seed, (req,res) => {
    Mongo.seedCollections();
    res.send('seeded');
});
app.get(Rotas.Registro, (req,res) =>{
    const msg = {
    to: 'jack-ten@hotmail.com',
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    
    sgMail.send(msg)
})

module.exports = app;