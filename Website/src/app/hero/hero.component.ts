import { Component, OnInit } from '@angular/core';

import { Collections } from '../shared/MongoCollections';
import { SobreService } from '../api/services/SobreService';
import { InformacoesContatoService } from '../api/services/InformacoesContatoService';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  Sobre:Collections.Sobre;
  InformacaoContato:Collections.InformacoesContato;
  constructor(public SobreService: SobreService, public InfoContatoService: InformacoesContatoService) {  }

  async LerSobre(){
    this.SobreService.Ler().subscribe(data=>{
      this.Sobre = data[0];
    });
  }

  async LerInfoContato(){
    this.InfoContatoService.Ler().subscribe(data=>{
      this.InformacaoContato = data[0];
    });
  }

  ngOnInit(): void {
    this.LerSobre();
    this.LerInfoContato();
  }

}
