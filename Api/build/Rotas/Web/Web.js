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
app.get(Routes_1.Rotas.Cardapios, function (req, res) {
    if (req.queryObj !== undefined)
        res.send(Mongo_1.Mongo.BuscarUm(MongoCollections_1.Collections.Cardapio.NomeID, JSON.parse(req.queryObj)));
    Mongo_1.Mongo.Ler(MongoCollections_1.Collections.Cardapio.NomeID, res);
});
app.get(Routes_1.Rotas.InfoContato, function (req, res) {
    Mongo_1.Mongo.Ler(MongoCollections_1.Collections.InformacoesContato.NomeID, res);
});
app.get(Routes_1.Rotas.Sobre, function (req, res) {
    Mongo_1.Mongo.Ler(MongoCollections_1.Collections.Sobre.NomeID, res);
});
app.get(Routes_1.Rotas.PrecoMarmitex, function (req, res) {
    Mongo_1.Mongo.Ler(MongoCollections_1.Collections.PrecoMarmitex.NomeID, res);
});
app.get(Routes_1.Rotas.Complemento, function (req, res) {
    Mongo_1.Mongo.Ler(MongoCollections_1.Collections.Complemento.NomeID, res);
});
app.get(Routes_1.Rotas.Seed, function (req, res) {
    Mongo_1.Mongo.seedCollections();
    res.send('seeded');
});
module.exports = app;
