
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { routes } from 'src/app/data/schema/routes';
import { retry, catchError } from 'rxjs/operators';
import { Collections } from 'src/app/data/schema/MongoCollections';
@Injectable({
    providedIn: 'root'
})

export class CardapioService {
    constructor(private http: HttpClient) { }
    
    private IsLoading = true;
    Ler(): Observable<Collections.Cardapio[]> {
        return this.http.get<Collections.Cardapio[]>(environment.endpoint + routes.Cardapios).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }

    Filtrar(dia: number): Observable<Collections.Cardapio[]> {
        return this.http.get<Collections.Cardapio[]>(environment.endpoint + routes.CardapiosPorDia + `?Dia=${dia}`).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }

    Editar(item: Collections.Cardapio):  Observable<any> {
        console.log(environment.endpoint + routes.Gerenciamento + routes.Cardapios,item);
        return this.http.put<Collections.Cardapio>(environment.endpoint + routes.Gerenciamento + routes.Cardapios, {Cardapio:item}).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }

    Remover(id: string): any {
        return this.http.delete<Collections.Cardapio>(environment.endpoint + routes.Gerenciamento + routes.Cardapios).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
    Incluir(item: Collections.Cardapio): any  {
        return this.http.post<Collections.Cardapio>(environment.endpoint + routes.Gerenciamento + routes.Cardapios, {}).pipe(
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