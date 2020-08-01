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
    // VARIABLES
    const magicalUnderlines = Array.from(document.querySelectorAll('.underline--magical'));

    const gradientAPI = 'https://gist.githubusercontent.com/wking-io/3e116c0e5675c8bcad8b5a6dc6ca5344/raw/4e783ce3ad0bcd98811c6531e40256b8feeb8fc8/gradient.json';

    // HELPER FUNCTIONS

    // 1. Get random number in range. Used to get random index from array.
    const randNumInRange = max => Math.floor(Math.random() * (max - 1));

    // 2. Merge two separate array values at the same index to 
    // be the same value in new array.
    const mergeArrays = (arrOne, arrTwo) => arrOne.
    map((item, i) => `${item} ${arrTwo[i]}`).
    join(', ');

    // 3. Curried function to add a background to array of elms
    const addBackground = elms => color => {
      elms.forEach(el => {
        el.style.backgroundImage = color;
      });
    };
    // 4. Function to get data from API
    const getData = async url => {
      const response = await fetch(url);
      const data = await response.json();
      return data.data;
    };

    // 5. Partial Application of addBackground to always apply 
    // background to the magicalUnderlines constant
    const addBackgroundToUnderlines = addBackground(magicalUnderlines);

    // GRADIENT FUNCTIONS

    // 1. Build CSS formatted linear-gradient from API data
    const buildGradient = obj => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;

    // 2. Get single gradient from data pulled in array and
    // apply single gradient to a callback function
    const applyGradient = async (url, callback) => {
      const data = await getData(url);
      const gradient = buildGradient(data[randNumInRange(data.length)]);
      callback(gradient);
    };

    // RESULT
    applyGradient(gradientAPI, addBackgroundToUnderlines);
  }

  ngAfterViewInit(){

  }

}
