
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

export class PedidoService {
    constructor(private http: HttpClient, 
        private AuthenticationService: AuthenticationService,
        private StateService: StateService){}
    private currentUser: Collections.Cliente;
    private IsLoading = true;

    Ler(): Observable<Collections.Pedido[]> {
        this.AuthenticationService.currentUser.subscribe(x => this.currentUser = x);
        return this.http.get<Collections.Pedido[]>(environment.endpoint + routes.Pedido + "?token="+this.currentUser?.token).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }

    Count(): Observable<any> {
        this.AuthenticationService.currentUser.subscribe(x => this.currentUser = x);
        return this.http.get<any>(environment.endpoint + routes.Pedido + "/count").pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }

    ConfirmarRecebimento(item: Collections.Pedido): Observable<any> {
        this.AuthenticationService.currentUser.subscribe(x => this.currentUser = x);
        return this.http.put<Collections.Pedido>(environment.endpoint + routes.Pedido + '/confirmarRecebimento', {Pedido:item, token:this.currentUser?.token}).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }

    Cancelar(item: Collections.Pedido): Observable<any> {
        this.AuthenticationService.currentUser.subscribe(x => this.currentUser = x);
        return this.http.put<Collections.Pedido>(environment.endpoint + routes.Pedido + '/cancelar', {Pedido:item, token:this.currentUser?.token}).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }

    Editar(item: Collections.Pedido): Observable<any> {
        return this.http.put<Collections.Pedido>(environment.endpoint + routes.Gerenciamento + routes.Pedido, {}).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }

    Remover(id: string): Observable<any>{
        return this.http.delete<Collections.Pedido>(environment.endpoint + routes.Pedido).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    Incluir(Pedido: Collections.Pedido): Observable<any> {
        let token;
        this.AuthenticationService.currentUser.subscribe(x=>{
            if(x != null)
            token = x.token
            console.log(environment.endpoint +  routes.Pedido, {Pedido, token});
        });
        if(token)
            return this.http.post<Collections.Pedido>(environment.endpoint + routes.Pedido, {Pedido:Pedido, token:token}).pipe(
                retry(3),
                catchError(this.handleError)
            );
        else throw 'Usuário não logado.'
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
        this.StateService.currentState.subscribe(x=>x.Pedido = false);
        return throwError(errorMessage);
    }
}