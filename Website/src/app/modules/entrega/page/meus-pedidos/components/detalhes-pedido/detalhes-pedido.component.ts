import { Component, OnInit, Input } from '@angular/core';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { PedidoService } from 'src/app/data/service/domain/PedidoService';
@Component({
  selector: 'app-detalhes-pedido',
  templateUrl: './detalhes-pedido.component.html',
  styleUrls: ['./detalhes-pedido.component.css']
})
export class DetalhesPedidoComponent implements OnInit {
  @Input()
  Pedido:Collections.Pedido;
  constructor(private PedidoService: PedidoService) { }
  ConfirmarRecebimento(pedido){
    this.PedidoService.ConfirmarRecebimento(pedido).subscribe();
  }
  ngOnInit(): void {
  }

}
