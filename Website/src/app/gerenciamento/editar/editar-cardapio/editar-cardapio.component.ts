import { Component, OnInit } from '@angular/core';
import { Collections } from '../../../shared/MongoCollections';
import { CardapioService } from '../../../api/services/CardapioService';

@Component({
  selector: 'app-editar-cardapio',
  templateUrl: './editar-cardapio.component.html',
  styleUrls: ['./editar-cardapio.component.css']
})
export class EditarCardapioComponent implements OnInit {

  Cardapio:Collections.Cardapio = null;
  constructor(public api: CardapioService) {  }

  Editar(){
    this.api.Editar(this.Cardapio);
  }
  Remover(){
    this.api.Remover(this.Cardapio._id);
  }
  

  ngOnInit(): void {
  }

}
