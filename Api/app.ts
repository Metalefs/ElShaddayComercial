const port = 3000;
const rootRoutes = require("./Rotas/Web");
const bodyParser = require('body-parser');
const cors = require("cors");

import express = require('express');
const app: express.Application = express();
const session = require('express-session');

app.use(cors());
app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/", [rootRoutes]);

app.listen(port, () => console.log(`Running on port ${port}`));
