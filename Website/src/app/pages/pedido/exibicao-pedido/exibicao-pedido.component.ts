import { Component, OnInit, Input } from '@angular/core';
import { Collections } from '../../../shared/_models/MongoCollections';

import { PrecoMarmitexService } from '../../../api/services/PrecoMarmitexService';
@Component({
  selector: 'app-exibicao-pedido',
  templateUrl: './exibicao-pedido.component.html',
  styleUrls: ['./exibicao-pedido.component.css']
})
export class ExibicaoPedidoComponent implements OnInit {
  @Input()
  Pedido:Collections.Pedido;
  PrecoMarmitex:Collections.PrecoMarmitex[];

  constructor(private PrecoMarmitexService: PrecoMarmitexService) {
    PrecoMarmitexService.Ler().subscribe(x=>this.PrecoMarmitex = x);
    
  }

  ngOnInit(): void {
  }

}
