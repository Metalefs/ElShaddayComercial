import { Component, OnInit, ɵConsole } from '@angular/core';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { CardapioService } from 'src/app/data/service/domain/CardapioService';
import { MatDialog } from '@angular/material/dialog';
import { DynamicFormComponent } from 'src/app/shared/component/dynamic-form/dynamic-form.component';
import { TextboxQuestion } from 'src/app/shared/component/dynamic-form/question-textbox';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Table } from 'src/app/data/schema/Table';
import { DynFormQuestions, QuestionBase } from 'src/app/shared/component/dynamic-form/question-base';

@Component({
  selector: 'app-editar-cardapio',
  templateUrl: './editar-cardapio.component.html',
  styleUrls: ['./editar-cardapio.component.css']
})
export class EditarCardapioComponent implements OnInit {
  
  CardapioTable:Table;
  constructor(private api: CardapioService,private dialog: MatDialog) { 
    this.CardapioTable = new Table();
    this.api = api;
    this.AtualizarTabela();
    this.CardapioTable.displayedColumns = [
      "Dia",
      "Nome",
      "Ingredientes",
      "Tipo",
      "Src",
      "SrcType",
      "Acoes"
    ];

  }
  AtualizarTabela(){
    this.api.Ler().subscribe(x=>{
      this.CardapioTable.dataSource = x;
    })
  }

  Criar(): void {
    let questions: QuestionBase<string>[] = [];
    let method = "Criar";
    let Cardapio = new Collections.Cardapio(
      "0",
      "",
      "",
      "",
      "",
      "",
    );
    Object.entries(Cardapio).forEach(([key, value]) => {
      if(key != "_id" && key != "Preco" && key != "Tamanho"){

        let type = "textbox";
        let options :{key: string, value:string }[];

        if(key == "Src"){
          type = "file";
        }
        else if(key == "SrcType"){
          type = "dropdown";
          options = [
            {key:"Foto", value:"F"},
            {key:"Video", value:"V"}
          ]
        }
        questions.push(
          new TextboxQuestion({
            key: key,
            label: key,
            value: value,
            required: true,
            type:type,
            options: options,
            order: 1
          })
        )

      }
    })
    let Data = new DynFormQuestions(questions,method);
    const dialogRef = this.dialog.open(DynamicFormComponent, {
      width: '90%',
      data: Data
    });

    dialogRef.afterClosed().subscribe((result :TextboxQuestion[]) => {

      let Cardapio = new Collections.Cardapio(
        result[0].value,
        result[1].value,
        result[2].value,
        result[3].value,
        result[4].image,
        result[5].value,
      )
     
      this.api.Incluir(Cardapio).subscribe(x=> this.AtualizarTabela());
    });
  }

  Editar(Cardapio:Collections.Cardapio){

    let questions: QuestionBase<string>[] = [];
    let method = "Editar";
    let id = Cardapio._id;
    Object.entries(Cardapio).forEach(([key, value]) => {
      if(key != "_id"){

        let type = "textbox";
        let options :{key: string, value:string }[];

        if(key == "Src"){
          type = "file";
        }
        else if(key == "SrcType"){
          type = "dropdown";
          options = [
            {key:"Foto", value:"F"},
            {key:"Video", value:"V"}
          ]
        }
        questions.push(
          new TextboxQuestion({
            key: key,
            label: key,
            value: value,
            required: true,
            type:type,
            options: options,
            order: 1
          })
        )

      }
    })
    let Data = new DynFormQuestions(questions,method);
    const dialogRef = this.dialog.open(DynamicFormComponent, {
      width: '90%',
      data: Data
    });

    dialogRef.afterClosed().subscribe((result :TextboxQuestion[]) => {

      let Cardapio = new Collections.Cardapio(
        result[0].value,
        result[1].value,
        result[2].value,
        result[3].value,
        result[4].image,
        result[5].value,
      )
      Cardapio._id = id;
     
      this.api.Editar(Cardapio).subscribe(x=> this.AtualizarTabela());
    });
  }

  Remover(Cardapio:Collections.Cardapio){
    alert("Deletando Cardapio " +Cardapio.Nome)
    this.api.Remover(Cardapio._id).subscribe(x=> this.AtualizarTabela());
  }
  
  ngOnInit(): void {
  }

}