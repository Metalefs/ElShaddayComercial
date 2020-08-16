
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { routes } from 'src/app/data/schema/routes';
import { retry, catchError } from 'rxjs/operators';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { StateService } from 'src/app/core/service/state/state.service';

@Injectable({
    providedIn: 'root'
})

export class PrecoMarmitexService {
    constructor(private http: HttpClient, 
        private AuthenticationService: AuthenticationService,
        private StateService: StateService){}
    
    private IsLoading = true;

    Ler(): Observable<Collections.PrecoMarmitex[]> {
        return this.http.get<Collections.PrecoMarmitex[]>(environment.endpoint + routes.PrecoMarmitex).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }

    Editar(item: Collections.PrecoMarmitex): any {
        let payload = this.AuthenticationService.tokenize({PrecoMarmitex:item});
        console.log(payload);
        return this.http.put<Collections.PrecoMarmitex>(environment.endpoint + routes.Gerenciamento + routes.PrecoMarmitex, 
            payload).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }
    Remover(id: string): Observable<any>{
        return this.http.delete<Collections.PrecoMarmitex>(environment.endpoint + routes.Gerenciamento + routes.PrecoMarmitex).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
    Incluir(item: Collections.PrecoMarmitex): Observable<any> {
        return this.http.post<Collections.PrecoMarmitex>(environment.endpoint + routes.Gerenciamento + routes.PrecoMarmitex, {}).pipe(
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
        this.StateService.currentState.subscribe(x=>x.PrecoMarmitex = false);
        return throwError(errorMessage);
    }
}