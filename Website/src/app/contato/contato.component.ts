import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../api/RestApiService';
import { Collections } from '../../../../Dominio/MongoCollections';
import { PartialObserver } from 'rxjs';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {

  api:RestApiService;
  InformacoesContato:Collections.InformacoesContato;
  constructor(api:RestApiService) {
    this.api = api;
    this.LerInformacoesContato().then((x)=>{this.InformacoesContato = x;});
  }

  async LerInformacoesContato() {
    return (await this.api.InformacoesContato()).subscribe(function (data) {
      console.log(data);
      return {
        Telefone: data.Telefone,
        Email: data.Email,
        HorarioAtendimento: data.HorarioAtendimento,
        Whatsapp: data.Whatsapp
      };
    }) as unknown as Collections.InformacoesContato;
  }

  ngOnInit(): void {

  }

}
