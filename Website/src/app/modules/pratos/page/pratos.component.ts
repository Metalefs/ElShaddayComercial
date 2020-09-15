import { Component, OnInit } from '@angular/core';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { CardapioService } from 'src/app/data/service/domain/CardapioService';
import { PrecoMarmitexService } from 'src/app/data/service/domain//PrecoMarmitexService';

import { Table } from 'src/app/data/schema/Table';
import { CardapioHelper } from 'src/app/_helpers/cardapio_helper';
import { fade } from 'src/app/animations';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.component.html',
  styleUrls: ['./pratos.component.css'],
  animations: [fade]
})
export class PratosComponent implements OnInit {
  x : any;
  loading = true;
  CardapioTable:Table;
  PrecoMarmitex:Collections.PrecoMarmitex;

  constructor(private api: CardapioService,
    private PrecoMarmitexService : PrecoMarmitexService,
    private CardapioHelper: CardapioHelper) { 
    this.CardapioTable = new Table();
    this.api = api;
    this.AtualizarTabela();
    this.CardapioTable.displayedColumns = [
      "Dia",
      "Nome",
      "Ingredientes",
    ];

  }
  AtualizarTabela(){
    this.api.Ler().subscribe(x=>{
      x.sort(function(a, b){return parseInt(a.Dia)-parseInt(b.Dia)})
      x.forEach(y => {
        y.Dia = this.CardapioHelper.ObterDiaSemana(y.Dia);
      });
      this.CardapioTable.dataSource = x;
      this.loading = false;
    })
  }

  async LerPrecoMarmitex(){
    if(localStorage.getItem("PrecoMarmitex")){
      this.PrecoMarmitex = JSON.parse(localStorage.getItem("PrecoMarmitex"))
      this.loading = false;
    }
    else
    this.PrecoMarmitexService.Ler().subscribe(data=>{
      this.PrecoMarmitex = data[0];
      localStorage.setItem("PrecoMarmitex",JSON.stringify(this.PrecoMarmitex))
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.LerPrecoMarmitex();
  }

}
