import { Component, OnInit } from '@angular/core';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { CardapioService } from 'src/app/data/service/domain/CardapioService';
import { MatDialog } from '@angular/material/dialog';
import { DynamicFormComponent } from 'src/app/shared/component/dynamic-form/dynamic-form.component';
import { TextboxQuestion } from 'src/app/shared/component/dynamic-form/question-textbox';

export class Table {
  displayedColumns: string[];
  dataSource = {};
}

@Component({
  selector: 'app-editar-cardapio',
  templateUrl: './editar-cardapio.component.html',
  styleUrls: ['./editar-cardapio.component.css']
})
export class EditarCardapioComponent implements OnInit {
  
  CardapioTable:Table;

  constructor(private api: CardapioService,private dialog: MatDialog) { 
    this.CardapioTable = new Table();
    api.Ler().subscribe(x=>{
      this.CardapioTable.dataSource = x;
    })

    this.CardapioTable.displayedColumns = [
      "Dia",
      "Nome",
      "Ingredientes",
      "Tipo",
      "ImgSrc",
      "Acoes"
    ];

  }
  AbrirModalEntrar(): void {
    
  }
  Editar(Cardapio:Collections.Cardapio){

    let data = [];
    
    Object.entries(Cardapio).forEach(([key, value]) => {
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
      let Cardapio = new Collections.Cardapio(
        result[0].value,
        result[1].value,
        result[2].value,
        result[3].value,
        result[4].value,
      )
      this.api.Editar(Cardapio);
    });
  }

  Remover(Cardapio:Collections.Cardapio){
    this.api.Remover(Cardapio._id);
  }
  
  ngOnInit(): void {
  }

}