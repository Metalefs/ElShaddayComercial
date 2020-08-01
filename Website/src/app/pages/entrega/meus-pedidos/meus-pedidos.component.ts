import { Component, OnInit } from '@angular/core';
import { Collections } from 'src/app/shared/_models/MongoCollections';
import { PedidoService } from 'src/app/api/services/PedidoService';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.css']
})
export class MeusPedidosComponent implements OnInit {

  Pedidos: Collections.Pedido[];

  constructor(private PedidoService: PedidoService) {
    this.PedidoService.Ler().subscribe(x=> console.log(x))
  }

  ngOnInit(): void {
  }

}
