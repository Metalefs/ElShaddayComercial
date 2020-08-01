import {Rotas} from '../Routes';
import {Mongo} from '../../MongoDB/Mongo';
import {Collections} from '../../MongoDB/MongoCollections';
import express = require('express');
import {service} from "../Usuario/usuarios.service";
const app: express.Application = express();

// [GET]----------------------------------------------------------------------------------------------
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get(Rotas.Avaliacao, (req:any,res) =>{
    console.log(Rotas.Avaliacao);
    try{
       Mongo.Ler(Collections.Avaliacao.NomeID,res);
    }
    catch(err){
        res.send({erro:err})
    }
}).post(Rotas.Avaliacao, (req:any,res) =>{
    try{
        if(service.getByToken(req.body.token))
            res.send(Mongo.Insert(Collections.Avaliacao.NomeID, req.body.Avaliacao));
    }
    catch(err){
        res.send({erro:err})
    }
});
module.exports = app;