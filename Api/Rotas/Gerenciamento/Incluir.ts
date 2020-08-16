import { Rotas } from '../Routes';
import { Mongo } from '../../MongoDB/Mongo';
import { Collections } from '../../MongoDB/MongoCollections';
import { UsuarioService } from "../Usuario/usuarios.service";
import { redisConfig } from '../../Redis/redisConfig';
import express = require('express');

const app: express.Application = express();

// [GET]----------------------------------------------------------------------------------------------
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.post(Rotas.Cardapios, (req: any, res) => {
    try {
        UsuarioService.getByToken(req.body.token).then(user => {
            console.log(user);
            if (user[0].Tipo == 2) {
                Mongo.Insert(Collections.Cardapio.NomeID, req.body.item.Cardapio).then(x => {
                    res.send(x);
                    redisConfig.flushAll();
                });
            }
        });
    }
    catch (err) {
        res.send({ erro: err })
    }
});
app.post(Rotas.Complemento, (req: any, res) => {
    try {
        UsuarioService.getByToken(req.body.token).then(user => {
            console.log(user);
            if (user[0].Tipo == 2) {
                Mongo.Insert(Collections.Complemento.NomeID, req.body.item.Complemento).then(x => {
                    res.send(x);
                    redisConfig.flushAll();
                });
            }
        });
    }
    catch (err) {
        res.send({ erro: err })
    }
});
app.post(Rotas.InfoContato, (req: any, res) => {
    try {
        UsuarioService.getByToken(req.body.token).then(user => {
            console.log(user);
            if (user[0].Tipo == 2) {
                Mongo.Insert(Collections.InformacoesContato.NomeID, req.body.InformacoesContato)
            }
        });
    }
    catch (err) {
        res.send({ erro: err })
    }
});
app.post(Rotas.Sobre, (req: any, res) => {
    try {
        UsuarioService.getByToken(req.body.token).then(user => {
            console.log(user);
            if (user[0].Tipo == 2) {
                Mongo.Insert(Collections.Sobre.NomeID, req.body.Sobre)
            }
        });
    }
    catch (err) {
        res.send({ erro: err })
    }
});
app.post(Rotas.PrecoMarmitex, (req: any, res) => {
    try {
        UsuarioService.getByToken(req.body.token).then(user => {
            console.log(user);
            if (user[0].Tipo == 2) {
                Mongo.Insert(Collections.PrecoMarmitex.NomeID, req.body.PrecoMarmitex)
            }
        });
    }
    catch (err) {
        res.send({ erro: err })
    }
});
module.exports = app;