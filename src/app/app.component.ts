import { Component, OnInit } from '@angular/core';
import { RestApiService } from './api/RestApiService'

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  api:RestApiService;
  constructor(api:RestApiService) {
    this.api = api;
  }
  Cardapio:any;
  Sobre:any;
  InformacoesContato:

  async LerCardapio(){
    (await this.api.Sobre()).subscribe(function(data){
      console.log(data);
    });
  }
  
  ngOnInit(): void {
    this.LerCardapio();
  }

}
