const redis = require('redis');
const cacheAddress = process.env.REDIS_URL || "//127.0.0.1:6379";
import {AppLogger}  from "../app-logger";

const bluebird= require ('bluebird');
bluebird.promisifyAll(redis);
const redisClient = redis.createClient(cacheAddress);
let logger = new AppLogger();
export module redisConfig {
    
    export async function getCache(key: string) {
        //recovering the data from cache
        return new Promise((resolve, reject) => {  
            redisClient.getAsync(key).then((reply: string, err: string)=>{            
                if (err){
                    logger.log(err)
                    throw err;
                } else 
                if (reply) { 
                    var o = JSON.parse(reply);
                    if (o && typeof o === "object") {
                        resolve(o)
                    }
                } else {
                    resolve(false)
                    return false
                }
            });
        });
    }

    export async function cacheResponse (key: string, res : Express.Response) {
        //Saving the data in memory with redis
        await redisClient.set(key, JSON.stringify(res));
        redisClient.expire(key, 3600 * 24);
    };
    
    export async function flushAll () {
        return( await redisClient.flushdb(function (err: any, succeeded: any) {
            return succeeded; // will be true if successfull
        }));
    }
    
}