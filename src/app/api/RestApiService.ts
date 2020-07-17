import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {GAPPI} from './GApi'

@Injectable({
    providedIn: 'root'
})
export class RestApiService {
    constructor(private http: HttpClient) { }
    gapi = new GAPPI(this.http);    
    private IsLoading = true;

    async Cardapios() {
        return await this.gapi.LerCardapio();
    }
    async InformacoesContato() {
        return await this.gapi.LerInformacaoContato();
    }
    async Sobre() {
        return await this.gapi.LerSobre();
    }

    HandleReturn(data){
        const returnArray: Array<any> = [];
        console.log(data);
        if (data && data.length > 0) {
            data.forEach(entry => {
                const obj = {};
                for (const x in entry) {
                    if (x.includes('gsx$') && entry[x].$t) {
                        obj[x.split('$')[1]] = entry[x]['$t'];
                    }
                }
                returnArray.push(obj);
                console.log(returnArray);
            });
        }
    }

    getLoadingState(){
        return this.IsLoading;
    }
    setIsLoading(state : boolean){
        this.IsLoading = state;
        if(state == false){
            document.getElementById("loadingBackdrop").className = "modal-backdrop";
            document.getElementById("loading").className = '';
        } else {
            document.getElementById("loading").className = 'active';
        }
    }  
}