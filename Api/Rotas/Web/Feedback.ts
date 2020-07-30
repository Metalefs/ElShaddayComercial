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
app.post(Rotas.Feedback, (req:any,res) =>{
    try{
        if(service.getByToken(req.body.token))
            res.send(Mongo.Insert(Collections.Feedback.NomeID, req.body.Feedback));
    }
    catch(err){
        res.send({erro:err})
    }
});
module.exports = app;