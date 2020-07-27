import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../api/RestApiService';
import { Collections } from '../shared/_models/MongoCollections';
import { CardapioHelper } from '../_helpers/cardapio_helper';

@Component({
  selector: 'app-cardapio-card',
  templateUrl: './cardapio-card.component.html',
  styleUrls: ['./cardapio-card.component.css']
})
export class CardapioCardComponent implements OnInit {

  Cardapios:Collections.Cardapio[] = null;
  
  constructor(private api: RestApiService, private CardapioHelper: CardapioHelper) {

  }

  LerCardapio() {
    this.api.Cardapios().subscribe(data=>{
      console.log(data);
      this.Cardapios = data;
      this.Cardapios.forEach(x=>{
        x.Dia = this.CardapioHelper.ObterDiaSemana(x.Dia);
      })
    });
  }

  ngOnInit() {
    this.LerCardapio();
  }

}
