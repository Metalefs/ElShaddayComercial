import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from "src/environments/environment";
import { AppState } from 'src/app/data/schema/AppState';
import { routes } from 'src/app/data/schema/routes';

@Injectable({ providedIn: 'root' })
export class StateService {
    private appState: BehaviorSubject<AppState>;
    public currentState: Observable<AppState>;

    constructor(private http: HttpClient) {
        if(localStorage.getItem('AppState'))
            this.appState = new BehaviorSubject<AppState>(JSON.parse(localStorage.getItem('AppState')));
        else
            this.appState = new BehaviorSubject<AppState>(
                new AppState(
                    true,
                    true,
                    true,
                    true,
                    true,
                    true,
                    true,
                    true,
                    true,
                )
            );
        this.currentState = this.appState.asObservable();
    }

    public get currentStateValue(): AppState {
        return this.appState.value;
    }
    
    update(state : AppState){
        if(state == undefined){
            localStorage.setItem('AppState', JSON.stringify(state));
            this.appState.next(state);
            return state;
            throw "";
        }
    }

}