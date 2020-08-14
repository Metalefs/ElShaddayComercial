const MongoClient = require('mongodb').MongoClient;
const MDBurl = process.env.MONGODB_URI || 'mongodb+srv://Metalefs:i4e7l4@cluster0.7u463.azure.mongodb.net/ElShadday?retryWrites=true&w=majority';
const MongoDBName = "ElShadday";
var ObjectId = require('mongodb').ObjectID;
import {Seeder} from "./MongoSeed";
const Options = {
      useNewUrlParser: true, 
      poolSize : 10,
      useUnifiedTopology: true   
}
import {AppLogger} from "../app-logger";
let logger = new AppLogger();

export module Mongo {
      export function createCollection(collection: string | any[]){ // CRIAR COLEÇÕES DE DADOS (Não utilizado)
            for(let i = 0; i < collection.length; i++){
                  MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => void; }) {
                        if (err){
                              logger.log(err)
                              throw err;
                        }
                        var dbo = db.db(MongoDBName);
                        dbo.createCollection(collection[i], function(err: any, res: any) {
                              if (err){
                                    logger.log(err)
                                    throw err;
                              }
                        });
                        db.close();
                  }); 
            }
      }
      
      export function deleteCollection (collection: string){ //DELETA COLEÇÃO DE DADOS 
            MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => void; }) {
                  if (err){
                        logger.log(err)
                        throw err;
                  }
                  var dbo = db.db(MongoDBName);
                  dbo.collection(collection).drop(function(err: any, res: any) {
                        if (err){
                              logger.log(err)
                              throw err;
                        }
                        if (res) console.log("Collection "+collection+" deleted | "+new Date());
                        db.close();         
                  });
            }); 
      }
      /*Seeding Mongo DB */
      
      export async function seedCollections(){
            let collectionsToSeed = Seeder.SeedCollections();
            try{
                  collectionsToSeed.forEach((collection: any)=>{
                        console.log(collection.name);
                        if(collection.Single){
                              console.log("Inserindo um", collection.Single, collection.value);
                              Insert(collection.name, collection.value)
                        }
                        else{
                              console.log("Inserindo muitos", collection.Single, collection.value);
                              InsertMany(collection.name, collection.value)
                        }
                  })
            }
            catch(err){
                  console.log(err);
            }
      }
      /*----------------------------*/

      export function InsertMany(collection: any, value: any)  { // CRIA COLEÇÃO IMPLICITAMENTE E INSERE VÁRIOS
            MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => void; }) {
                  if (err){
                        logger.log(err)
                        throw err;
                  }
                  let dbo = db.db(MongoDBName);
                  dbo.collection(collection).insertMany(value, function(err: any, res: any) {
                        if (err){
                              logger.log(err)
                              throw err;
                        }
                        console.log("Inserido "+res.insertedCount+" "+collection+" :  | "+new Date());
                        db.close();
                  });
            });
      }

      export function Insert (collection: any,value: any)  { // CRIA COLEÇÃO IMPLICITAMENTE E INSERE UM
           
            MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => void; }) {
                  if (err){
                        logger.log(err)
                        throw err;
                  }
                  let dbo = db.db(MongoDBName);
                  dbo.collection(collection).insertOne(value, function(err: any, res: any) {
                        if (err){
                              logger.log(err)
                              throw err;
                        }
                        console.log("Inserido "+res.insertedCount+" "+collection+" : | "+new Date());
                        db.close();
                  });
            });

      }      
      
      export function Ler (collection: string, res : any){ // OBTÉM DADOS DO BANCO SEM COLOCAR EM CACHE
            MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => object; }) {
                  if (err){
                        logger.log(err)
                        throw err;
                  }
                  var dbo = db.db(MongoDBName);
                  dbo.collection(collection).find({}).toArray(function(err: any, result: any) {
                        if (err){
                              logger.log(err)
                              throw err;
                        }
                        db.close();
                        res.json(result);
                  });
            });
      }

      export function Count (collection: string){ // OBTÉM DADOS DO BANCO SEM COLOCAR EM CACHE
            return new Promise((resolve, reject) => { MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => object; }) {
                        if (err){
                              logger.log(err)
                              throw err;
                        }
                        var dbo = db.db(MongoDBName);
                        dbo.collection(collection).countDocuments({}, function(error: any, numOfDocs: any){
                              if (err){
                                    logger.log(err)
                                    throw err;
                              }
                              db.close();
                              resolve(numOfDocs);
                        });
                  });
            });
      }

      
      export async function LerECachear (collection: string, redisConfig: any, CacheKey: string){ // OBTÉM DADOS DO BANCO, COLOCA EM CACHE E RETORNA PARA O CLIENTE
            return new Promise((resolve, reject) => { 
                  MongoClient.connect(MDBurl,Options, function(err: string, db: { db: (arg0: string) => any; close: () => void; }) {
                        if (err){
                              logger.log(err)
                              reject(err);
                              throw err;
                        }
                        var dbo = db.db(MongoDBName);
                        dbo.collection(collection).find({}).toArray(function(err: string, result: any) {
                              if (err){
                                    logger.log(err)
                                    reject(err);
                                    throw err;
                              }
                              redisConfig.cacheResponse(CacheKey, result);
                              resolve(result);
                              db.close();
                        });
                  });
            });
      }


      export async function BuscarUm (collection: string, query : any) { // OBTÉM DADOS DO BANCO SEM COLOCAR EM CACHE
           return new Promise((resolve, reject) => { 
                 MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => object; }) {
                        if (err){
                              throw err;
                        }
                        var dbo = db.db(MongoDBName);
                        dbo.collection(collection).find(query).toArray(function(err: string, result: unknown) {
                              if (err){
                                    throw err;
                              }
                              db.close();
                              console.log("Mongo BuscarUm", result);
                              resolve(result)
                        });
                  });
            });
      }

      export async function Filtrar (collection: string, query : any) { // OBTÉM DADOS DO BANCO SEM COLOCAR EM CACHE
            return new Promise((resolve, reject) => { 
                  MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => object; }) {
                         if (err){
                               logger.log(err)
                               throw err;
                         }
                         var dbo = db.db(MongoDBName);
                         return dbo.collection(collection).find(query).toArray(function(err: any, result: any) {
                               if (err){
                                     logger.log(err)
                                     throw err;
                               }
                               db.close();
                               console.log(result);
                               resolve(result)
                         });
                   });
             });
       }
      
      export async function Edit (collection: any, id:string, query: any)  { // CRIA COLEÇÃO IMPLICITAMENTE E INSERE UM
            return new Promise((resolve, reject) => { 
                  MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => void; }) {
                        if (err){
                              logger.log(err)
                              throw err;
                        }
                        let dbo = db.db(MongoDBName);
                        console.log(collection,query,id);
                        dbo.collection(collection).updateOne({"_id": new ObjectId(id)}, {$set: query}, function(err: any, result: any) {
                              if (err){
                                    logger.log(err)
                                    throw err;
                              }
                              console.log("Editado", result, query)
                              resolve(result);
                              db.close();
                        });
                  });
            });
      }

      export function EditarPorAtributo (collection: any, attr:object, query: any)  { // CRIA COLEÇÃO IMPLICITAMENTE E INSERE UM
           
            MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => void; }) {
                  if (err){
                        logger.log(err)
                        throw err;
                  }
                  let dbo = db.db(MongoDBName);
                  console.log(collection,query,attr);
                  dbo.collection(collection).updateOne(attr, {$set: query}, function(err: any, result: any) {
                        if (err){
                              logger.log(err)
                              throw err;
                        }
                        console.log("Editado", result, query)
                        db.close();
                  });
            });
            
      }

      export function UpdateUserToken (collection: any, id:string, token: any)  { // CRIA COLEÇÃO IMPLICITAMENTE E INSERE UM
           
            MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => void; }) {
                  if (err){
                        logger.log(err)
                        throw err;
                  }
                  let dbo = db.db(MongoDBName);
                  dbo.collection(collection).updateOne({_id: id},{ $set: { token: token } }, function(err: any, result: any) {
                        if (err){
                              logger.log(err)
                              throw err;
                        }
                        console.log("Editado ", result.documents)
                        db.close();
                  });
            });
            
      }

      export function Remove (collection: any, query: any)  { // CRIA COLEÇÃO IMPLICITAMENTE E INSERE UM
           
            MongoClient.connect(MDBurl,Options, function(err: any, db: { db: (arg0: string) => any; close: () => void; }) {
                  if (err){
                        logger.log(err)
                        throw err;
                  }
                  let dbo = db.db(MongoDBName);
                  dbo.collection(collection).deleteOne(query, function(err: any, result: any) {
                        if (err){
                              logger.log(err)
                              throw err;
                        }
                        console.log("removido "+result.insertedCount+" "+collection+" : | "+new Date());
                        
                        db.close();
                  });
            });
            
      }
}