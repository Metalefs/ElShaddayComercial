"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes_1 = require("../Routes");
var Mongo_1 = require("../../MongoDB/Mongo");
var MongoCollections_1 = require("../../MongoDB/MongoCollections");
var express = require("express");
var app = express();
// [GET]----------------------------------------------------------------------------------------------
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.put(Routes_1.Rotas.Cardapios, function (req, res) {
    try {
        Mongo_1.Mongo.Edit(MongoCollections_1.Collections.Cardapio.NomeID, req.Cardapio._id, req.Cardapio);
    }
    catch (err) {
        res.send({ erro: err });
    }
});
app.put(Routes_1.Rotas.InfoContato, function (req, res) {
    try {
        Mongo_1.Mongo.Edit(MongoCollections_1.Collections.InformacoesContato.NomeID, req.InformacoesContato._id, req.InformacoesContato);
    }
    catch (err) {
        res.send({ erro: err });
    }
});
app.put(Routes_1.Rotas.Sobre, function (req, res) {
    try {
        Mongo_1.Mongo.Edit(MongoCollections_1.Collections.Sobre.NomeID, req.Sobre._id, req.Sobre);
    }
    catch (err) {
        res.send({ erro: err });
    }
});
app.put(Routes_1.Rotas.PrecoMarmitex, function (req, res) {
    try {
        Mongo_1.Mongo.Edit(MongoCollections_1.Collections.PrecoMarmitex.NomeID, req.PrecoMarmitex._id, req.PrecoMarmitex);
    }
    catch (err) {
        res.send({ erro: err });
    }
});
app.put(Routes_1.Rotas.Complemento, function (req, res) {
    try {
        Mongo_1.Mongo.Edit(MongoCollections_1.Collections.Complemento.NomeID, req.Complemento._id, req.Complemento);
    }
    catch (err) {
        res.send({ erro: err });
    }
});
module.exports = app;
