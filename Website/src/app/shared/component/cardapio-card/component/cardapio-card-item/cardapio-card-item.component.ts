import { Component, OnInit, Input  } from '@angular/core';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { CardapioHelper } from 'src/app/_helpers/cardapio_helper';
@Component({
  selector: 'cardapio-card-item',
  templateUrl: './cardapio-card-item.component.html',
  styleUrls: ['./cardapio-card-item.component.css']
})
export class CardapioCardItemComponent implements OnInit {

  @Input()
  Cardapio: Collections.Cardapio;

  Ativo:boolean;  
  Video:boolean;  
  Caminho:string;  
  constructor(private CardapioHelper: CardapioHelper) { 
    this.Video = false;
    this.Caminho = "";
  }

  ngOnInit(): void {
    this.Caminho = this.CardapioHelper.ObertCaminhoRecurso(this.Cardapio);
    this.Ativo = this.CardapioHelper.VerificarAtivo(this.Cardapio);
  }

}
