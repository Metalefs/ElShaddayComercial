
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { routes } from '../schema/routes';
import { retry, catchError } from 'rxjs/operators';
import { Collections } from '../schema/MongoCollections';
@Injectable({
    providedIn: 'root'
})

export class RestApiService {
    constructor(private http: HttpClient) { }
    
    private IsLoading = true;

    Cardapios(): Observable<Collections.Cardapio[]>{
        return this.http.get<Collections.Cardapio[]>(environment.endpoint + routes.Cardapios).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    InformacoesContato(): Observable<Collections.InformacoesContato>{
        return this.http.get<Collections.InformacoesContato>(environment.endpoint + routes.InfoContato).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
    Sobre(): Observable<Collections.Sobre> {
        return this.http.get<Collections.Sobre>(environment.endpoint + routes.Sobre).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
    PrecoMarmitex(): Observable<Collections.PrecoMarmitex> {
        return this.http.get<Collections.PrecoMarmitex>(environment.endpoint + routes.PrecoMarmitex).pipe(
            retry(3),
            catchError(this.handleError)
        );
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