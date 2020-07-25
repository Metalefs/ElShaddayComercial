import { Component, OnInit } from '@angular/core';
import { Collections } from '../../../shared/_models/MongoCollections';
import { SobreService } from '../../../api/services/SobreService';

@Component({
  selector: 'app-editar-sobre',
  templateUrl: './editar-sobre.component.html',
  styleUrls: ['./editar-sobre.component.css']
})
export class EditarSobreComponent implements OnInit {

  Sobre:Collections.Sobre = null;
  constructor(private api: SobreService) {  }

  Editar(){
    this.api.Editar(this.Sobre);
  }
  Remover(){
    this.api.Remover(this.Sobre._id);
  }
  
  ngOnInit(): void {
  }

}
