import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

import { Collections } from '../shared/MongoCollections';
import { InformacoesContatoService } from '../api/services/InformacoesContatoService';
import { ClienteService } from '../api/services/ClienteService';
import { CardapioService } from '../api/services/CardapioService';

class Form {
  Nome:string;
  Email:string;
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
  Logado:boolean;
  Cardapio:Collections.Cardapio;

  constructor(
    public infocontatoservice: InformacoesContatoService, 
    public clienteservice: ClienteService,
    public CardapioService: CardapioService,
    ) {  }

  LerInformacoesContato() {
    this.infocontatoservice.Ler().subscribe(data=>{
      this.InformacoesContato = data[0];
      console.log(this.InformacoesContato);
    });
  }

  Login() {
    // this.Logado = true;
    // this.CardapioService.BuscarUm(new Date().getDay()).subscribe(data=>{
    //   this.Cardapio = data[0];
    //   console.log(this.Cardapio);
    // });
    alert(this.form.Nome);
    // this.clienteservice.Login(this.cliente).subscribe(data=>{
    //   console.log(data);
    // });
  }

  Cadastro() {
    // this.clienteservice.Cadastro(this.cliente).subscribe(data=>{
    //   console.log(data);
    // });
  }

  ngOnInit() {
    this.LerInformacoesContato();
  }
  
}
