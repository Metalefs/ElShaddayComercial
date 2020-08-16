import { Component, OnInit } from '@angular/core';

import { Collections } from 'src/app/data/schema/MongoCollections';
import { InformacoesContatoService } from 'src/app/data/service/domain/InformacoesContatoService';
import { MatDialog } from '@angular/material/dialog';
import { DynamicFormComponent } from 'src/app/shared/component/dynamic-form/dynamic-form.component';
import { TextboxQuestion } from 'src/app/shared/component/dynamic-form/question-textbox';
import { Table } from 'src/app/data/schema/Table';

@Component({
  selector: 'app-editar-infocontato',
  templateUrl: './editar-infocontato.component.html',
  styleUrls: ['./editar-infocontato.component.css']
})
export class EditarInfoContatoComponent implements OnInit {

  InformacoesContato:Collections.InformacoesContato = null;
  InformacoesContatoTable:Table;

  constructor(private api: InformacoesContatoService, private dialog: MatDialog) { 
    this.InformacoesContatoTable = new Table();
    this.api = api;
    this.AtualizarTabela();
    this.InformacoesContatoTable.displayedColumns = [
      "Telefone",
      "Email",
      "HorarioAtendimento",
      "Whatsapp",
      "Instagram",
      "Acoes"
    ];

  }
  AtualizarTabela(){
    this.api.Ler().subscribe(x=>{
      this.InformacoesContatoTable.dataSource = x;
    })
  }

  AbrirModalEntrar(): void {
    
  }
  Editar(InformacoesContato:Collections.InformacoesContato){

    let data = [];
    let id = InformacoesContato._id;
    Object.entries(InformacoesContato).forEach(([key, value]) => {
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
      let InformacoesContato = new Collections.InformacoesContato(
        result[0].value,
        result[1].value,
        result[2].value,
        result[3].value,
        result[4].value,
      )
      InformacoesContato._id = id;
      this.api.Editar(InformacoesContato).subscribe(x=> this.AtualizarTabela());
    });
  }

  Remover(InformacoesContato:Collections.InformacoesContato){
    this.api.Remover(InformacoesContato._id);
  }
  
  ngOnInit(): void {
  }


}
