import { Component, OnInit } from '@angular/core';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { SobreService } from 'src/app/data/service/domain/SobreService';
import { MatDialog } from '@angular/material/dialog';
import { DynamicFormComponent } from 'src/app/shared/component/dynamic-form/dynamic-form.component';
import { TextboxQuestion } from 'src/app/shared/component/dynamic-form/question-textbox';
import { Table } from 'src/app/data/schema/Table';

@Component({
  selector: 'app-editar-sobre',
  templateUrl: './editar-sobre.component.html',
  styleUrls: ['./editar-sobre.component.css']
})
export class EditarSobreComponent implements OnInit {

  Sobre:Collections.Sobre = null;
  SobreTable:Table;

  constructor(private api: SobreService, private dialog: MatDialog) { 
    this.SobreTable = new Table();
    this.api = api;
    this.AtualizarTabela();
    this.SobreTable.displayedColumns = [
        "Descricao",
        "Nome",
        "Servico",
        "Historia",
        "Slogan",
        "Acoes"
    ];

  }
  AtualizarTabela(){
    this.api.Ler().subscribe(x=>{
      this.SobreTable.dataSource = x;
    })
  }

  AbrirModalEntrar(): void {
    
  }
  Editar(Sobre:Collections.Sobre){

    let data = [];
    let id = Sobre._id;
    Object.entries(Sobre).forEach(([key, value]) => {
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
      let Sobre = new Collections.Sobre(
        result[0].value,
        result[1].value,
        result[2].value,
        result[3].value,
        result[4].value,
      )
      Sobre._id = id;
      this.api.Editar(Sobre).subscribe(x=> this.AtualizarTabela());
    });
  }

  Remover(Sobre:Collections.Sobre){
    this.api.Remover(Sobre._id);
  }
  
  ngOnInit(): void {
  }
}
