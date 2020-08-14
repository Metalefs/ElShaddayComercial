import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from 'src/app/data/service/RestApiService';
import { Collections } from 'src/app/data/schema/MongoCollections';
class Dia{
  number_string:string;
  number:number;
  day:string;
}

@Component({
  selector: 'cardapio-lista-agrupada',
  templateUrl: './cardapio-lista-agrupada.component.html',
  styleUrls: ['./cardapio-lista-agrupada.component.css']
})

export class CardapioListaAgrupadaComponent implements OnInit {

  DiasSemana: Dia[];
  DiaAtual:number;  
  @Input()
  Pedido:Collections.Pedido;
  Cardapios:Collections.Cardapio[] = null;
  expanded:boolean;
  constructor(public api: RestApiService) {  
    this.expanded = true;
  }

  LerCardapio() {
    this.api.Cardapios().subscribe(data=>{
      this.Cardapios = data;
      console.log(this.Cardapios)
    });
  }

  ngOnInit(): void {
    this.DiasSemana = [
      {number_string:"1",number: 1, day:"Segunda"},
      {number_string:"2",number: 2, day:"Terça"},
      {number_string:"3",number: 3, day:"Quarta"},
      {number_string:"4",number: 4, day:"Quinta"},
      {number_string:"5",number: 5, day:"Sexta"},
      {number_string:"6",number: 6, day:"Sábado"},
    ];
    this.LerCardapio();
    this.DiaAtual = new Date().getDay();
   
  }

}
