import { Component, OnInit } from '@angular/core';

import { RestApiService } from 'src/app/data/service/RestApiService';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { PartialObserver } from 'rxjs';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})

export class AtendimentoComponent implements OnInit {

  InformacoesContato:Collections.InformacoesContato = null;
  
  constructor(public api: RestApiService) {  }

  LerInformacoesContato() {
    if(localStorage.getItem("InformacaoContato"))
      this.InformacoesContato = JSON.parse(localStorage.getItem("InformacaoContato"))
    else
    this.api.InformacoesContato().subscribe(data=>{
      this.InformacoesContato = data[0];
      localStorage.setItem("InformacaoContato",JSON.stringify(this.InformacoesContato))
    });
  }

  ngOnInit() {
    this.LerInformacoesContato();
  }

}
