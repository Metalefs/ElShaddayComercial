import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthenticationService } from './api/authentication/authentication.service';

import { OpcaoNavbar } from './shared/OpcoesNavbar';
import { Collections } from './shared/_models/MongoCollections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  title = "ElShadday Marmitex";
  currentUser: Collections.Cliente;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

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
