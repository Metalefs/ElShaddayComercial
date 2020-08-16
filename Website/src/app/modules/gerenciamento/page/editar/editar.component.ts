import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/core/service/state/state.service';
import { AppState } from 'src/app/data/schema/AppState';

class Servico {
  nome:string;
  state:boolean;
  constructor(nome:string,state:boolean){
    this.nome = nome;
    this.state = state;
  }
}

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  State: Servico[] = [];
  constructor(private StateService:StateService) {

   }

  ngOnInit(): void {
    this.StateService.currentState.subscribe(x=> {
      Object.entries(x).forEach(([key, value]) => {
        this.State.push(new Servico(key.toString(),value))
      })
    });
  }

}
