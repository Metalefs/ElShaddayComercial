import { Component, OnInit } from '@angular/core';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { ComplementoService } from 'src/app/data/service/domain/ComplementoService';
import { MatDialog } from '@angular/material/dialog';
import { DynamicFormComponent } from 'src/app/shared/component/dynamic-form/dynamic-form.component';
import { TextboxQuestion } from 'src/app/shared/component/dynamic-form/question-textbox';
import { Table } from 'src/app/data/schema/Table';
import { QuestionBase, DynFormQuestions } from 'src/app/shared/component/dynamic-form/question-base';
@Component({
  selector: 'app-editar-complemento',
  templateUrl: './editar-complemento.component.html',
  styleUrls: ['./editar-complemento.component.css']
})
export class EditarComplementoComponent implements OnInit {

  Complemento:Collections.Complemento = null;
  ComplementoTable:Table;

  constructor(private api: ComplementoService, private dialog: MatDialog) { 
    this.ComplementoTable = new Table();
    this.api = api;
    this.AtualizarTabela();
    this.ComplementoTable.displayedColumns = [
      "Nome",
      "Tipo",
      "Preco",
      "Acoes"
    ];

  }
  AtualizarTabela(){
    this.api.Ler().subscribe(x=>{
      this.ComplementoTable.dataSource = x;
    })
  }

  Criar(): void {
    let questions: QuestionBase<string>[] = [];
    let method = "Criar";
    let Complemento = new Collections.Complemento(
      "",
      "",
      0,
    );
    Object.entries(Complemento).forEach(([key, value]) => {
      if(key != "_id")
      questions.push(
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
    let Data = new DynFormQuestions(questions,method);
    const dialogRef = this.dialog.open(DynamicFormComponent, {
      width: '90%',
      data: Data
    });

    dialogRef.afterClosed().subscribe((result :TextboxQuestion[]) => {
      let Complemento = new Collections.Complemento(
        result[0].value,
        result[1].value,
        parseFloat(result[2].value),
      )
      this.api.Incluir(Complemento).subscribe(x=> this.AtualizarTabela());
    });
  }

  Editar(Complemento:Collections.Complemento){

    let questions: QuestionBase<string>[] = [];
    let method = "Editar";
    let id = Complemento._id;
    Object.entries(Complemento).forEach(([key, value]) => {
      if(key != "_id")
      questions.push(
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
      
    let Data = new DynFormQuestions(questions,method);
    const dialogRef = this.dialog.open(DynamicFormComponent, {
      width: '90%',
      data: Data
    });

    dialogRef.afterClosed().subscribe((result :TextboxQuestion[]) => {
      let Complemento = new Collections.Complemento(
        result[0].value,
        result[1].value,
        parseFloat(result[2].value),
      )
      Complemento._id = id;
      this.api.Editar(Complemento).subscribe(x=> this.AtualizarTabela());
    });
  }

  Remover(Complemento:Collections.Complemento){
    alert("Deletando complemento " +Complemento.Nome)
    this.api.Remover(Complemento._id).subscribe(x=> this.AtualizarTabela());
  }
  
  ngOnInit(): void {
  }


}
