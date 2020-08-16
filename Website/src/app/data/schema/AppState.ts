export class AppState {
    Avaliacao:boolean;
    Cardapio:boolean;
    Cliente:boolean;
    Complemento:boolean;
    Feedback:boolean;
    InformacoesContato:boolean;
    Pedido:boolean;
    PrecoMarmitex:boolean;
    Sobre:boolean;
    constructor(
        Avaliacao:boolean,
        Cardapio:boolean,
        Cliente:boolean,
        Complemento:boolean,
        Feedback:boolean,
        InformacoesContato:boolean,
        Pedido:boolean,
        PrecoMarmitex:boolean,
        Sobre:boolean
    ){
        this.Avaliacao = Avaliacao;
        this.Cardapio = Cardapio;
        this.Cliente = Cliente;
        this.Complemento = Complemento;
        this.Feedback = Feedback;
        this.InformacoesContato = InformacoesContato;
        this.Pedido = Pedido;
        this.PrecoMarmitex = PrecoMarmitex;
        this.Sobre = Sobre;
    }
}