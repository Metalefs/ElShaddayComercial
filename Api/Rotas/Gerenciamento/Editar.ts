import {Rotas} from '../Routes';
import {Mongo} from '../../MongoDB/Mongo';
import {Collections} from '../../MongoDB/MongoCollections';
import {UsuarioService} from "../Usuario/usuarios.service";
const multer = require('multer');

import express = require('express');
var ObjectId = require('mongodb').ObjectID;
const app: express.Application = express();
import {redisConfig} from '../../Redis/redisConfig';
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const storage = multer.diskStorage({
    destination: (req: any, file: any, callBack: (arg0: null, arg1: string) => void) => {
        callBack(null, 'static-files/imagens/cardapio')
    },
    filename: (req: any, file: { originalname: any; }, callBack: (arg0: null, arg1: string) => void) => {
        callBack(null, `${file.originalname}`)
    }
  })
  
const upload = multer({ storage: storage })


// [ROUTES]----------------------------------------------------------------------------------------------


app.put(Rotas.Cardapios, upload.single('file'), (req:any,res) =>{
    console.log("token",req.body.token);
    try{
        UsuarioService.getByToken(req.body.token).then(user=>{
            console.log(user);
            if(user[0].Tipo == 2){
                let query = 
                {
                    Dia: req.body.item.Cardapio.Dia,
                    Nome: req.body.item.Cardapio.Nome,
                    Ingredientes: req.body.item.Cardapio.Ingredientes,
                    Tipo: req.body.item.Cardapio.Tipo,
                    Src: req.body.item.Cardapio.Src,
                    SrcType: req.body.item.Cardapio.SrcType
                }

                Mongo.Edit(Collections.Cardapio.NomeID, req.body.item.Cardapio._id, query).then(x=>{
                    redisConfig.flushAll();
                    res.send(x);
                });
            }
        });
    }
    catch(err){
        res.send({erro:err});
    }
});
app.put(Rotas.InfoContato, (req:any,res) => {
    try{
        UsuarioService.getByToken(req.body.token).then(user => {
            console.log(user);
            if (user[0].Tipo == 2) {
                let query =
                {
                    Telefone: req.body.item.InformacoesContato.Telefone,
                    Email: req.body.item.InformacoesContato.Email,
                    HorarioAtendimento: req.body.item.InformacoesContato.HorarioAtendimento,
                    Whatsapp: req.body.item.InformacoesContato.Whatsapp,
                    Instagram: req.body.item.InformacoesContato.Instagram
                }

                Mongo.Edit(Collections.InformacoesContato.NomeID, req.body.item.InformacoesContato._id, query).then(x => {
                    redisConfig.flushAll();
                    res.send(x);
                });
            }
        });
        
    }
    catch(err){
        res.send({erro:err});
    }
});
app.put(Rotas.Sobre, (req:any,res) => {
    try{
        UsuarioService.getByToken(req.body.token).then(user => {
            console.log(user);
            if (user[0].Tipo == 2) {
                let query =
                {
                    Descricao: req.body.item.Sobre.Descricao,
                    Nome: req.body.item.Sobre.Nome,
                    Servico: req.body.item.Sobre.Servico,
                    Historia: req.body.item.Sobre.Historia,
                    Slogan: req.body.item.Sobre.Slogan,
                }

                Mongo.Edit(Collections.Sobre.NomeID, req.body.item.Sobre._id, query).then(x => {
                    redisConfig.flushAll();
                    res.send(x);
                });
            }
        });
    }
    catch(err){
        res.send({erro:err});
    }
});
app.put(Rotas.PrecoMarmitex, (req:any, res) => {
    try{
        UsuarioService.getByToken(req.body.token).then(user => {
            console.log(user);
            if (user[0].Tipo == 2) {
                let query =
                {
                    "Pequena": req.body.item.PrecoMarmitex.Pequena,
                    "Grande": req.body.item.PrecoMarmitex.Grande
                }

                Mongo.Edit(Collections.PrecoMarmitex.NomeID, req.body.item.PrecoMarmitex._id, query).then(x => {
                    redisConfig.flushAll();
                    res.send(x);
                });
            }
        });
        
    }
    catch(err){
        res.send({erro:err});
    }
});
app.put(Rotas.Complemento, (req: any, res) => {
    try{
        UsuarioService.getByToken(req.body.token).then(user => {
            console.log(user);
            if (user[0].Tipo == 2) {
                let query = { "Nome": req.body.item.Complemento.Nome, "Tipo": req.body.item.Complemento.Tipo, "Preco": req.body.item.Complemento.Preco };
                console.log(query);
                Mongo.Filtrar(Collections.Complemento.NomeID, { "_id": req.body.item.Complemento._id }).then(result => {
                    Mongo.EditarPorAtributo(Collections.Complemento.NomeID, { "Nome": req.body.item.Complemento.Nome }, query);
                    res.send({ sucesso: req.body });
                    redisConfig.flushAll();
                })
            }
        });
    }
    catch(err){
        res.send({erro:err, query:req.body});
    }
});
module.exports = app;