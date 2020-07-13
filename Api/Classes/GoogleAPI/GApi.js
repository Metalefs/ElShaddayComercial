const request = require("request");
class GAPI {
    constructor() {}
     
    CARDAPIO_ID = '1Rkd3wSvAplfXYWzJT87XhinJMPMpa90VSbI9ku-hOso';
    INFORMACAO_CONTATO_ID = '1qlU7gm0KsPc2L24J27njmOb4YF3o3xhvUbhjoFLGIC4';
    SOBRE_ID = '1pLypWkNKRfDFSvocoK82dMJu-TInGe-KkQQRv7RqUQ8';
    
    async LerCardapio(){
        this.ReadSheet(this.CARDAPIO_ID);
    }
    async LerInformacaoContato(){
        this.ReadSheet(this.INFORMACAO_CONTATO_ID);
    }
    async LerSobre(){
        this.ReadSheet(this.SOBRE_ID);
    }

    ReadSheet = function (SheetId){
        let url = `https://docs.google.com/spreadsheets/d/e/${SheetId}/pub?output=csv`;
        request(url, (error, response, body) => {
            if(error) return console.log(error);
            let json = JSON.parse(body);
            console.log(json);
        });     
    }
}

module.exports = GAPI;