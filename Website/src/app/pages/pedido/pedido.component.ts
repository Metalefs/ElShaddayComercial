import { Component, OnInit, OnDestroy } from '@angular/core';
import { Collections } from 'src/app/shared/_models/MongoCollections';
import { CardapioService } from '../../api/services/CardapioService';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit, OnDestroy {
  Pedido: Collections.Pedido;
  Cardapios: Collections.Cardapio[];
  constructor(private CardapioService: CardapioService) {
    
      this.Pedido = new Collections.Pedido(
        "",
        this.Cardapios,
        [new Collections.Complemento("","",0)],
        "",
        "A",
        0,
        new Date(),
        new Date()
      );
      this.CardapioDeHoje();
    
  }

  CardapioDeHoje(){
    this.Pedido.Cardapios = [];
    this.CardapioService.Ler().subscribe(x=>{
      x.forEach(y=>{
        if(parseInt(y.Dia) == new Date().getDay()){
          if(this.Pedido.Cardapios.length == 0)
            this.Pedido.Cardapios.push(y);
            this.Pedido.Cardapios.pop();
        }
      });
    });
  }

  SaveState(){
    localStorage.setItem("Pedido", JSON.stringify(this.Pedido));
  }

  LoadState(){
    if(localStorage.getItem("Pedido"))
      this.Pedido = JSON.parse(localStorage.getItem("Pedido"));
  }

  ngOnInit(): void {
  }

  ngOnDestroy() : void {
    this.SaveState();
    alert('Obs: Os dados do pedido serão perdidos.')
  }
}
