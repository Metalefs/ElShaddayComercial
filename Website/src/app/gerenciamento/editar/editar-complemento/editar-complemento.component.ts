import { Component, OnInit } from '@angular/core';
import { Collections } from '../../../shared/_models/MongoCollections';
import { ComplementoService } from '../../../api/services/ComplementoService';

@Component({
  selector: 'app-editar-complemento',
  templateUrl: './editar-complemento.component.html',
  styleUrls: ['./editar-complemento.component.css']
})
export class EditarComplementoComponent implements OnInit {

  Complemento:Collections.Complemento = null;
  constructor(private api: ComplementoService) {  }

  Editar(){
    this.api.Editar(this.Complemento);
  }
  Remover(){
    this.api.Remover(this.Complemento._id);
  }
  
  ngOnInit(): void {
  }

}
