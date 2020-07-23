import {Rotas} from './Rotas';
import {Mongo} from '../MongoDB/Mongo';
import {Collections} from '../MongoDB/MongoCollections';
import express = require('express');

const app: express.Application = express();

// [GET]----------------------------------------------------------------------------------------------
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.post(Rotas.Cardapios, (req:any,res) =>{
    try{
        res.send(Mongo.Insert(Collections.Cardapio.NomeID, req.Cardapio));
    }
    catch(err){
        res.send({erro:err})
    }
});
app.post(Rotas.InfoContato, (req:any,res) => {
    try{
        res.send(Mongo.Insert(Collections.InformacoesContato.NomeID, req.InformacoesContato));
    }
    catch(err){
        res.send({erro:err})
    }
});
app.post(Rotas.Sobre, (req:any,res) => {
    try{
        res.send(Mongo.Insert(Collections.Sobre.NomeID, req.Sobre));
    }
    catch(err){
        res.send({erro:err})
    }
});
app.post(Rotas.PrecoMarmitex, (req:any,res) => {
    try{
        res.send(Mongo.Insert(Collections.PrecoMarmitex.NomeID, req.PrecoMarmitex));
    }
    catch(err){
        res.send({erro:err})
    }
});
app.post(Rotas.Complemento, (req:any,res) => {
    try{
        res.send(Mongo.Insert(Collections.Complemento.NomeID, req.Complemento));
    }
    catch(err){
        res.send({erro:err})
    }
});
module.exports = app;