import { Component, OnInit } from '@angular/core';
import { RestApiServiceExternal } from './api/RestApiService_External'

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  api:RestApiServiceExternal;
  constructor(api:RestApiServiceExternal) {
    this.api = api;
  }
  Cardapio:any;
  title = "ElShaddayCommercial";

  async LerCardapio(){
    (await this.api.Sobre()).subscribe(function(data){
      console.log(data);
    });
  }
  
  ngOnInit(): void {
    this.LerCardapio();
  }

}
