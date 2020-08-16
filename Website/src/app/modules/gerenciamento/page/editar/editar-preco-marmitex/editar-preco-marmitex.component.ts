import { Component, OnInit } from '@angular/core';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { PrecoMarmitexService } from 'src/app/data/service/domain/PrecoMarmitexService';
import { MatDialog } from '@angular/material/dialog';
import { DynamicFormComponent } from 'src/app/shared/component/dynamic-form/dynamic-form.component';
import { TextboxQuestion } from 'src/app/shared/component/dynamic-form/question-textbox';
import { Table } from 'src/app/data/schema/Table';
@Component({
  selector: 'app-editar-preco-marmitex',
  templateUrl: './editar-preco-marmitex.component.html',
  styleUrls: ['./editar-preco-marmitex.component.css']
})
export class EditarPrecoMarmitexComponent implements OnInit {

  PrecoMarmitex:Collections.PrecoMarmitex = null;
  PrecoMarmitexTable:Table;

  constructor(private api: PrecoMarmitexService, private dialog: MatDialog) { 
    this.PrecoMarmitexTable = new Table();
    this.api = api;
    this.AtualizarTabela();
    this.PrecoMarmitexTable.displayedColumns = [
      "Pequena",
      "Grande",
      "Acoes"
    ];

  }
  AtualizarTabela(){
    this.api.Ler().subscribe(x=>{
      this.PrecoMarmitexTable.dataSource = x;
    })
  }

  AbrirModalEntrar(): void {
    
  }
  Editar(PrecoMarmitex:Collections.PrecoMarmitex){

    let data = [];
    let id = PrecoMarmitex._id;
    Object.entries(PrecoMarmitex).forEach(([key, value]) => {
      if(key != "_id")
      data.push(
        new TextboxQuestion({
          key: key,
          label: key,
          value: value,
          required: true,
          type:"textbox",
          order: 1
        })
      )
    })
      
    console.log(data);
    const dialogRef = this.dialog.open(DynamicFormComponent, {
      width: '90%',
      data: data
    });

    dialogRef.afterClosed().subscribe((result :TextboxQuestion[]) => {
      let PrecoMarmitex = new Collections.PrecoMarmitex(
        parseFloat(result[0].value),
        parseFloat(result[1].value),
      )
      PrecoMarmitex._id = id;
      this.api.Editar(PrecoMarmitex).subscribe(x=> this.AtualizarTabela());
    });
  }

  Remover(PrecoMarmitex:Collections.PrecoMarmitex){
    this.api.Remover(PrecoMarmitex._id);
  }
  
  ngOnInit(): void {
  }


}
