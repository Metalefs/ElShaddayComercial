"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes_1 = require("../Routes");
var Mongo_1 = require("../../MongoDB/Mongo");
var MongoCollections_1 = require("../../MongoDB/MongoCollections");
var express = require("express");
var usuarios_service_1 = require("../Usuario/usuarios.service");
var app = express();
// [GET]----------------------------------------------------------------------------------------------
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get(Routes_1.Rotas.Avaliacao, function (req, res) {
    console.log(Routes_1.Rotas.Avaliacao);
    try {
        Mongo_1.Mongo.Ler(MongoCollections_1.Collections.Avaliacao.NomeID, res);
    }
    catch (err) {
        res.send({ erro: err });
    }
}).post(Routes_1.Rotas.Avaliacao, function (req, res) {
    try {
        if (usuarios_service_1.UsuarioService.getByToken(req.body.token))
            res.send(Mongo_1.Mongo.Insert(MongoCollections_1.Collections.Avaliacao.NomeID, req.body.Avaliacao));
    }
    catch (err) {
        res.send({ erro: err });
    }
});
module.exports = app;
