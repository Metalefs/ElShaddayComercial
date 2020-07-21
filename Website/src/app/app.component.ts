import { Component, OnInit, AfterViewInit } from '@angular/core';

import { OpcaoNavbar } from '../../../Dominio/OpcoesNavbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  title = "ElShaddayCommercial";
    
  OpcoesNavBar = [
    new OpcaoNavbar("Inicio", "", "Home"),
    new OpcaoNavbar("Menu", "", "view-list"),
    new OpcaoNavbar("Entrega", "", "shopping-cart"),
  ];

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){

  }

}
