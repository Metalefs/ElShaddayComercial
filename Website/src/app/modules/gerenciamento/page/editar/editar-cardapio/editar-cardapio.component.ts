import { Component, OnInit, ɵConsole } from '@angular/core';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { CardapioService } from 'src/app/data/service/domain/CardapioService';
import { MatDialog } from '@angular/material/dialog';
import { DynamicFormComponent } from 'src/app/shared/component/dynamic-form/dynamic-form.component';
import { TextboxQuestion } from 'src/app/shared/component/dynamic-form/question-textbox';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Table } from 'src/app/data/schema/Table';

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

  AbrirModalEntrar(): void {
    
  }
  Editar(Cardapio:Collections.Cardapio){

    let data = [];
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
        data.push(
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
      
    console.log(data);
    const dialogRef = this.dialog.open(DynamicFormComponent, {
      width: '90%',
      data: data
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
    this.api.Remover(Cardapio._id);
  }
  
  ngOnInit(): void {
  }

}