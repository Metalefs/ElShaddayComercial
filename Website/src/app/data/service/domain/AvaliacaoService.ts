import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { routes } from 'src/app/data/schema/routes';
import { retry, catchError } from 'rxjs/operators';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { StateService } from 'src/app/core/service/state/state.service';
@Injectable({
    providedIn: 'root'
})

export class AvaliacaoService {
    constructor(private http: HttpClient,
        private StateService: StateService){}
    
    private IsLoading = true;

    Ler(): Observable<Collections.Avaliacao[]> {
        return this.http.get<Collections.Avaliacao[]>(environment.endpoint + routes.Avaliacao).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }
    Incluir(avaliacao: Collections.Avaliacao): Observable<any>   {
        return this.http.post<Collections.Avaliacao>(environment.endpoint + routes.Avaliacao, {Avaliacao: avaliacao}).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
    Editar(item: Collections.Avaliacao): any {
        return this.http.put<Collections.Avaliacao>(environment.endpoint + routes.Avaliacao, {}).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }
    Remover(id: string): any {
        return this.http.delete<Collections.Avaliacao>(environment.endpoint + routes.Avaliacao).pipe(
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
        this.StateService.currentState.subscribe(x=>x.Cardapio = false);
        return throwError(errorMessage);
    }
}