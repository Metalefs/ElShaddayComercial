const Rotas = require('./Routes');
const GAPI = require('../Classes/GoogleAPI/GApi');

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")

// [GET]----------------------------------------------------------------------------------------------
app.use(function(req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get(Rotas.Cardapios, (req: any,res: { json: (arg0: any) => void; }) => {
    let gApi = new GAPI();
    gApi.LerCardapio().then(function(result: any,err: any){
        res.json(result);
    });
});
app.get(Rotas.InfoContato, (req: any,res: { json: (arg0: any) => void; }) => {
    let gApi = new GAPI();
    gApi.LerInformacaoContato().then(function(result: any,err: any){
        res.json(result);
    });
});
app.get(Rotas.Sobre, (req: any,res: { json: (arg0: any) => void; }) => {
    let gApi = new GAPI();
    gApi.LerSobre().then(function(result: any,err: any){
        res.json(result);
    });
});
app.get(Rotas.Registro, (req: any,res: any)=>{
    const msg = {
    to: 'test@example.com',
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    
    sgMail.send(msg)
})
app.use(cors());
module.exports = app;