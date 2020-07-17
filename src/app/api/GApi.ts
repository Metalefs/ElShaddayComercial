import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';

export class GAPPI {
    constructor(public http: HttpClient) { }
    CLIENT_ID = '138055526829-43vsd1ct7lhpu1arbv0uob06d7sc23h3.apps.googleusercontent.com';
    API_KEY = 'dw-FpPdQqfiQVR6fCJxrX_uN';
    CARDAPIO_ID = '1Rkd3wSvAplfXYWzJT87XhinJMPMpa90VSbI9ku-hOso';
    INFORMACAO_CONTATO_ID = '1qlU7gm0KsPc2L24J27njmOb4YF3o3xhvUbhjoFLGIC4';
    SOBRE_ID = '1pLypWkNKRfDFSvocoK82dMJu-TInGe-KkQQRv7RqUQ8';
    async LerCardapio(){
        return this.ReadSheet(this.CARDAPIO_ID);
    }
    async LerInformacaoContato(){
        return this.ReadSheet(this.INFORMACAO_CONTATO_ID);
    }
    async LerSobre(){
       return this.ReadSheet(this.SOBRE_ID);
    }
    async ReadSheet(SheetId){
        const url = `https://docs.google.com/spreadsheets/d/e/${SheetId}/pub?output=csv`;

        return this.http.get(url)
        .pipe(
            retry(3), 
            catchError(this.handleError)
        );
    }
    handleError(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}