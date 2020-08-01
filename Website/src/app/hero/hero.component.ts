import { Component, OnInit } from '@angular/core';

import { Collections } from '../shared/_models/MongoCollections';
import { SobreService } from '../api/services/SobreService';
import { InformacoesContatoService } from '../api/services/InformacoesContatoService';
import { PrecoMarmitexService } from '../api/services/PrecoMarmitexService';
import { PedidoService } from '../api/services/PedidoService';
import { AuthenticationService } from 'src/app/api/authentication/authentication.service';
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
  currentUser: Collections.Cliente;
  constructor(private SobreService: SobreService, 
    private InfoContatoService: InformacoesContatoService,
    private PrecoMarmitexService : PrecoMarmitexService,
    private authenticationService: AuthenticationService,
    private PedidoService: PedidoService
    ) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     }

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
    });
  }

  async LerPedidos(){
    this.PedidoService.Count().subscribe(data=>{
      console.log(data);
      this.TotalMarmitasEntregues += data.count;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.TotalMarmitasEntregues = 300;
    this.loading = true;
    this.LerSobre();
    this.LerInfoContato();
    this.LerPrecoMarmitex();
    this.LerPedidos();
  }

}
