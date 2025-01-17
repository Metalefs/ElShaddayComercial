require('dotenv').config()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require("cors");

import express = require('express');
const app: express.Application = express();

const RotasWeb = require("./Rotas/Web/Web");
const RotasPedido = require("./Rotas/Web/Pedido");
const RotasFeedback = require("./Rotas/Web/Feedback");
const RotasAvaliacao = require("./Rotas/Web/Avaliacao");
const RotasUsuario = require("./Rotas/Usuario/Usuarios.controller");
const RotasEditar  = require("./Rotas/Gerenciamento/Editar");
const RotasRemover = require("./Rotas/Gerenciamento/Remover");
const RotasIncluir = require("./Rotas/Gerenciamento/Incluir");

app.use(cors());
app.use(express.static('./static-files'));
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(function(req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/", [RotasWeb,RotasPedido,RotasAvaliacao,RotasFeedback]);
app.use("/usuario", [RotasUsuario]);
app.use("/gerenciamento/", [RotasEditar,RotasRemover,RotasIncluir]);

app.listen(port, () => console.log(`Running on port ${port}`));
