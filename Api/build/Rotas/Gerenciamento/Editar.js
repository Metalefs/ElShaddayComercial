"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes_1 = require("../Routes");
var Mongo_1 = require("../../MongoDB/Mongo");
var MongoCollections_1 = require("../../MongoDB/MongoCollections");
var usuarios_service_1 = require("../Usuario/usuarios.service");
var multer = require('multer');
var express = require("express");
var ObjectId = require('mongodb').ObjectID;
var app = express();
var redisConfig_1 = require("../../Redis/redisConfig");
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var storage = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, 'static-files/imagens/cardapio');
    },
    filename: function (req, file, callBack) {
        callBack(null, "" + file.originalname);
    }
});
var upload = multer({ storage: storage });
// [ROUTES]----------------------------------------------------------------------------------------------
app.put(Routes_1.Rotas.Cardapios, upload.single('file'), function (req, res) {
    console.log("token", req.body.token);
    try {
        usuarios_service_1.UsuarioService.getByToken(req.body.token).then(function (user) {
            console.log(user);
            if (user[0].Tipo == 2) {
                var query = {
                    Dia: req.body.item.Cardapio.Dia,
                    Nome: req.body.item.Cardapio.Nome,
                    Ingredientes: req.body.item.Cardapio.Ingredientes,
                    Tipo: req.body.item.Cardapio.Tipo,
                    Src: req.body.item.Cardapio.Src,
                    SrcType: req.body.item.Cardapio.SrcType
                };
                Mongo_1.Mongo.Edit(MongoCollections_1.Collections.Cardapio.NomeID, req.body.item.Cardapio._id, query).then(function (x) {
                    redisConfig_1.redisConfig.flushAll();
                    res.send(x);
                });
            }
        });
    }
    catch (err) {
        res.send({ erro: err });
    }
});
app.put(Routes_1.Rotas.InfoContato, function (req, res) {
    try {
        usuarios_service_1.UsuarioService.getByToken(req.body.token).then(function (user) {
            console.log(user);
            if (user[0].Tipo == 2) {
                var query = {
                    Telefone: req.body.item.InformacoesContato.Telefone,
                    Email: req.body.item.InformacoesContato.Email,
                    HorarioAtendimento: req.body.item.InformacoesContato.HorarioAtendimento,
                    Whatsapp: req.body.item.InformacoesContato.Whatsapp,
                    Instagram: req.body.item.InformacoesContato.Instagram
                };
                Mongo_1.Mongo.Edit(MongoCollections_1.Collections.InformacoesContato.NomeID, req.body.item.InformacoesContato._id, query).then(function (x) {
                    redisConfig_1.redisConfig.flushAll();
                    res.send(x);
                });
            }
        });
    }
    catch (err) {
        res.send({ erro: err });
    }
});
app.put(Routes_1.Rotas.Sobre, function (req, res) {
    try {
        usuarios_service_1.UsuarioService.getByToken(req.body.token).then(function (user) {
            console.log(user);
            if (user[0].Tipo == 2) {
                var query = {
                    Descricao: req.body.item.Sobre.Descricao,
                    Nome: req.body.item.Sobre.Nome,
                    Servico: req.body.item.Sobre.Servico,
                    Historia: req.body.item.Sobre.Historia,
                    Slogan: req.body.item.Sobre.Slogan,
                };
                Mongo_1.Mongo.Edit(MongoCollections_1.Collections.Sobre.NomeID, req.body.item.Sobre._id, query).then(function (x) {
                    redisConfig_1.redisConfig.flushAll();
                    res.send(x);
                });
            }
        });
    }
    catch (err) {
        res.send({ erro: err });
    }
});
app.put(Routes_1.Rotas.PrecoMarmitex, function (req, res) {
    try {
        usuarios_service_1.UsuarioService.getByToken(req.body.token).then(function (user) {
            console.log(user);
            if (user[0].Tipo == 2) {
                var query = {
                    "Pequena": req.body.item.PrecoMarmitex.Pequena,
                    "Grande": req.body.item.PrecoMarmitex.Grande
                };
                Mongo_1.Mongo.Edit(MongoCollections_1.Collections.PrecoMarmitex.NomeID, req.body.item.PrecoMarmitex._id, query).then(function (x) {
                    redisConfig_1.redisConfig.flushAll();
                    res.send(x);
                });
            }
        });
    }
    catch (err) {
        res.send({ erro: err });
    }
});
app.put(Routes_1.Rotas.Complemento, function (req, res) {
    try {
        usuarios_service_1.UsuarioService.getByToken(req.body.token).then(function (user) {
            console.log(user);
            if (user[0].Tipo == 2) {
                var query_1 = { "Nome": req.body.item.Complemento.Nome, "Tipo": req.body.item.Complemento.Tipo, "Preco": req.body.item.Complemento.Preco };
                console.log(query_1);
                Mongo_1.Mongo.Filtrar(MongoCollections_1.Collections.Complemento.NomeID, { "_id": req.body.item.Complemento._id }).then(function (result) {
                    Mongo_1.Mongo.EditarPorAtributo(MongoCollections_1.Collections.Complemento.NomeID, { "Nome": req.body.item.Complemento.Nome }, query_1);
                    res.send({ sucesso: req.body });
                    redisConfig_1.redisConfig.flushAll();
                });
            }
        });
    }
    catch (err) {
        res.send({ erro: err, query: req.body });
    }
});
module.exports = app;
