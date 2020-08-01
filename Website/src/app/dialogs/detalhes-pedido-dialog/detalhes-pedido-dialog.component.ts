import { Component, OnInit, Inject, Input } from '@angular/core';
import { Collections } from 'src/app/shared/_models/MongoCollections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhes-pedido-dialog',
  templateUrl: './detalhes-pedido-dialog.component.html',
  styleUrls: ['./detalhes-pedido-dialog.component.css']
})

export class DetalhesPedidoDialogComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<DetalhesPedidoDialogComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: Collections.Pedido) {
      
    }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log("Detalhes pedido",this.data)
  }

}
