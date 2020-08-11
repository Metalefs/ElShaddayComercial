import { Component, OnInit } from '@angular/core';
import { Collections } from 'src/app/data/schema/MongoCollections';
import { PrecoMarmitexService } from 'src/app/data/service/domain/PrecoMarmitexService';

@Component({
  selector: 'app-editar-preco-marmitex',
  templateUrl: './editar-preco-marmitex.component.html',
  styleUrls: ['./editar-preco-marmitex.component.css']
})
export class EditarPrecoMarmitexComponent implements OnInit {

  PrecoMarmitex:Collections.PrecoMarmitex = null;
  constructor(private api: PrecoMarmitexService) {  }

  Editar(){
    this.api.Editar(this.PrecoMarmitex);
  }
  Remover(){
    this.api.Remover(this.PrecoMarmitex._id);
  }

  ngOnInit(): void {
  }

}
