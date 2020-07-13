import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class GAPPI {
    constructor(public http: HttpClient) { }
    CLIENT_ID = '138055526829-43vsd1ct7lhpu1arbv0uob06d7sc23h3.apps.googleusercontent.com';
    API_KEY = 'dw-FpPdQqfiQVR6fCJxrX_uN';
    CARDAPIO_ID = '1Rkd3wSvAplfXYWzJT87XhinJMPMpa90VSbI9ku-hOso';
    INFORMACAO_CONTATO_ID = '1qlU7gm0KsPc2L24J27njmOb4YF3o3xhvUbhjoFLGIC4';
    SOBRE_ID = '1pLypWkNKRfDFSvocoK82dMJu-TInGe-KkQQRv7RqUQ8';
    LerCardapio(){
        return this.ReadSheet(this.CARDAPIO_ID);
    }
    LerInformacaoContato(){
        return this.ReadSheet(this.INFORMACAO_CONTATO_ID);
    }
    LerSobre(){
       return this.ReadSheet(this.SOBRE_ID);
    }
    async ReadSheet(SheetId){
        const url = `https://spreadsheets.google.com/feeds/list/${SheetId}/od6/public/values?alt=json`;

        return this.http.get(url)
            .pipe(
            map((result: any)=> {
                let res = result.json();
                const data = res.feed.entry;

                const returnArray: Array<any> = [];
                if (data && data.length > 0) {
                data.forEach(entry => {
                    const obj = {};
                    for (const x in entry) {
                    if (x.includes('gsx$') && entry[x].$t) {
                        obj[x.split('$')[1]] = entry[x]['$t'];
                    }
                    }
                    returnArray.push(obj);
                });
                }
                return returnArray;
            }),
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        ).subscribe(data => {return data});
        ;
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