import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../api/RestApiService';
import { OpcaoNavbar } from '.../../../Dominio/OpcoesNavbar';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
  api:RestApiService;  
  title = "ElShadday Marmitex";
  
  OpcoesNavBar = [
    new OpcaoNavbar("Inicio", "", faHome),
    new OpcaoNavbar("Menu", "", faStore),
    new OpcaoNavbar("Entrega", "", faShippingFast),
  ];

  constructor(api:RestApiService) {
    this.api = api;
  }

  ngOnInit(){}

}
