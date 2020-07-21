import { Component, OnInit, Input  } from '@angular/core';
import { Collections } from '../../../../../Dominio/MongoCollections';

@Component({
  selector: 'cardapio-card',
  templateUrl: './cardapio-card.component.html',
  styleUrls: ['./cardapio-card.component.css']
})
export class CardapioCardComponent implements OnInit {

  @Input()
  Cardapio: Collections.Cardapio;

  Ativo:boolean;  
  constructor() { }

  VerificarAtivo(){
    let Hoje = new Date();
    this.Ativo = false;
    if(parseInt(this.Cardapio.Dia) == Hoje.getDay() || this.DiaToNumber(this.Cardapio.Dia) == Hoje.getDay()){
      this.Ativo = true;
    }
    console.log(this.Ativo, this.Cardapio.Dia)
  }

  DiaToNumber(dia): number{
    switch(dia){
      case "Domingo":
        return 0;
      case "Segunda":
        return 1;
      case "Terça":
        return 2;
      case "Quarta":
        return 3;
      case "Quinta":
        return 4;
      case "Sexta":
        return 5;
      case "Sábado":
        return 6;
    }
  }

  ngOnInit(): void {
    this.VerificarAtivo();
  }

}
