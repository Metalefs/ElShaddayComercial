import { Component, OnInit } from '@angular/core';
import { Collections } from '../../../shared/MongoCollections';
import { RestApiService } from '../../../api/RestApiService';

@Component({
  selector: 'app-editar-sobre',
  templateUrl: './editar-sobre.component.html',
  styleUrls: ['./editar-sobre.component.css']
})
export class EditarSobreComponent implements OnInit {

  Sobre:Collections.Sobre = null;
  constructor(public api: RestApiService) {  }

  LerInformacoesContato() {
    this.api.Sobre().subscribe(data=>{
      this.Sobre = data[0];
      console.log(this.Sobre);
    });
  }

  ngOnInit(): void {
  }

}
