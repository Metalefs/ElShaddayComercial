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
app.put(Rotas.Cardapios, (req:any,res) =>{
    try{
        Mongo.Edit(Collections.Cardapio.NomeID, req.Cardapio, res);
    }
    catch(err){
        res.send({erro:err});
    }
});
app.put(Rotas.InfoContato, (req:any,res) => {
    try{
        Mongo.Edit(Collections.InformacoesContato.NomeID, req.InformacoesContato, res);
    }
    catch(err){
        res.send({erro:err});
    }
});
app.put(Rotas.Sobre, (req:any,res) => {
    try{
        Mongo.Edit(Collections.Sobre.NomeID, req.Sobre, res);
    }
    catch(err){
        res.send({erro:err});
    }
});
app.put(Rotas.PrecoMarmitex, (req:any, res) => {
    try{
        Mongo.Edit(Collections.PrecoMarmitex.NomeID, req.PrecoMarmitex, res);
    }
    catch(err){
        res.send({erro:err});
    }
});
app.put(Rotas.Complemento, (req: any, res) => {
    try{
        Mongo.Edit(Collections.Complemento.NomeID, req.Complemento, res);
    }
    catch(err){
        res.send({erro:err});
    }
});
module.exports = app;