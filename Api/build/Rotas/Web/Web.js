"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Routes_1 = require("../Routes");
var Mongo_1 = require("../../MongoDB/Mongo");
var MongoCollections_1 = require("../../MongoDB/MongoCollections");
var express = require("express");
var redisConfig_1 = require("../../Redis/redisConfig");
var app = express();
// [GET]----------------------------------------------------------------------------------------------
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get(Routes_1.Rotas.Cardapios, function (req, res) {
    var key = Routes_1.Rotas.Cardapios;
    getFromCacheOrDb(key, MongoCollections_1.Collections.Cardapio.NomeID).then(function (result) {
        res.send(result);
    });
});
app.get(Routes_1.Rotas.CardapiosPorDia, function (req, res) {
    if (req.query.Dia !== undefined) {
        Mongo_1.Mongo.Filtrar(MongoCollections_1.Collections.Cardapio.NomeID, { Dia: "1" }).then(function (x) {
            res.send(x);
        });
    }
    console.log(req.query.Dia);
});
app.get(Routes_1.Rotas.InfoContato, function (req, res) {
    var key = Routes_1.Rotas.InfoContato;
    getFromCacheOrDb(key, MongoCollections_1.Collections.InformacoesContato.NomeID).then(function (result) {
        res.send(result);
    });
});
app.get(Routes_1.Rotas.Sobre, function (req, res) {
    var key = Routes_1.Rotas.Sobre;
    getFromCacheOrDb(key, MongoCollections_1.Collections.Sobre.NomeID).then(function (result) {
        res.send(result);
    });
});
app.get(Routes_1.Rotas.PrecoMarmitex, function (req, res) {
    var key = Routes_1.Rotas.PrecoMarmitex;
    getFromCacheOrDb(key, MongoCollections_1.Collections.PrecoMarmitex.NomeID).then(function (result) {
        res.send(result);
    });
});
app.get(Routes_1.Rotas.Complemento, function (req, res) {
    var key = Routes_1.Rotas.Complemento;
    getFromCacheOrDb(key, MongoCollections_1.Collections.Complemento.NomeID).then(function (result) {
        res.send(result);
    });
});
function getFromCacheOrDb(key, collection) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, redisConfig_1.redisConfig.getCache(key).then(function (x) {
                        if (x === false || x === undefined) {
                            return Mongo_1.Mongo.LerECachear(collection, redisConfig_1.redisConfig, key);
                        }
                        return x;
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
app.get(Routes_1.Rotas.Seed, function (req, res) {
    Mongo_1.Mongo.seedCollections();
    res.send('seeded');
});
app.get(Routes_1.Rotas.FlushAll, function (req, res) {
    if (req.query.force) {
        redisConfig_1.redisConfig.flushAll().then(function (x) {
            if (x == true)
                res.send("Flushed");
        });
    }
});
module.exports = app;
