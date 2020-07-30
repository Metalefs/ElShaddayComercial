"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes_1 = require("../Routes");
var Mongo_1 = require("../../MongoDB/Mongo");
var MongoCollections_1 = require("../../MongoDB/MongoCollections");
var usuarios_service_1 = require("../Usuario/usuarios.service");
var express = require("express");
var app = express();
// [GET]----------------------------------------------------------------------------------------------
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.post(Routes_1.Rotas.Pedido, function (req, res) {
    console.log(req.body);
    try {
        usuarios_service_1.service.getByToken(req.body.token).then(function (user) {
            if (user) {
                req.body.Pedido.IdCliente = user;
                console.log(req.body.Pedido);
                res.send(Mongo_1.Mongo.Insert(MongoCollections_1.Collections.Pedido.NomeID, req.body.Pedido));
            }
        });
    }
    catch (err) {
        res.send({ erro: err });
    }
});
module.exports = app;
