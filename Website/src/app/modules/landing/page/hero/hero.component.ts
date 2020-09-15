import { Component, OnInit, NgModule } from '@angular/core';

import { Collections } from 'src/app/data/schema/MongoCollections';
import { SobreService } from 'src/app/data/service/domain//SobreService';
import { InformacoesContatoService } from 'src/app/data/service/domain//InformacoesContatoService';

import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { fade } from 'src/app/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations:[fade]
})
export class HeroComponent implements OnInit {
  loading = true;
  Sobre:Collections.Sobre;
  InformacaoContato:Collections.InformacoesContato;

  currentUser: Collections.Cliente;
  constructor(private SobreService: SobreService, 
    private InfoContatoService: InformacoesContatoService,
    private authenticationService: AuthenticationService,
    
    ) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     }

  async LerSobre(){
    this.SobreService.Ler().subscribe(data=>{
      this.Sobre = data[0];
      localStorage.setItem("Sobre",JSON.stringify(this.Sobre));
      this.loading = false;
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

  ngOnInit(): void {
    this.LerInfoContato();
    this.LerSobre();
  }

}
