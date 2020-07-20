import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../api/RestApiService';
import { OpcaoNavbar } from '.../../../Dominio/OpcoesNavbar';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
  api:RestApiService;  
  title = "ElShadday Marmitex";
  
  OpcoesNavBar = [
    new OpcaoNavbar("Inicio", "", "Home"),
    new OpcaoNavbar("Menu", "", "view-list"),
    new OpcaoNavbar("Entrega", "", "shopping-cart"),
  ];

  constructor(api:RestApiService) {
    this.api = api;
  }

  ngOnInit(){}

}
