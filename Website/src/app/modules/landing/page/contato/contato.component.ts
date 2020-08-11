import { Component, OnInit } from '@angular/core';

import { RestApiService } from 'src/app/data/service/RestApiService';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { PartialObserver } from 'rxjs';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {

  InformacoesContato:Collections.InformacoesContato = null;
  
  constructor(public api: RestApiService) {  }

  LerInformacoesContato() {
    this.api.InformacoesContato().subscribe(data=>{
      this.InformacoesContato = data[0];
      console.log(this.InformacoesContato);
    });
  }

  ngOnInit() {
    this.LerInformacoesContato();
  }

}
