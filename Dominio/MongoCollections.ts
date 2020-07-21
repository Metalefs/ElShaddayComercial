export module Collections { 
    export class InformacoesContato {
        Telefone:string;
        Email:string;
        HorarioAtendimento:string;
        Whatsapp:string
        static NomeID:string = "InformacoesContato";
        constructor(
            Telefone:string,
            Email:string,
            HorarioAtendimento:string,
            Whatsapp:string){
                this.Telefone = Telefone;
                this.Email = Email;
                this.HorarioAtendimento = HorarioAtendimento;
                this.Whatsapp = Whatsapp;
        }
    };
    export class PrecoMarmitex {
        Pequena:string;
        Grande:string;
        constructor(
            Pequena:string,
            Grande:string,
        ){
            this.Pequena = Pequena;
            this.Grande = Grande;
        }
    }
    export class Sobre {
        Descricao:string;
        Nome:string;
        Servico:string;
        Historia:string;
        Slogan:string;
        static NomeID:string = "Sobre";
        constructor(
        Descricao:string,
        Nome:string,
        Servico:string,
        Historia:string,
        Slogan:string){
            this.Descricao = Descricao;
            this.Nome = Nome;
            this.Servico = Servico;
            this.Slogan = Slogan;
            this.Historia = Historia;
        }
    };
    export class Feedback {
        Nome:string;
        Email:string;
        Cliente:Cliente;
        Titulo:string;
        Comentario:string;
        static NomeID:string = "Feedback";
        constructor(
        Nome:string,
        Email:string,
        Cliente:Cliente,
        Titulo:string,
        Comentario:string){
            this.Nome = Nome;
            this.Email = Email;
            this.Cliente = Cliente;
            this.Titulo = Titulo;
            this.Comentario = Comentario;
        }
        
    };
    export class Cliente {
        Nome:string;
        Email:string;
        Telefone:string;
        Rua:string;
        Bairro:string;
        Numero:string;
        Cidade:string;
        Estado:string;
        CPF:string;
        static NomeID:string = "Cliente";
        constructor(
        Nome:string,
        Email:string,
        Telefone:string,
        Rua:string,
        Bairro:string,
        Numero:string,
        Cidade:string,
        Estado:string,
        CPF:string){
            this.Nome = Nome;
            this.Email = Email;
            this.Telefone = Telefone;
            this.Rua = Rua;
            this.Bairro = Bairro;
            this.Numero = Numero;
            this.Cidade = Cidade;
            this.Estado = Estado;
            this.CPF = CPF;
        }
    };
    export class Cardapio {
        Dia:string;
        Nome:string;
        Ingredientes:string;
        Tipo:string;
        static NomeID:string = "Cardapios";
        constructor(
        Dia:string,
        Nome:string,
        Ingredientes:string,
        Tipo:string){
            this.Dia = Dia;
            this.Nome = Nome;
            this.Ingredientes = Ingredientes;
            this.Tipo = Tipo;
        }
    };

    export class Complemento{
        Nome:string;
        Tipo:string;
        Preco:number;
    }

    export class Pedido {
        IdCliente:string;
        Cardapios:Cardapio[];
        Observacao:string;
        Aberto:string;
        Preco:string;
        static NomeID:string = "Pedido";
        constructor(
        IdCliente:string,
        Cardapios:Cardapio[],
        Observacao:string,
        Aberto:string,
        Preco:string){
            this.IdCliente = IdCliente;
            this.Cardapios = Cardapios;
            this.Aberto = Aberto;
            this.Observacao = Observacao;
            this.Preco = Preco;
        }
    };
}