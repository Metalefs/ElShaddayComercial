
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { routes } from '../routes';
import { retry, catchError } from 'rxjs/operators';
import { Collections } from '../../shared/MongoCollections';
@Injectable({
    providedIn: 'root'
})

export class ClienteService {
    constructor(private http: HttpClient) { }
    
    private IsLoading = true;
    Editar(item: Collections.Cliente): any {
        return this.http.put<Collections.Cliente>(environment.endpoint + routes.Gerenciamento + routes.Usuario, {}).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }
    Remover(id: string): any {
        return this.http.delete<Collections.Cliente>(environment.endpoint + routes.Gerenciamento + routes.Usuario).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
    Incluir(item: Collections.Cliente): any  {
        return this.http.post<Collections.Cliente>(environment.endpoint + routes.Gerenciamento + routes.Usuario, {}).pipe(
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