import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Router, RouterOutlet } from '@angular/router';

import { AuthenticationService } from './api/authentication/authentication.service';
import { fade, slider } from './animations';

import { OpcaoNavbar } from './shared/_models/OpcoesNavbar';
import { Collections } from './shared/_models/MongoCollections';
import { slide } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // fader,
     slider,
    // transformer,
    //stepper
  ]
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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  OpcoesNavBar = [
    new OpcaoNavbar("Inicio", "", "Home"),
    new OpcaoNavbar("Menu", "", "view-list"),
    new OpcaoNavbar("Entrega", "", "shopping-cart"),
  ];

  triggerAnimation(outlet) {
    return outlet.activatedRouteData.animation || null;
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){

  }

}
