import { Component, OnInit, Input } from '@angular/core';

import { OpcaoNavbar } from '../../../../../Dominio/OpcoesNavbar';

@Component({
  selector: 'app-factory-steps',
  templateUrl: './factory-steps.component.html',
  styleUrls: ['./factory-steps.component.css']
})
export class FactoryStepsComponent implements OnInit {

  constructor() {  }
  
  Opcoes:OpcaoNavbar[] = [
    new OpcaoNavbar("Inicio", "", "Home"),
    new OpcaoNavbar("Menu", "", "view-list"),
    new OpcaoNavbar("Entrega", "", "shopping-cart"),
  ];

  ngOnInit(): void {
  }

}