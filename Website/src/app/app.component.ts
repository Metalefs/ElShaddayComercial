import { Component, OnInit } from '@angular/core';
import { RestApiService } from './api/RestApiService'

import {Collections} from '../../../Dominio/MongoCollections';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  api:RestApiService;
  Sobre:any;
  Cardapio:any;
  InformacoesContato:any;
  title = "ElShadday Disk Marmitex";
  
  constructor(api:RestApiService) {
    this.api = api;
    this.Sobre = "sdsd";
    this.LerSobre().then(x=>{this.Sobre = x;});
    this.LerCardapio().then(x=>{this.Cardapio = x;});
    this.LerInformacoesContato().then(x=>{this.InformacoesContato = x;});
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
  async LerInformacoesContato(){
    (await this.api.InformacoesContato()).subscribe(function(data){
      console.log(data);
      return data;
    });
  }
  
  ngOnInit(): void {
    
  }

}
