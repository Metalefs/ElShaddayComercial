import { Component, OnInit, Input } from '@angular/core';

import { OpcaoNavbar } from '../_models/OpcoesNavbar';

export class EstadoNav {
    pagina:string;
    has_badge:boolean;
    is_solid:boolean;
  }

@Component({
  selector: 'app-factory-steps',
  templateUrl: './factory-steps.component.html',
  styleUrls: ['./factory-steps.component.css']
})
export class FactoryStepsComponent implements OnInit {

  constructor() {  }
  EstadoNav = new EstadoNav();
  Opcoes:OpcaoNavbar[] = [
    new OpcaoNavbar("Inicio", "", "Home"),
    new OpcaoNavbar("Pedido", "/pedido", "view-list"),
    new OpcaoNavbar("Entrega", "/entrega", "shopping-cart"),
  ];

  ngOnInit(): void {
  }

}
