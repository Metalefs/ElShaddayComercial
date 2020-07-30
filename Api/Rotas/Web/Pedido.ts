import {Rotas} from '../Routes';
import {Mongo} from '../../MongoDB/Mongo';
import {Collections} from '../../MongoDB/MongoCollections';
import {service} from "../Usuario/usuarios.service";
import express = require('express');

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
        service.getByToken(req.body.token).then(user=>{
            if(user){
                req.body.Pedido.IdCliente = user;
                console.log(req.body.Pedido);
                res.send(Mongo.Insert(Collections.Pedido.NomeID, req.body.Pedido));
            }
        });
    }
    catch(err){
        res.send({erro:err})
    }
});
module.exports = app;