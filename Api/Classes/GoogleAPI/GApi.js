const {google} = require('googleapis');
const fs = require('fs');
const readline = require('readline');

const sheets = google.sheets('v4');

class GAPI {
    constructor() {
        this.http = request;
     }
     
    SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    CLIENT_ID = '138055526829-43vsd1ct7lhpu1arbv0uob06d7sc23h3.apps.googleusercontent.com';
    API_KEY = 'dw-FpPdQqfiQVR6fCJxrX_uN';
    CARDAPIO_ID = '1Rkd3wSvAplfXYWzJT87XhinJMPMpa90VSbI9ku-hOso';
    INFORMACAO_CONTATO_ID = '1qlU7gm0KsPc2L24J27njmOb4YF3o3xhvUbhjoFLGIC4';
    SOBRE_ID = '1pLypWkNKRfDFSvocoK82dMJu-TInGe-KkQQRv7RqUQ8';
    
    async LerCardapio(){
        fs.readFile('credentials.json', (err, content) => {
            if (err) return console.log('Error loading client secret file:', err);
            // Authorize a client with credentials, then call the Google Sheets API.
            authorize(JSON.parse(content), this.ReadSheet(this.CARDAPIO_ID));
        });
    }
    async LerInformacaoContato(){
        fs.readFile('credentials.json', (err, content) => {
            if (err) return console.log('Error loading client secret file:', err);
            // Authorize a client with credentials, then call the Google Sheets API.
            authorize(JSON.parse(content), this.ReadSheet(this.INFORMACAO_CONTATO_ID));
        });
    }
    async LerSobre(){
        fs.readFile('credentials.json', (err, content) => {
            if (err) return console.log('Error loading client secret file:', err);
            // Authorize a client with credentials, then call the Google Sheets API.
            authorize(JSON.parse(content), ReadSheet(this.SOBRE_ID));
        });
    }

    authorize(credentials, callback) {
        const {client_secret, client_id, redirect_uris} = credentials.installed;
        const oAuth2Client = new google.auth.OAuth2(
            client_id, client_secret, redirect_uris[0]);
        
        // Check if we have previously stored a token.
        fs.readFile(TOKEN_PATH, (err, token) => {
            if (err) return getNewToken(oAuth2Client, callback);
            oAuth2Client.setCredentials(JSON.parse(token));
            callback(oAuth2Client);
        });
    }
    
    getNewToken(oAuth2Client, callback) {
        const authUrl = oAuth2Client.generateAuthUrl({
          access_type: 'offline',
          scope: SCOPES,
        });
        console.log('Authorize this app by visiting this url:', authUrl);
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        });
        rl.question('Enter the code from that page here: ', (code) => {
          rl.close();
          oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error('Error while trying to retrieve access token', err);
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
              if (err) return console.error(err);
              console.log('Token stored to', TOKEN_PATH);
            });
            callback(oAuth2Client);
          });
        });
    }

    ReadSheet = async function (SheetId){
        const sheets = google.sheets({version: 'v4', auth});
        sheets.spreadsheets.values.get({
          spreadsheetId: SheetId,
          range: 'Class Data!A2:E',
        }, (err, res) => {
          if (err) return console.log('The API returned an error: ' + err);
          const rows = res.data.values;
          if (rows.length) {
            console.log('Name, Major:');
            // Print columns A and E, which correspond to indices 0 and 4.
            rows.map((row) => {
              console.log(`${row[0]}, ${row[4]}`);
            });
          } else {
            console.log('No data found.');
          }
        });
    }
}

module.exports = GAPI;