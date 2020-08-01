import { Component, OnInit, Input } from '@angular/core';
import { Collections } from 'src/app/shared/_models/MongoCollections';

import { InformacoesContatoService } from 'src/app/api/services/InformacoesContatoService';

@Component({
  selector: 'app-meu-pedido-card',
  templateUrl: './meu-pedido-card.component.html',
  styleUrls: ['./meu-pedido-card.component.css']
})
export class MeuPedidoCardComponent implements OnInit {

  @Input()
  Pedido: Collections.Pedido;
  InformacoesContato:Collections.InformacoesContato;
  constructor(private InformacoesContatoService: InformacoesContatoService) { 
    InformacoesContatoService.Ler().subscribe(x=> this.InformacoesContato = x[0]);
  }

  ngOnInit(): void {
    console.log(this.Pedido);
  }

}
