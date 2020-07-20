import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

import { Collections } from '../../../../Dominio/MongoCollections';
import { RestApiService } from '../api/RestApiService';
class Form {
  username:string;
  password:string;
  rememberMe:string;
  type:string;
}

@Component({
  selector: 'registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  @Input()
  Telefone:string;
  InformacoesContato:Collections.InformacoesContato = null;
  
  form = new Form();
  AceitaCartao:boolean;

  constructor(public api: RestApiService) {  }

  LerInformacoesContato() {
    this.api.InformacoesContato().subscribe(data=>{
      this.InformacoesContato = data[0];
      console.log(this.InformacoesContato);
    });
  }

  ngOnInit() {
    this.LerInformacoesContato();
  }
  

}
