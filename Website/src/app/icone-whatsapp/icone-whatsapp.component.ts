import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../api/RestApiService';
import { Collections } from '../shared/MongoCollections';
import { PartialObserver } from 'rxjs';

@Component({
  selector: 'app-icone-whatsapp',
  templateUrl: './icone-whatsapp.component.html',
  styleUrls: ['./icone-whatsapp.component.css']
})

export class IconeWhatsappComponent implements OnInit {

  Whatsapp:Collections.InformacoesContato = null;
  
  constructor(public api: RestApiService) {  }

  LerInformacoesContato() {
    this.api.InformacoesContato().subscribe(data=>{
      this.Whatsapp = data[0].Whatsapp;
    });
  }

  ngOnInit() {
    this.LerInformacoesContato();
  }

}
