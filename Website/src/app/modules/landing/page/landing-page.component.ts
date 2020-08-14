import { Component, OnInit } from '@angular/core';

import { RestApiService } from 'src/app/data/service/RestApiService';

@Component({
  selector: 'app-main-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  
  api:RestApiService;  
  title = "ElShadday Marmitex";
  
  desktop = "is-hidden-touch";
  mobile = "is-hidden-desktop";
  
  constructor(api:RestApiService) {
    this.api = api;
  }

  ngOnInit(){}

}
