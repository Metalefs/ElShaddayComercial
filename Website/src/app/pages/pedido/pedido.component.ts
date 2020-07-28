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
    this.Pedido.Cardapios = [];
    this.CardapioService.Ler().subscribe(x=>{
      x.forEach(y=>{
        if(parseInt(y.Dia) == new Date().getDay()){
          if(this.Pedido.Cardapios.length == 0)
            this.Pedido.Cardapios.push(y);
        }
      });
    });
  }

  ngOnInit(): void {
    this.CardapioDeHoje();
  }

}
