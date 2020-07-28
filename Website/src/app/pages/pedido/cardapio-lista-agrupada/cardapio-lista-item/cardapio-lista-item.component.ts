import { Component, OnInit, Input  } from '@angular/core';
import { Collections } from '../../../../shared/_models/MongoCollections';
import { CardapioHelper } from '../../../../_helpers/cardapio_helper';
@Component({
  selector: 'cardapio-lista-item',
  templateUrl: './cardapio-lista-item.component.html',
  styleUrls: ['./cardapio-lista-item.component.css']
})
export class CardapioListaItemComponent implements OnInit {

  @Input()
  Cardapio: Collections.Cardapio;
  @Input()
  Pedido:Collections.Pedido;
  Ativo:boolean;  
  Video:boolean;  
  Caminho:string;  
  Quantidade:number;
  constructor(private CardapioHelper: CardapioHelper) { 
    this.Video = false;
    this.Caminho = "";
    this.Quantidade = 0;
  }
  AdicinarAoPedido(){
    if(this.Pedido != undefined){
      this.Pedido.SelecionarCardapio(this.Cardapio);
      this.CalcularQuantidade();
    }  
    console.log(this.Pedido);
  }
  RemoverDoPedido(){
    if(this.Pedido != undefined){
      this.Pedido.Cardapios.pop();
      this.CalcularQuantidade();
    }
    console.log(this.Pedido);
  }
  CalcularQuantidade(){
    this.Quantidade = this.Pedido.Cardapios.filter(x=>x.Nome == this.Cardapio.Nome).length;
  }
  ngOnInit(): void {
    this.Caminho = this.CardapioHelper.ObertCaminhoRecurso(this.Cardapio);
    this.Ativo = this.CardapioHelper.VerificarAtivo(this.Cardapio);
    if(this.Cardapio.ImgSrc == "V"){
      this.Video = true;
    }
  }

}
