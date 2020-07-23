import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

import { Collections } from '../shared/MongoCollections';
import { InformacoesContatoService } from '../api/services/InformacoesContatoService';
import { ClienteService } from '../api/services/ClienteService';

class Form {
  Cliente:Collections.Cliente;
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
  InformacoesContato:Collections.InformacoesContato = null;
  
  form = new Form();
  AceitaCartao:boolean;

  constructor(public infocontatoservice: InformacoesContatoService, public clienteservice: ClienteService) {  }

  LerInformacoesContato() {
    this.infocontatoservice.Ler().subscribe(data=>{
      this.InformacoesContato = data[0];
      console.log(this.InformacoesContato);
    });
  }

  Login() {
    this.clienteservice.Login(this.form.Cliente).subscribe(data=>{
      console.log(data);
    });
  }

  Cadastro() {
    this.clienteservice.Cadastro(this.form.Cliente).subscribe(data=>{
      console.log(data);
    });
  }

  ngOnInit() {
    this.LerInformacoesContato();
  }
  
}
