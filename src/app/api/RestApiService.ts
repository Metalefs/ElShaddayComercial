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

    Cardapios() {
        return this.gapi.LerCardapio();
    }
    InformacoesContato() {

    }
    Sobre() {

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