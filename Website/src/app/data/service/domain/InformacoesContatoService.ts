
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { routes } from 'src/app/data/schema/routes';
import { retry, catchError } from 'rxjs/operators';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { RowActionService } from '@clr/angular/data/datagrid/providers/row-action-service';
@Injectable({
    providedIn: 'root'
})

export class InformacoesContatoService {
    constructor(private http: HttpClient) { }
    
    private IsLoading = true;
    Ler(): Observable<Collections.InformacoesContato[]> {
        return this.http.get<Collections.InformacoesContato[]>(environment.endpoint + routes.InfoContato).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }

    Editar(item: Collections.InformacoesContato): any {
        return this.http.put<Collections.InformacoesContato>(environment.endpoint + routes.Gerenciamento + routes.InfoContato, {InformacoesContato:item}).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }
    Remover(id: string): Observable<any>{
        return this.http.delete<Collections.InformacoesContato>(environment.endpoint + routes.Gerenciamento + routes.InfoContato).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
    Incluir(item: Collections.InformacoesContato): Observable<any> {
        return this.http.post<Collections.InformacoesContato>(environment.endpoint + routes.Gerenciamento + routes.InfoContato, {}).pipe(
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