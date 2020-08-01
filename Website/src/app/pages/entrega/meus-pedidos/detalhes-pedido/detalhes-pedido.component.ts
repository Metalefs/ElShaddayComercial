import { Component, OnInit, Input } from '@angular/core';
import { Collections } from 'src/app/shared/_models/MongoCollections';
@Component({
  selector: 'app-detalhes-pedido',
  templateUrl: './detalhes-pedido.component.html',
  styleUrls: ['./detalhes-pedido.component.css']
})
export class DetalhesPedidoComponent implements OnInit {
  @Input()
  Pedido:Collections.Pedido;
  constructor() { }

  ngOnInit(): void {
  }

}
