import { Component, OnInit } from '@angular/core';
import { AvaliacaoService } from 'src/app/api/services/AvaliacaoService'
import { Collections } from 'src/app/shared/_models/MongoCollections';

class Estrela{
  numero:number;
  active:boolean;
}

@Component({
  selector: 'app-estrelas',
  templateUrl: './estrelas.component.html',
  styleUrls: ['./estrelas.component.css']
})

export class EstrelasComponent implements OnInit {
  constructor(private AvaliacaoService:AvaliacaoService) {

    this.AvaliacaoService.Ler().subscribe(x=>this.Avaliacoes = x);

  }
  MediaAvaliacoes:number;
  Avaliacoes: Collections.Avaliacao[];
  QuantEstrelas: Estrela[] = [{numero:1,active:false},{numero:2,active:false},{numero:3,active:false},{numero:4,active:false},{numero:5,active:false}];
  Estrelas = 0;

  Avaliar(estrela:Estrela){
    this.ResetarEstrelas();
    let Avaliacao = new Collections.Avaliacao(estrela.numero);
    this.AvaliacaoService.Incluir(Avaliacao).subscribe();
    
    for(let i =0; i< estrela.numero; i++){
      this.QuantEstrelas[i].active = this.QuantEstrelas[i].active ? false : true;
    }
  }

  ResetarEstrelas(){
    for(let i =0; i< this.QuantEstrelas.length; i++){
      this.QuantEstrelas[i].active = false;
    }
  }

  CalcularMediaAvaliacao(){
    if(this.Avaliacoes != undefined){
      let somaAvaliacoes = this.Avaliacoes.map(x=>x.Nota).reduce((a, b) => a + b, 0);
      this.MediaAvaliacoes = somaAvaliacoes/this.Avaliacoes.length;
    }
  }

  IncrEscrelas(){
    this.Estrelas ++;
  }

  ngOnInit(): void {
    this.CalcularMediaAvaliacao();
  }

}
