import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthenticationService } from './api/authentication/authentication.service';
import { fade } from './animations';

import { OpcaoNavbar } from './shared/_models/OpcoesNavbar';
import { Collections } from './shared/_models/MongoCollections';
import { trigger, transition, query, style, group, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      transition('* => *, :enter', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
        query(':enter', style({ transform: 'translateX(-100vw)' }), { optional: true }),
        query(':leave', style({ transform: 'translateX(0vw)' }), { optional: true }),

        group([
          query(':leave', [
            animate('500ms ease-in-out', style({
              transform: 'translateX(100vw)'
            }))
          ], { optional: true }),
          query(':enter', [
            animate('500ms ease-in-out', style({
              transform: 'translateX(0)'
            }))
          ], { optional: true })
        ])
      ])
    ])
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
