import { Component, OnInit, Input } from '@angular/core';
import { ComplementoService } from 'src/app/data/service/domain/ComplementoService';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { TipoComplemento } from 'src/app/data/schema/TipoComplemento';

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
  SomaTipos(){
    let totais = this.Tipos.map(x=>x.total);
    return totais.reduce((a, b) => a + b, 0);
  }
  ngOnInit(): void {
    this.Tipos = [
      {tipo:"S", nome: "Salada", class:"has-background-success", total:0.00},
      {tipo:"C", nome: "Carne", class:"has-background-danger", total:0.00},
      {tipo:"B", nome: "Bebida", class:"has-background-info", total:0.00},
      {tipo:"O", nome: "Outro", class:"has-background-info", total:0.00},
    ];
    this.LerComplementos();
    
  }

}
