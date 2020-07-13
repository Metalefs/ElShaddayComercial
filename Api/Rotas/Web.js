const express = require('express');
const app = express.Router();
const Rotas = require('./Routes');
const GAPI = require('../Classes/GoogleAPI/GApi');
// [GET]----------------------------------------------------------------------------------------------

app.get(Rotas.Cardapios, (req,res) => {
    let gApi = new GAPI();
    gApi.LerCardapio().then(function(data,err){
        res.send(data);
    });
});
app.get(Rotas.InfoContato, (req,res) => {
    let gApi = new GAPI();
    gApi.LerInformacaoContato().then(function(data,err){
        res.send(data);
    });
});
app.get(Rotas.Sobre, (req,res) => {
    let gApi = new GAPI();
    gApi.LerSobre().then(function(data,err){
        res.send(data);
    });
});
//app.use(forceSsl);
module.exports = app;