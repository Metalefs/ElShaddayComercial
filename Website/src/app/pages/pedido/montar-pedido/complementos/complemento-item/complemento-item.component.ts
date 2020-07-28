import { Component, OnInit, Input } from '@angular/core';
import { Collections } from 'src/app/shared/_models/MongoCollections';
import { TipoComplemento } from '../../../../../shared/_models/TipoComplemento';

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
  @Input()
  Tipo:TipoComplemento;
  Quantidade:number;
  constructor() { this.Quantidade = 0}

  AdicinarAoPedido(){
    if(this.Pedido != undefined){
      this.Pedido.AdicionarComplemento(this.Complemento);
      this.CalcularQuantidade();
      this.Tipo.total += this.Complemento.Preco; 
    }  
    console.log(this.Pedido);
  }

  RemoverDoPedido(){
    if(this.Pedido != undefined){
      
      if(this.Quantidade > 0){
        
        this.Pedido.RemoverComplemento(this.Complemento);
        this.CalcularQuantidade();

        if(this.Tipo.total > 0)
          this.Tipo.total -= this.Complemento.Preco;
      }

    }
    console.log(this.Pedido);
  }

  CalcularQuantidade(){
    this.Quantidade = this.Pedido.Complementos.filter(x=>x.Nome == this.Complemento.Nome).length;
  }

  CalcularPreco(){
    this.Tipo.total = this.Pedido.Complementos.filter(x=>x.Nome == this.Complemento.Nome).reduce((a, b) => a + b.Preco, 0);
  }

  ngOnInit(): void {
  }

}
