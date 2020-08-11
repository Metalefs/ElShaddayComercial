import { Component, OnInit } from '@angular/core';

import { Collections } from 'src/app/data/schema/MongoCollections';
import { InformacoesContatoService } from 'src/app/data/service/domain/InformacoesContatoService';

@Component({
  selector: 'app-editar-infocontato',
  templateUrl: './editar-infocontato.component.html',
  styleUrls: ['./editar-infocontato.component.css']
})
export class EditarInfoContatoComponent implements OnInit {

  InformacoesContato:Collections.InformacoesContato = null;
  constructor(private api: InformacoesContatoService) {  }

  Editar(){
    this.api.Editar(this.InformacoesContato);
  }
  Remover(){
    this.api.Remover(this.InformacoesContato._id);
  }
  ngOnInit(): void {
  }

}
