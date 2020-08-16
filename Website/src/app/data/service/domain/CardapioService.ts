
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { routes } from 'src/app/data/schema/routes';
import { retry, catchError } from 'rxjs/operators';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';

@Injectable({
    providedIn: 'root'
})

export class CardapioService {
    constructor(private http: HttpClient, private AuthenticationService: AuthenticationService) { }
    
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
        
    Incluir(item: Collections.Cardapio): any  {
        console.log(environment.endpoint + routes.Gerenciamento + routes.Cardapios,item);
        let payload = this.AuthenticationService.tokenize({Cardapio:item});
        console.log(payload);
        return this.http.post<Collections.Cardapio>(environment.endpoint + routes.Gerenciamento + routes.Cardapios
            ,payload).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
    Editar(item: Collections.Cardapio):  Observable<any> {
        console.log(environment.endpoint + routes.Gerenciamento + routes.Cardapios,item);
        let payload = this.AuthenticationService.tokenize({Cardapio:item});
        console.log(payload);
        return this.http.put<Collections.Cardapio>(environment.endpoint + routes.Gerenciamento + routes.Cardapios, 
            payload)
            .pipe(
                retry(3), // retry a failed request up to 3 times
                catchError(this.handleError) // then handle the error
            );
    }

    Remover(id: string): any {
        let payload = this.AuthenticationService.tokenize({id:id});
        return this.http.delete<Collections.Cardapio>(environment.endpoint + routes.Gerenciamento + routes.Cardapios +`?id=${id}&token=${payload.token}`).pipe(
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