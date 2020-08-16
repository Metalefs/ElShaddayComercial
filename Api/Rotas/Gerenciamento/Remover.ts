import {Rotas} from '../Routes';
import {Mongo} from '../../MongoDB/Mongo';
import {UsuarioService} from "../Usuario/usuarios.service";
import {redisConfig} from '../../Redis/redisConfig';
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
        console.log(req.query);
        UsuarioService.getByToken(req.query.token).then(user => {
            console.log(user);
            if (user[0].Tipo == 2) {
                Mongo.Remove(Collections.Cardapio.NomeID, req.query.id).then(x=>{
                    res.send(x);
                    redisConfig.flushAll();
                });
            }
        });
    }
    catch(err){
        res.send({erro:err});
    }
});

app.delete(Rotas.Complemento, (req:any ,res) => {
    try{
        console.log(req.query);
        UsuarioService.getByToken(req.query.token).then(user => {
            console.log(user);
            if (user[0].Tipo == 2) {
                Mongo.Remove(Collections.Complemento.NomeID, req.query.id).then(x=>{
                    res.send(x);
                    redisConfig.flushAll();
                });
            }
        });
    }
    catch(err){
        res.send({erro:err});
    }
});

app.delete(Rotas.InfoContato, (req:any,res) => {
    try{
        Mongo.Remove(Collections.InformacoesContato.NomeID, req.InformacoesContato)
    }
    catch(err){
        res.send({erro:err});
    }
});
app.delete(Rotas.Sobre, (req:any,res) => {
    try{
        Mongo.Remove(Collections.Sobre.NomeID, req.Sobre);
    }
    catch(err){
        res.send({erro:err});
    }
});
app.delete(Rotas.PrecoMarmitex, (req:any,res) => {
    try{
        Mongo.Remove(Collections.PrecoMarmitex.NomeID, req.PrecoMarmitex);
    }
    catch(err){
        res.send({erro:err});
    }
});
module.exports = app;