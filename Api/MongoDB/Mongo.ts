const MongoClient = require('mongodb').MongoClient;
const MDBurl = "mongodb://mongo:27017/";
const MongoDBName = "chat_rumo";
import {Seeder} from "./MongoSeed";
import {Collections} from "./MongoCollections";
const Options = {
      useNewUrlParser: true, 
      poolSize : 10      
}
let logger = require("../chatlogger");
module.exports = {
      createCollection: function(collection: string | any[]){ // CRIAR COLEÇÕES DE DADOS (Não utilizado)
            for(let i = 0; i < collection.length; i++){
                  MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => void; }) {
                        if (err){
                              logger.log(err,true)
                              throw err;
                        }
                        var dbo = db.db(MongoDBName);
                        dbo.createCollection(collection[i], function(err: any, res: any) {
                              if (err){
                                    logger.log(err,true)
                                    throw err;
                              }
                        });
                        db.close();
                  }); 
            }
      },
      
      deleteCollection: function (collection: string){ //DELETA COLEÇÃO DE DADOS 
            MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => void; }) {
                  if (err){
                        logger.log(err,true)
                        throw err;
                  }
                  var dbo = db.db(MongoDBName);
                  dbo.collection(collection).drop(function(err: any, res: any) {
                        if (err){
                              logger.log(err,true)
                              throw err;
                        }
                        if (res) console.log("Collection "+collection+" deleted | "+new Date());
                        db.close();         
                  });
            }); 
      },
      /*Seeding Mongo DB */
      
      seedCollections: function(){
            let collectionsToSeed = Seeder.SeedEmpresa();

            collectionsToSeed.forEach((collection: Collections.Empresa)=>{
                  this.InsertMany("Empresa",collection);
            })
      },
      /*----------------------------*/

      InsertMany: (collection: any, value: any) => { // CRIA COLEÇÃO IMPLICITAMENTE E INSERE VÁRIOS
            MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => void; }) {
                  if (err){
                        logger.log(err,true)
                        throw err;
                  }
                  let dbo = db.db(MongoDBName);
                  dbo.collection(collection).insertMany(value, function(err: any, res: any) {
                        if (err){
                              logger.log(err,true)
                              throw err;
                        }
                        //console.log("Inserido "+res.insertedCount+" "+collection+" : " +res+" | "+new Date());
                        db.close();
                  });
            });
      },

      Insert: (collection: any,value: any) => { // CRIA COLEÇÃO IMPLICITAMENTE E INSERE UM
           
            MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => void; }) {
                  if (err){
                        logger.log(err,true)
                        throw err;
                  }
                  let dbo = db.db(MongoDBName);
                  dbo.collection(collection).insertOne(value, function(err: any, res: any) {
                        if (err){
                              logger.log(err,true)
                              throw err;
                        }
                        //console.log("Inserido "+res.insertedCount+" "+collection+" : " +res+" | "+new Date());
                        db.close();
                  });
            });
      },
      
      /*-------------------------*/

      getAndCache: async (collection: any,res: { send: (arg0: any) => void; },redisConfig: { setCache: (arg0: any, arg1: any) => void; },CacheKey: any) =>{ // OBTÉM DADOS DO BANCO, COLOCA EM CACHE E RETORNA PARA O CLIENTE
            await MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => void; }) {
                  if (err){
                        logger.log(err,true)
                        res.send(err);
                        throw err;
                  }
                  var dbo = db.db(MongoDBName);
                  dbo.collection(collection).find({}).toArray(function(err: any, result: any) {
                        if (err){
                              logger.log(err,true)()
                              res.send(err);
                              throw err;
                        }
                        //console.log({"Mongo":result});
                        redisConfig.setCache(CacheKey,result);
                        res.send(result);
                        db.close();
                  });
            });
      },

      getData: (collection: any,res: { send: (arg0: any) => void; }) =>{ // OBTÉM DADOS DO BANCO SEM COLOCAR EM CACHE
            MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => void; }) {
                  if (err){
                        logger.log(err,true)
                        throw err;
                  }
                  var dbo = db.db(MongoDBName);
                  dbo.collection(collection).find({}).toArray(function(err: any, result: any) {
                        if (err){
                              logger.log(err,true)
                              throw err;
                        }
                        res.send(result);
                        db.close();
                  });
            });
      },
      
}