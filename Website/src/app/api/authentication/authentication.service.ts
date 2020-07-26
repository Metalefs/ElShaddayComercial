import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from "../../../environments/environment";
import { Collections } from '../../shared/_models/MongoCollections';
import { routes } from '../../api/routes';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Collections.Cliente>;
    public currentUser: Observable<Collections.Cliente>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Collections.Cliente>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Collections.Cliente {
        return this.currentUserSubject.value;
    }

    signup(cliente : Collections.Cliente){
        return this.http.post<any>(`${environment.endpoint}`+routes.Registro, { cliente })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            if(user.error == undefined){
                console.log(user);
                if(user.token){
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    return user;
                }
                throw "Nome ou senha inválidos";
            }
            else{
                throw user.error;
            }
        }));
    }

    login(Email: string, Senha: string) {
        return this.http.post<any>(`${environment.endpoint}`+routes.Login, { Email, Senha })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                if(user.token){
                    localStorage.setItem('currentUser', JSON.stringify(user.token));
                    this.currentUserSubject.next(user);
                }
                throw "Nome ou senha inválidos";
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}