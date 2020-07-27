import { Component, OnInit } from '@angular/core';
import { ComplementoService } from '../../../../api/services/ComplementoService';
import { Collections } from '../../../../shared/_models/MongoCollections';

@Component({
  selector: 'app-complementos',
  templateUrl: './complementos.component.html',
  styleUrls: ['./complementos.component.css']
})
export class ComplementosComponent implements OnInit {
  Complementos: Collections.Complemento[];
  constructor(private ComplementoService: ComplementoService) { }

  LerComplementos(){
    this.ComplementoService.Ler().subscribe(x=>{
      this.Complementos = x;
    })
  }

  ngOnInit(): void {
    this.LerComplementos();
  }

}
