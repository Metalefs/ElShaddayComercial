import { Component, OnInit, Input } from '@angular/core';
import { Collections } from 'src/app/shared/_models/MongoCollections';

@Component({
  selector: 'app-complemento-item',
  templateUrl: './complemento-item.component.html',
  styleUrls: ['./complemento-item.component.css']
})
export class ComplementoItemComponent implements OnInit {
  @Input()
  Complemento: Collections.Complemento;
  @Input()
  Pedido:Collections.Pedido;

  constructor() { }

  AdicinarAoPedido(){
    if(this.Pedido != undefined){
      this.Pedido.AdicionarComplemento(this.Complemento);
    }  
    console.log(this.Pedido);
  }
  RemoverDoPedido(){
    if(this.Pedido != undefined){
      this.Pedido.Complementos.pop();
    }
    console.log(this.Pedido);
  }
  ngOnInit(): void {
  }

}
