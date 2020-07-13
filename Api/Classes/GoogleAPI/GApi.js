const request = require("request");
const csv = require('csvtojson')
class GAPI {
    constructor() {}
     
    CARDAPIO_ID = '2PACX-1vQXHSq7ZHftNdw0RK28GyIsMKJYDdOaW3GtUEgx5c5YBL8UsLFCnF5CFbkw7Yj3rFx1ax0dDzU8jViv';
    INFORMACAO_CONTATO_ID = '2PACX-1vSNZ0Y8ioRRGVZUYrPKE3lYr8D3bpk78TK6kvgYdN_AKk33bThMi2hvAgGL9mfKZyM8GATI9wJDkAss';
    SOBRE_ID = '2PACX-1vThQGr5NLnPFJhNY4rnk6tzYHa75z0_bfekFLSQj_f93GaCUhicHxDfjGvNvlDnZfKqdsZncrOhs-6M';
    
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
            csv({
                noheader:true,
                output: "csv"
            })
            .fromString(body)
            .then((csvRow)=>{ 
                console.log(csvRow)
            });
        });     
    }
}

module.exports = GAPI;