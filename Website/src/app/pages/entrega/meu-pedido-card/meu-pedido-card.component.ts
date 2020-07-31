import { Component, OnInit } from '@angular/core';
import { Collections } from 'src/app/shared/_models/MongoCollections';
import { PedidoService } from 'src/app/api/services/PedidoService';

@Component({
  selector: 'app-meu-pedido-card',
  templateUrl: './meu-pedido-card.component.html',
  styleUrls: ['./meu-pedido-card.component.css']
})
export class MeuPedidoCardComponent implements OnInit {
  Pedidos: Collections.Pedido[];
  constructor(private PedidoService: PedidoService) {
    this.PedidoService.Ler().subscribe(x=> console.log(x))
    
  }

  ngOnInit(): void {
  }

}
