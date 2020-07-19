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

  constructor() { }

  ngOnInit(): void {
    console.log(this.Cardapio);
  }

}
