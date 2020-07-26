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
exports.Mongo = void 0;
var MongoClient = require('mongodb').MongoClient;
var MDBurl = process.env.MONGODB_URI || 'mongodb+srv://Metalefs:i4e7l4@cluster0.7u463.azure.mongodb.net/ElShadday?retryWrites=true&w=majority';
var MongoDBName = "ElShadday";
var MongoSeed_1 = require("./MongoSeed");
var Options = {
    useNewUrlParser: true,
    poolSize: 10,
    useUnifiedTopology: true
};
var logger_1 = require("../logger");
var logger = new logger_1.Logger();
var Mongo;
(function (Mongo) {
    function createCollection(collection) {
        var _loop_1 = function (i) {
            MongoClient.connect(MDBurl, Options, function (err, db) {
                if (err) {
                    logger.log(err);
                    throw err;
                }
                var dbo = db.db(MongoDBName);
                dbo.createCollection(collection[i], function (err, res) {
                    if (err) {
                        logger.log(err);
                        throw err;
                    }
                });
                db.close();
            });
        };
        for (var i = 0; i < collection.length; i++) {
            _loop_1(i);
        }
    }
    Mongo.createCollection = createCollection;
    function deleteCollection(collection) {
        MongoClient.connect(MDBurl, Options, function (err, db) {
            if (err) {
                logger.log(err);
                throw err;
            }
            var dbo = db.db(MongoDBName);
            dbo.collection(collection).drop(function (err, res) {
                if (err) {
                    logger.log(err);
                    throw err;
                }
                if (res)
                    console.log("Collection " + collection + " deleted | " + new Date());
                db.close();
            });
        });
    }
    Mongo.deleteCollection = deleteCollection;
    /*Seeding Mongo DB */
    function seedCollections() {
        return __awaiter(this, void 0, void 0, function () {
            var collectionsToSeed;
            return __generator(this, function (_a) {
                collectionsToSeed = MongoSeed_1.Seeder.SeedCollections();
                try {
                    collectionsToSeed.forEach(function (collection) {
                        console.log(collection.name);
                        if (collection.Single) {
                            console.log("Inserindo um", collection.Single, collection.value);
                            Insert(collection.name, collection.value);
                        }
                        else {
                            console.log("Inserindo muitos", collection.Single, collection.value);
                            InsertMany(collection.name, collection.value);
                        }
                    });
                }
                catch (err) {
                    console.log(err);
                }
                return [2 /*return*/];
            });
        });
    }
    Mongo.seedCollections = seedCollections;
    /*----------------------------*/
    function InsertMany(collection, value) {
        MongoClient.connect(MDBurl, Options, function (err, db) {
            if (err) {
                logger.log(err);
                throw err;
            }
            var dbo = db.db(MongoDBName);
            dbo.collection(collection).insertMany(value, function (err, res) {
                if (err) {
                    logger.log(err);
                    throw err;
                }
                console.log("Inserido " + res.insertedCount + " " + collection + " :  | " + new Date());
                db.close();
            });
        });
    }
    Mongo.InsertMany = InsertMany;
    function Insert(collection, value) {
        MongoClient.connect(MDBurl, Options, function (err, db) {
            if (err) {
                logger.log(err);
                throw err;
            }
            var dbo = db.db(MongoDBName);
            dbo.collection(collection).insertOne(value, function (err, res) {
                if (err) {
                    logger.log(err);
                    throw err;
                }
                console.log("Inserido " + res.insertedCount + " " + collection + " : | " + new Date());
                db.close();
            });
        });
    }
    Mongo.Insert = Insert;
    function Ler(collection, res) {
        MongoClient.connect(MDBurl, Options, function (err, db) {
            if (err) {
                logger.log(err);
                throw err;
            }
            var dbo = db.db(MongoDBName);
            dbo.collection(collection).find({}).toArray(function (err, result) {
                if (err) {
                    logger.log(err);
                    throw err;
                }
                db.close();
                res.json(result);
            });
        });
    }
    Mongo.Ler = Ler;
    function LerECachear(collection, redisConfig, CacheKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        MongoClient.connect(MDBurl, Options, function (err, db) {
                            if (err) {
                                logger.log(err);
                                reject(err);
                                throw err;
                            }
                            var dbo = db.db(MongoDBName);
                            dbo.collection(collection).find({}).toArray(function (err, result) {
                                if (err) {
                                    logger.log(err);
                                    reject(err);
                                    throw err;
                                }
                                redisConfig.cacheResponse(CacheKey, result);
                                resolve(result);
                                db.close();
                            });
                        });
                    })];
            });
        });
    }
    Mongo.LerECachear = LerECachear;
    function BuscarUm(collection, query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        MongoClient.connect(MDBurl, Options, function (err, db) {
                            if (err) {
                                logger.log(err);
                                throw err;
                            }
                            var dbo = db.db(MongoDBName);
                            return dbo.collection(collection).findOne(query, function (err, result) {
                                if (err) {
                                    logger.log(err);
                                    throw err;
                                }
                                db.close();
                                console.log(result);
                                resolve(result);
                            });
                        });
                    })];
            });
        });
    }
    Mongo.BuscarUm = BuscarUm;
    function Edit(collection, id, query) {
        MongoClient.connect(MDBurl, Options, function (err, db) {
            if (err) {
                logger.log(err);
                throw err;
            }
            var dbo = db.db(MongoDBName);
            dbo.collection(collection).updateOne({ _id: id }, query, function (err, result) {
                if (err) {
                    logger.log(err);
                    throw err;
                }
                db.close();
            });
        });
    }
    Mongo.Edit = Edit;
    function Remove(collection, query) {
        MongoClient.connect(MDBurl, Options, function (err, db) {
            if (err) {
                logger.log(err);
                throw err;
            }
            var dbo = db.db(MongoDBName);
            dbo.collection(collection).deleteOne(query, function (err, result) {
                if (err) {
                    logger.log(err);
                    throw err;
                }
                console.log("removido " + result.insertedCount + " " + collection + " : | " + new Date());
                db.close();
            });
        });
    }
    Mongo.Remove = Remove;
})(Mongo = exports.Mongo || (exports.Mongo = {}));
