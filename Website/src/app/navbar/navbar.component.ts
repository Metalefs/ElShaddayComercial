import { Component, OnInit, Input } from '@angular/core';

import { OpcaoNavbar } from '../../../../Dominio/OpcoesNavbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  Titulo: string;

  @Input()
  Opcoes: OpcaoNavbar[]; 

  constructor() { }

  ngOnInit(): void {
  }

}
