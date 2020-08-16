import { Component, OnInit } from '@angular/core';

import { RestApiService } from 'src/app/data/service/RestApiService';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { CardapioHelper } from 'src/app/_helpers/cardapio_helper';

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
    if(localStorage.getItem("Cardapio"))
      this.Cardapios = JSON.parse(localStorage.getItem("Cardapio"))
    else
    this.api.Cardapios().subscribe(data=>{
      console.log(data);
      this.Cardapios = data;
      this.Cardapios.sort(function(a, b){return parseInt(a.Dia)-parseInt(b.Dia)})
      this.Cardapios.forEach(x=>{
        x.Dia = this.CardapioHelper.ObterDiaSemana(x.Dia);
      })
      localStorage.setItem("Cardapio", JSON.stringify(this.Cardapios))
    });
  }

  ngOnInit() {
    this.LerCardapio();
  }

}
