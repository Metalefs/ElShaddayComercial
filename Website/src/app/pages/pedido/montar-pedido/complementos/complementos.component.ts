import { Component, OnInit, Input } from '@angular/core';
import { ComplementoService } from '../../../../api/services/ComplementoService';
import { Collections } from '../../../../shared/_models/MongoCollections';

class TipoComplemento {
  tipo:string;
  nome:string;
  class:string;
  constructor(){}
}

@Component({
  selector: 'app-complementos',
  templateUrl: './complementos.component.html',
  styleUrls: ['./complementos.component.css']
})
export class ComplementosComponent implements OnInit {
  @Input()
  Pedido:Collections.Pedido;
  
  Complementos: Collections.Complemento[];

  Tipos:TipoComplemento[];
  constructor(private ComplementoService: ComplementoService) { 
  }
  LerComplementos(){
    this.ComplementoService.Ler().subscribe(x=>{
      this.Complementos = x;
    })
  }

  ngOnInit(): void {
    this.Tipos = [
      {tipo:"S",nome: "Salada", class:"has-background-success	"},
      {tipo:"C",nome: "Carne", class:"has-background-danger	"},
      {tipo:"B",nome: "Bebida", class:"has-background-info	"},
    ];
    this.LerComplementos();
  }

}
