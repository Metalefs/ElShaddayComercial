import { Component, OnInit, NgModule } from '@angular/core';

import { Collections } from 'src/app/data/schema/MongoCollections';
import { SobreService } from 'src/app/data/service/domain//SobreService';
import { InformacoesContatoService } from 'src/app/data/service/domain//InformacoesContatoService';
import { PrecoMarmitexService } from 'src/app/data/service/domain//PrecoMarmitexService';

import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { fade } from 'src/app/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations:[fade]
})
export class HeroComponent implements OnInit {
  loading = false;
  Sobre:Collections.Sobre;
  InformacaoContato:Collections.InformacoesContato;
  PrecoMarmitex:Collections.PrecoMarmitex;

  currentUser: Collections.Cliente;
  constructor(private SobreService: SobreService, 
    private InfoContatoService: InformacoesContatoService,
    private PrecoMarmitexService : PrecoMarmitexService,
    private authenticationService: AuthenticationService,
    
    ) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     }

  async LerSobre(){
    if(localStorage.getItem("Sobre"))
      this.Sobre = JSON.parse(localStorage.getItem("Sobre"))
    else
    this.SobreService.Ler().subscribe(data=>{
      this.Sobre = data[0];
      localStorage.setItem("Sobre",JSON.stringify(this.Sobre))
    });
  }

  async LerInfoContato(){
    if(localStorage.getItem("InformacaoContato"))
      this.InformacaoContato = JSON.parse(localStorage.getItem("InformacaoContato"))
    else
    this.InfoContatoService.Ler().subscribe(data=>{
      this.InformacaoContato = data[0];
      localStorage.setItem("InformacaoContato",JSON.stringify(this.InformacaoContato))
    });
  }

  async LerPrecoMarmitex(){
    if(localStorage.getItem("PrecoMarmitex"))
      this.PrecoMarmitex = JSON.parse(localStorage.getItem("PrecoMarmitex"))
    else
    this.PrecoMarmitexService.Ler().subscribe(data=>{
      this.PrecoMarmitex = data[0];
      localStorage.setItem("PrecoMarmitex",JSON.stringify(this.PrecoMarmitex))
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.LerSobre();
    this.LerInfoContato();
    this.LerPrecoMarmitex();
  }

}
