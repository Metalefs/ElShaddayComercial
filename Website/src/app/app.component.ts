import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RestApiService } from './api/RestApiService';

import { Collections } from '../../../Dominio/MongoCollections';
import { OpcaoNavbar } from '../../../Dominio/OpcoesNavbar';
import { ContatoComponent } from '../app/contato/contato.component'/

@Component({
  selector: 'app.root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {

  api:RestApiService;
  Sobre:any;
  Cardapio:any;
  
  title = "ElShadday Disk Marmitex";
  
  OpcoesNavBar = [
    new OpcaoNavbar("Pedido","",""),
    new OpcaoNavbar("Cardápio","",""),
    new OpcaoNavbar("Sobre","",""),
  ];

  constructor(api:RestApiService) {
    this.api = api;
    this.Sobre = "";
    this.LerSobre().then(x=>{this.Sobre = x;});
    this.LerCardapio().then(x=>{this.Cardapio = x;});
  }

  async LerSobre(){
    (await this.api.Sobre()).subscribe((res) => {
      console.log(res);
      this.Sobre = res;
    });
  }
  async LerCardapio(){
    (await this.api.Cardapios()).subscribe(function(data){
      console.log(data);
      return data;
    });
  }
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(){

  }

}
