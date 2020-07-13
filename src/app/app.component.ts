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
  title = "ElShaddayCommercial";

  LerCardapio(){
    this.Cardapio = this.api.Cardapios();
    console.log(this.Cardapio,"teste");
  }
  
  ngOnInit(): void {
    this.LerCardapio();
  }

}
