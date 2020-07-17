const MongoClient = require('mongodb').MongoClient;
const MDBurl = "mongodb://mongo:27017/";
const MongoDBName = "chat_rumo";
const MongoSeeder = require("./MongoSeed");
const MongoCollections = require("./MongoCollections");
const Options = {
      useNewUrlParser: true, 
      poolSize : 10      
}
let logger = require("../chatlogger");
module.exports = {
      createCollection: function(collection){ // CRIAR COLEÇÕES DE DADOS (Não utilizado)
            for(let i = 0; i < collection.length; i++){
                  MongoClient.connect(MDBurl,Options, function(err, db) {
                        if (err){
                              logger.log(err,true)
                              throw err;
                        }
                        var dbo = db.db(MongoDBName);
                        dbo.createCollection(collection[i], function(err, res) {
                              if (err){
                                    logger.log(err,true)
                                    throw err;
                              }
                        });
                        db.close();
                  }); 
            }
      },
      
      deleteCollection: function (collection){ //DELETA COLEÇÃO DE DADOS 
            MongoClient.connect(MDBurl,Options, function(err, db) {
                  if (err){
                        logger.log(err,true)
                        throw err;
                  }
                  var dbo = db.db(MongoDBName);
                  dbo.collection(collection).drop(function(err, res) {
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
            let collectionsToSeed = MongoSeeder.seedCollections();
            collectionsToSeed.forEach((collection)=>{
                  this.InsertMany(collection.Collection,collection.Value);
            })
      },
      deleteSeed: function(){
            let collectionsToDelete = MongoSeeder.deleteSeed;
            for(let i = 0; i< collectionsToDelete.length; i++){
                  this.deleteCollection(collectionsToDelete[i]);
            }
      },
      isSeeded: ()=>{ // TESTA SE O BANCO JÁ FOI POPULADO
            MongoClient.connect(MDBurl,Options, function(err, db) {
                  if (err){
                        logger.log(err,true)
                        throw err;
                  }
                  var dbo = db.db(MongoDBName);
                  dbo.collection(collections.Seed).find({}, function(err, result) {
                  if (err){
                        this.Insert(collections.Seed,"True");
                        logger.log(err,true)
                        throw err;
                  }
                  //console.log({"isSeeded":result});
                  db.close(); 
                  return result.length;
                  });
            });
      },
      /*----------------------------*/

      InsertMany: (collection,value) => { // CRIA COLEÇÃO IMPLICITAMENTE E INSERE VÁRIOS
            MongoClient.connect(MDBurl,Options, function(err, db) {
                  if (err){
                        logger.log(err,true)
                        throw err;
                  }
                  let dbo = db.db(MongoDBName);
                  dbo.collection(collection).insertMany(value, function(err, res) {
                        if (err){
                              logger.log(err,true)
                              throw err;
                        }
                        //console.log("Inserido "+res.insertedCount+" "+collection+" : " +res+" | "+new Date());
                        db.close();
                  });
            });
      },

      Insert: (collection,value) => { // CRIA COLEÇÃO IMPLICITAMENTE E INSERE UM
            if(collection == MongoCollections.Usuario){
                  logger.logusr(value);
            }
            MongoClient.connect(MDBurl,Options, function(err, db) {
                  if (err){
                        logger.log(err,true)
                        throw err;
                  }
                  let dbo = db.db(MongoDBName);
                  dbo.collection(collection).insertOne(value, function(err, res) {
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

      getAndCache: async (collection,res,redisConfig,CacheKey) =>{ // OBTÉM DADOS DO BANCO, COLOCA EM CACHE E RETORNA PARA O CLIENTE
            await MongoClient.connect(MDBurl,Options, function(err, db) {
                  if (err){
                        logger.log(err,true)
                        res.send(err);
                        throw err;
                  }
                  var dbo = db.db(MongoDBName);
                  dbo.collection(collection).find({}).toArray(function(err, result) {
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

      getData: (collection,res) =>{ // OBTÉM DADOS DO BANCO SEM COLOCAR EM CACHE
            MongoClient.connect(MDBurl,Options, function(err, db) {
                  if (err){
                        logger.log(err,true)
                        throw err;
                  }
                  var dbo = db.db(MongoDBName);
                  dbo.collection(collection).find({}).toArray(function(err, result) {
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