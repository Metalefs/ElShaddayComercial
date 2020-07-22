require('dotenv').config()
const port = process.env.PORT || 3000;
const RotasWeb = require("./Rotas/Web");
const RotasUsuario = require("./Rotas/Usuario");
const bodyParser = require('body-parser');
const cors = require("cors");
const uuid = require('uuid').v4

import express = require('express');
const app: express.Application = express();
const session = require('express-session');
const FileStore = require('session-file-store')(session);

app.use(cors());
app.use(session({
  genid: (req: any) => {
    console.log('Inside the session middleware')
    console.log(req.sessionID)
    return uuid() // use UUIDs for session IDs
  },
  store: new FileStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/", [RotasWeb]);
app.use("/user", [RotasUsuario]);

app.listen(port, () => console.log(`Running on port ${port}`));
