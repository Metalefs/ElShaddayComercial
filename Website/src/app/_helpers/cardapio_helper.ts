import { Collections } from '../shared/_models/MongoCollections';

  export class CardapioHelper {
    
    constructor(){};

    ObertCaminhoRecurso(Cardapio: Collections.Cardapio){
        let Caminho = "";
        let Video = true;
        if(Cardapio.ImgSrc === "F"){
            Caminho = `/assets/imagens/cardapio/${Cardapio.Nome.trim()}.jpeg`;
            Video = false;
        }
        else{
            Caminho = `/assets/imagens/cardapio/${Cardapio.Nome.trim()}.mp4`;
        }
        return Caminho;
    }

    VerificarAtivo(Cardapio){
        let Hoje = new Date();
        let Ativo = false;
        if(parseInt(Cardapio.Dia) == Hoje.getDay() || this.DiaToNumber(Cardapio.Dia) == Hoje.getDay()){
            Ativo = true;
        }
        return Ativo;
    }

    ObterDiaSemana(dia):string{
        switch(dia){
        case "0":
            return "Domingo";
        case "1":
            return "Segunda";
        case "2":
            return "Terça";
        case "3":
            return "Quarta";
        case "4":
            return "Quinta";
        case "5":
            return "Sexta";
        case "6":
            return "Sábado";
        }
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

  }