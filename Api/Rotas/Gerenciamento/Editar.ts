import {Rotas} from '../Routes';
import {Mongo} from '../../MongoDB/Mongo';
import {Collections} from '../../MongoDB/MongoCollections';
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
    console.log(req.body.Cardapio.Src);
    try{
        let query = 
        {
            Dia: req.body.Cardapio.Dia,
            Nome: req.body.Cardapio.Nome,
            Ingredientes: req.body.Cardapio.Ingredientes,
            Tipo: req.body.Cardapio.Tipo,
            Src: req.body.Cardapio.Src,
            SrcType: req.body.Cardapio.SrcType
        }
        console.log("gerenciamento/"+Rotas.Cardapios,query)

        Mongo.Edit(Collections.Cardapio.NomeID, req.body.Cardapio._id, query).then(x=>{
            redisConfig.flushAll();
            console.log(x);

            res.send(x);
        });
    }
    catch(err){
        res.send({erro:err});
    }
});
app.put(Rotas.InfoContato, (req:any,res) => {
    try{

        let query = 
        {
            Telefone:req.body.InformacoesContato.Telefone,
            Email:req.body.InformacoesContato.Email,
            HorarioAtendimento:req.body.InformacoesContato.HorarioAtendimento,
            Whatsapp:req.body.InformacoesContato.Whatsapp,
            Instagram:req.body.InformacoesContato.Instagram
        }

        Mongo.Edit(Collections.InformacoesContato.NomeID, req.body.InformacoesContato._id, query).then(x=>{
            redisConfig.flushAll();
            res.send(x);
        });
        
    }
    catch(err){
        res.send({erro:err});
    }
});
app.put(Rotas.Sobre, (req:any,res) => {
    try{

        let query = 
        {
            Descricao:req.body.Sobre.Descricao,
            Nome:req.body.Sobre.Nome,
            Servico:req.body.Sobre.Servico,
            Historia:req.body.Sobre.Historia,
            Slogan:req.body.Sobre.Slogan,
        }

        Mongo.Edit(Collections.Sobre.NomeID, req.body.Sobre._id , query).then(x=>{
            redisConfig.flushAll();
            res.send(x);
        });
        
    }
    catch(err){
        res.send({erro:err});
    }
});
app.put(Rotas.PrecoMarmitex, (req:any, res) => {
    try{

        let query = 
        {"Pequena": req.body.PrecoMarmitex.Pequena,
         "Grande": req.body.PrecoMarmitex.Grande}
        
        Mongo.Edit(Collections.PrecoMarmitex.NomeID,req.body.PrecoMarmitex._id, query).then(x=>{
            redisConfig.flushAll();
            res.send(x);
        });
        
    }
    catch(err){
        res.send({erro:err});
    }
});
app.put(Rotas.Complemento, (req: any, res) => {
    try{
        let query = {"Nome": req.body.Complemento.Nome, "Tipo": req.body.Complemento.Tipo, "Preco": req.body.Complemento.Preco};
        console.log(query);
        Mongo.Filtrar(Collections.Complemento.NomeID, {"_id": req.body.Complemento._id}).then(result=>{
            Mongo.EditarPorAtributo(Collections.Complemento.NomeID, {"Nome": req.body.Complemento.Nome}, query);
            res.send({sucesso:req.body});
            redisConfig.flushAll();
        })
    }
    catch(err){
        res.send({erro:err, query:req.body});
    }
});
module.exports = app;