import { Component, OnInit, Input } from '@angular/core';
import { Collections } from 'src/app/data/schema/MongoCollections';

@Component({
  selector: 'app-montar-pedido',
  templateUrl: './montar-pedido.component.html',
  styleUrls: ['./montar-pedido.component.css']
})
export class MontarPedidoComponent implements OnInit {
  @Input()
  Pedido:Collections.Pedido;
  constructor() { }

  ngOnInit(): void {
    
  }

}
