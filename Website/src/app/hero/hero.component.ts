import { Component, OnInit } from '@angular/core';

import { Collections } from '../shared/_models/MongoCollections';
import { SobreService } from '../api/services/SobreService';
import { InformacoesContatoService } from '../api/services/InformacoesContatoService';
import { PrecoMarmitexService } from '../api/services/PrecoMarmitexService';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  loading = false;
  Sobre:Collections.Sobre;
  InformacaoContato:Collections.InformacoesContato;
  PrecoMarmitex:Collections.PrecoMarmitex;
  TotalMarmitasEntregues: number;
  constructor(private SobreService: SobreService, 
    private InfoContatoService: InformacoesContatoService,
    private PrecoMarmitexService : PrecoMarmitexService
    ) {  }

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

  async LerPrecoMarmitex(){
    this.PrecoMarmitexService.Ler().subscribe(data=>{
      this.PrecoMarmitex = data[0];
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.TotalMarmitasEntregues = 300;
    this.loading = true;
    this.LerSobre();
    this.LerInfoContato();
    this.LerPrecoMarmitex();
  }

}
