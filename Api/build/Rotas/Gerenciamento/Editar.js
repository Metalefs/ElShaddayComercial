"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes_1 = require("../Routes");
var Mongo_1 = require("../../MongoDB/Mongo");
var MongoCollections_1 = require("../../MongoDB/MongoCollections");
var express = require("express");
var ObjectId = require('mongodb').ObjectID;
var app = express();
var redisConfig_1 = require("../../Redis/redisConfig");
// [GET]----------------------------------------------------------------------------------------------
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.put(Routes_1.Rotas.Cardapios, function (req, res) {
    try {
        var query = {
            Dia: req.body.Cardapio.Dia,
            Nome: req.body.Cardapio.Nome,
            Ingredientes: req.body.Cardapio.Ingredientes,
            Tipo: req.body.Cardapio.Tipo,
            ImgSrc: req.body.Cardapio.ImgSrc,
            Preco: req.body.Cardapio.Preco,
            Tamanho: req.body.Cardapio.Tamanho
        };
        console.log("gerenciamento/" + Routes_1.Rotas.Cardapios, query);
        Mongo_1.Mongo.Edit(MongoCollections_1.Collections.Cardapio.NomeID, req.Cardapio._id, query).then(function (x) {
            redisConfig_1.redisConfig.flushAll();
            res.send(x);
        });
    }
    catch (err) {
        res.send({ erro: err });
    }
});
app.put(Routes_1.Rotas.InfoContato, function (req, res) {
    try {
        var query = {
            Telefone: req.body.InfoContato.Telefone,
            Email: req.body.InfoContato.Email,
            HorarioAtendimento: req.body.InfoContato.HorarioAtendimento,
            Whatsapp: req.body.InfoContato.Whatsapp,
            Instagram: req.body.InfoContato.Instagram
        };
        Mongo_1.Mongo.Edit(MongoCollections_1.Collections.InformacoesContato.NomeID, req.InformacoesContato._id, query).then(function (x) {
            redisConfig_1.redisConfig.flushAll();
            res.send(x);
        });
    }
    catch (err) {
        res.send({ erro: err });
    }
});
app.put(Routes_1.Rotas.Sobre, function (req, res) {
    try {
        var query = {
            Descricao: req.body.Sobre.Descricao,
            Nome: req.body.Sobre.Nome,
            Servico: req.body.Sobre.Servico,
            Historia: req.body.Sobre.Historia,
            Slogan: req.body.Sobre.Slogan,
        };
        Mongo_1.Mongo.Edit(MongoCollections_1.Collections.Sobre.NomeID, req.Sobre._id, query).then(function (x) {
            redisConfig_1.redisConfig.flushAll();
            res.send(x);
        });
    }
    catch (err) {
        res.send({ erro: err });
    }
});
app.put(Routes_1.Rotas.PrecoMarmitex, function (req, res) {
    try {
        var query = { "Pequena": req.body.PrecoMarmitex.Pequena,
            "Grande": req.body.PrecoMarmitex.Grande };
        Mongo_1.Mongo.Edit(MongoCollections_1.Collections.PrecoMarmitex.NomeID, req.body.PrecoMarmitex._id, query).then(function (x) {
            redisConfig_1.redisConfig.flushAll();
            res.send(x);
        });
    }
    catch (err) {
        res.send({ erro: err });
    }
});
app.put(Routes_1.Rotas.Complemento, function (req, res) {
    try {
        var query_1 = { "Nome": req.body.Complemento.Nome, "Tipo": req.body.Complemento.Tipo, "Preco": req.body.Complemento.Preco };
        console.log(query_1);
        Mongo_1.Mongo.Filtrar(MongoCollections_1.Collections.Complemento.NomeID, { "_id": req.body.Complemento._id }).then(function (result) {
            Mongo_1.Mongo.EditarPorAtributo(MongoCollections_1.Collections.Complemento.NomeID, { "Nome": req.body.Complemento.Nome }, query_1);
            res.send({ sucesso: req.body });
            redisConfig_1.redisConfig.flushAll();
        });
    }
    catch (err) {
        res.send({ erro: err, query: req.body });
    }
});
module.exports = app;
