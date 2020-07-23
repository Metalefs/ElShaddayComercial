import {Rotas} from '../Routes';
import {Mongo} from '../../MongoDB/Mongo';
import {Collections} from '../../MongoDB/MongoCollections';
import express = require('express');

const app: express.Application = express();

// [GET]----------------------------------------------------------------------------------------------
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.delete(Rotas.Cardapios, (req:any,res) =>{
    try{
        Mongo.Remove(Collections.Cardapio.NomeID, req.Cardapio ,res);
    }
    catch(err){
        res.send({erro:err});
    }
});
app.delete(Rotas.InfoContato, (req:any,res) => {
    try{
        Mongo.Remove(Collections.InformacoesContato.NomeID, req.InformacoesContato ,res);
    }
    catch(err){
        res.send({erro:err});
    }
});
app.delete(Rotas.Sobre, (req:any,res) => {
    try{
        Mongo.Remove(Collections.Sobre.NomeID, req.Sobre, res);
    }
    catch(err){
        res.send({erro:err});
    }
});
app.delete(Rotas.PrecoMarmitex, (req:any,res) => {
    try{
        Mongo.Remove(Collections.PrecoMarmitex.NomeID, req.PrecoMarmitex, res);
    }
    catch(err){
        res.send({erro:err});
    }
});
app.delete(Rotas.Complemento, (req:any ,res) => {
    try{
        Mongo.Remove(Collections.Complemento.NomeID, req.Complemento, res);
    }
    catch(err){
        res.send({erro:err});
    }
});
module.exports = app;