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
  title = "ElShadday Disk Marmitex";
  
  OpcoesNavBar = [
    new OpcaoNavbar("Pedido","",""),
    new OpcaoNavbar("Cardápio","",""),
    new OpcaoNavbar("Sobre","",""),
  ];

  constructor(api:RestApiService) {
    this.api = api;
  }

  ngOnInit(){}

}
