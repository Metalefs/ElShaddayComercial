import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../api/RestApiService';
import { Collections } from '../shared/MongoCollections';
import { CardapioCardComponent } from './cardapio-card/cardapio-card.component';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  Cardapios:Collections.Cardapio[] = null;
  
  constructor(public api: RestApiService) {  }

  LerCardapio() {
    this.api.Cardapios().subscribe(data=>{
      console.log(data);
      this.Cardapios = data;
      this.Cardapios.forEach(x=>{
        x.Dia = this.ObterDiaSemana(x.Dia);
      })
    });
  }

  ObterDiaSemana(dia):string{
    switch(dia){
      case "0":
        return "Domingo";
      case "1":
        return "Segunda";
      case "2":
        return "Terça";
      case "3":
        return "Quarta";
      case "4":
        return "Quinta";
      case "5":
        return "Sexta";
      case "6":
        return "Sábado";
    }
  }

  ngOnInit() {
    this.LerCardapio();
  }

}
