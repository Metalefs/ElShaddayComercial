import { Component, OnInit } from '@angular/core';

import { Collections } from '../../../shared/MongoCollections';
import { InformacoesContatoService } from '../../../api/services/InformacoesContatoService';

@Component({
  selector: 'app-editar-infocontato',
  templateUrl: './editar-infocontato.component.html',
  styleUrls: ['./editar-infocontato.component.css']
})
export class EditarInfocontatoComponent implements OnInit {

  InformacoesContato:Collections.InformacoesContato = null;
  constructor(public api: InformacoesContatoService) {  }

  Editar(){
    this.api.Editar(this.InformacoesContato);
  }
  Remover(){
    this.api.Remover(this.InformacoesContato._id);
  }
  ngOnInit(): void {
  }

}
