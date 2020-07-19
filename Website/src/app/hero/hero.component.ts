import { Component, OnInit } from '@angular/core';

import { Collections } from '../../../../Dominio/MongoCollections';
import { RestApiService } from '../api/RestApiService';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  Sobre:Collections.Sobre;
  constructor(public api: RestApiService) {  }

  async LerSobre(){
    this.api.Sobre().subscribe(data=>{
      this.Sobre = data[0];
      console.log(this.Sobre);
    });
  }

  ngOnInit(): void {
    this.LerSobre();
  }

}
