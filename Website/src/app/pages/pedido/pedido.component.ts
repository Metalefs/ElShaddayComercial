import { Component, OnInit } from '@angular/core';
import { Collections } from 'src/app/shared/_models/MongoCollections';
import { CardapioService } from '../../api/services/CardapioService';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  Pedido: Collections.Pedido;
  Cardapios: Collections.Cardapio[];
  constructor(private CardapioService: CardapioService) {
    this.Pedido = new Collections.Pedido(
      "",
      this.Cardapios,
      null,
      "",
      true,
      0
    );
  }

  CardapioDeHoje(){
    this.CardapioService.Filtrar(new Date().getDay()).subscribe(x=>{
      this.Cardapios = x;
      this.Pedido.Cardapios = x;
    });
  }

  ngOnInit(): void {
    this.CardapioDeHoje();
  }

}
