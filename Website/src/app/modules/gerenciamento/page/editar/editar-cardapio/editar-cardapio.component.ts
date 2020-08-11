import { Component, OnInit } from '@angular/core';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { CardapioService } from 'src/app/data/service/domain/CardapioService';

@Component({
  selector: 'app-editar-cardapio',
  templateUrl: './editar-cardapio.component.html',
  styleUrls: ['./editar-cardapio.component.css']
})
export class EditarCardapioComponent implements OnInit {

  Cardapio:Collections.Cardapio = null;
  constructor(private api: CardapioService) {  }

  Editar(){
    this.api.Editar(this.Cardapio);
  }
  Remover(){
    this.api.Remover(this.Cardapio._id);
  }
  
  ngOnInit(): void {
  }

}
