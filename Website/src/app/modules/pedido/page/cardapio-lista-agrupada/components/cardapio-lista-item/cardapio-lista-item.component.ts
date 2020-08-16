import { Component, OnInit, Input  } from '@angular/core';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { CardapioHelper } from 'src/app/_helpers/cardapio_helper';
import { PrecoMarmitexService } from 'src/app/data/service/domain/PrecoMarmitexService';
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
  constructor(private CardapioHelper: CardapioHelper, private PrecoMarmitexService: PrecoMarmitexService) { 
    this.Video = false;
    this.Caminho = "";
    this.Quantidade = 0;
  }

  AdicinarAoPedido(tipo:string){

    if(this.Pedido != undefined){
      let preco: number = 0;
      let Precos: Collections.PrecoMarmitex;

      this.PrecoMarmitexService.Ler().subscribe(x=>{
        Precos = x[0];

        if(tipo == 'p'){
          preco = Precos.Pequena
          this.Cardapio.Tamanho = "P";
        }
        else{
          preco = Precos.Grande
          this.Cardapio.Tamanho = "G";
        }
        
        this.Cardapio.Preco = preco;
        let newCardapio = JSON.stringify(this.Cardapio);
        this.Pedido.SelecionarCardapio(JSON.parse(newCardapio));
        this.CalcularQuantidade();
        console.log(this.Cardapio);
      }); 
    
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
    if(this.Cardapio.SrcType == "V"){
      this.Video = true;
    }
  }

}
