import { Component, OnInit } from '@angular/core';

import { RestApiService } from 'src/app/data/service/RestApiService';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { PartialObserver } from 'rxjs';

@Component({
  selector: 'app-icone-whatsapp',
  templateUrl: './icone-whatsapp.component.html',
  styleUrls: ['./icone-whatsapp.component.css']
})

export class IconeWhatsappComponent implements OnInit {

  Whatsapp:Collections.InformacoesContato = null;
  
  constructor(private api: RestApiService) {  }

  LerInformacoesContato() {
    this.api.InformacoesContato().subscribe(data=>{
      this.Whatsapp = data[0].Whatsapp;
    });
  }

  ngOnInit() {
    this.LerInformacoesContato();
  }

}
