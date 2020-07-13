const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const rootRoutes = require("./Rotas/Web");
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/", [rootRoutes]);

app.listen(port, () => console.log(`Running on port ${port}`));
