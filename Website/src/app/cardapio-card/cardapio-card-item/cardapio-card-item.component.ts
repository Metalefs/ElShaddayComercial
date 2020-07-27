import { Component, OnInit, Input  } from '@angular/core';
import { Collections } from '../../shared/_models/MongoCollections';

@Component({
  selector: 'cardapio-card-item',
  templateUrl: './cardapio-card-item.component.html',
  styleUrls: ['./cardapio-card-item.component.css']
})
export class CardapioCardItemComponent implements OnInit {

  @Input()
  Cardapio: Collections.Cardapio;

  Ativo:boolean;  
  Video:boolean;  
  Caminho:string;  
  constructor() { 
    this.Video = true;
    this.Caminho = "";
  }

  VerificarTipoRecurso(){
    this.Caminho = "";
    this.Video = true;
    if(this.Cardapio.ImgSrc === "F"){
      this.Caminho = `/assets/imagens/cardapio/${this.DiaToNumber(this.Cardapio.Dia)}.png`;
      this.Video = false;
    }
    else{
      this.Caminho = `/assets/imagens/cardapio/${this.DiaToNumber(this.Cardapio.Dia)}.mp4`;
    }
    console.log("Video", this.Video, this.Caminho, this.Cardapio.ImgSrc);
  }

  VerificarAtivo(){
    let Hoje = new Date();
    this.Ativo = false;
    if(parseInt(this.Cardapio.Dia) == Hoje.getDay() || this.DiaToNumber(this.Cardapio.Dia) == Hoje.getDay()){
      this.Ativo = true;
    }
    console.log(this.Ativo, this.Cardapio.Dia);
  }

  DiaToNumber(dia): number{
    switch(dia){
      case "Domingo":
        return 0;
      case "Segunda":
        return 1;
      case "Terça":
        return 2;
      case "Quarta":
        return 3;
      case "Quinta":
        return 4;
      case "Sexta":
        return 5;
      case "Sábado":
        return 6;
    }
  }

  ngOnInit(): void {
    this.VerificarTipoRecurso();
    this.VerificarAtivo();
  }

}
