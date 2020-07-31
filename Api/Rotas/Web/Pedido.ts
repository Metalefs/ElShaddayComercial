import {Rotas} from '../Routes';
import {Mongo} from '../../MongoDB/Mongo';
import {Collections} from '../../MongoDB/MongoCollections';
import {service} from "../Usuario/usuarios.service";
import express = require('express');
var mongo = require('mongodb');
const app: express.Application = express();

// [GET]----------------------------------------------------------------------------------------------
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.post(Rotas.Pedido, (req:any,res) =>{
    console.log(req.body);
    try{
        console.log(req.body.token);
        service.getByToken(req.body.token).then(user=>{
            if(user){
                req.body.Pedido.IdCliente = user;
                if(req.body.Pedido.IdCliente != 0){
                    console.log("Pedido a ser inserido",req.body.Pedido);
                    res.send(Mongo.Insert(Collections.Pedido.NomeID, req.body.Pedido));
                }else{
                    res.send("token inválido");
                }
            }
        });
    }
    catch(err){
        res.send({erro:err})
    }
}).get(Rotas.Pedido, (req:any,res) =>{
    console.log(Rotas.Pedido,req.query);
    try{
        service.getByToken(req.query.token).then(user=>{
            if(user){
                console.log(Rotas.Pedido,user);
                console.log("Query",{"IdCliente.Email": user[0].Email});
                Mongo.Filtrar(Collections.Pedido.NomeID, {"IdCliente.Email": user[0].Email}).then(result=>{
                    res.send(result);
                })
            }
        });
    }
    catch(err){
        res.send({erro:err})
    }
});
module.exports = app;