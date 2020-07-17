const request = require("request");
const csv = require('csvtojson')
class GAPI {
    constructor() {}
     
    CARDAPIO_ID = '2PACX-1vQXHSq7ZHftNdw0RK28GyIsMKJYDdOaW3GtUEgx5c5YBL8UsLFCnF5CFbkw7Yj3rFx1ax0dDzU8jViv';
    INFORMACAO_CONTATO_ID = '2PACX-1vSNZ0Y8ioRRGVZUYrPKE3lYr8D3bpk78TK6kvgYdN_AKk33bThMi2hvAgGL9mfKZyM8GATI9wJDkAss';
    SOBRE_ID = '2PACX-1vThQGr5NLnPFJhNY4rnk6tzYHa75z0_bfekFLSQj_f93GaCUhicHxDfjGvNvlDnZfKqdsZncrOhs-6M';
    
    async LerCardapio(){
        return this.ReadSheet(this.CARDAPIO_ID).then(function(data){return data});
    }
    async LerInformacaoContato(){
        return this.ReadSheet(this.INFORMACAO_CONTATO_ID).then(function(data){return data});
    }
    async LerSobre(){
        return this.ReadSheet(this.SOBRE_ID).then(function(data){return data});
    }

    ReadSheet = async function (SheetId){
        let url = `https://docs.google.com/spreadsheets/d/e/${SheetId}/pub?output=csv`;
        
        const promisifiedRequest = function(options) {
            return new Promise((resolve,reject) => {
                request(options, (error, response, body) => {
                    if (response) {
                        return resolve(response);
                    }
                    if (error) {
                        return reject(error);
                    }
                });
            });
        };
        
        return await (async function() {
            const options = {
                url: url,
                method: 'GET',
                gzip: true,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.96 Safari/537.36'
                }
            };
        
            let response = await promisifiedRequest(options);
            let data;
            data = await csv({
                noheader:true,
                output: "csv"
            })
            .fromString(response.body)
            .then((csvRow)=>{ 
                data = csvRow;
                return data;
            });
            return data;
        })();
        
    }
}

module.exports = GAPI;