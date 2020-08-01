class MongoDocument{
    _id!: string;
}

export module Collections { 
    export class InformacoesContato extends MongoDocument {
        Telefone:string;
        Email:string;
        HorarioAtendimento:string;
        Whatsapp:string;
        Instagram:string;
        static NomeID:string = "InformacoesContato";
        constructor(
            Telefone:string,
            Email:string,
            HorarioAtendimento:string,
            Whatsapp:string,
            Instagram:string){
            super();
                this.Telefone = Telefone;
                this.Email = Email;
                this.HorarioAtendimento = HorarioAtendimento;
                this.Whatsapp = Whatsapp;
                this.Instagram = Instagram;
        }
    };

    export class PrecoMarmitex extends MongoDocument {
        Pequena:number;
        Grande:number;
        static NomeID:string = "PrecoMarmitex";
        constructor(
            Pequena:number,
            Grande:number,
        ){
            super();
            this.Pequena = Pequena;
            this.Grande = Grande;
        }
    };

    export class Sobre extends MongoDocument {
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
            super();
            this.Descricao = Descricao;
            this.Nome = Nome;
            this.Servico = Servico;
            this.Slogan = Slogan;
            this.Historia = Historia;
        }
    };

    export class Feedback extends MongoDocument {
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
            super();
            this.Nome = Nome;
            this.Email = Email;
            this.Cliente = Cliente;
            this.Titulo = Titulo;
            this.Comentario = Comentario;
        }
        
    };

    export class Cliente extends MongoDocument {
        Nome:string;
        Email:string;
        Senha:string;
        Telefone:string;
        Rua:string;
        Bairro:string;
        Numero:string;
        Cidade:string;
        Estado:string;
        DataCriacao:Date;
        Tipo:number;
        token?: string;
        static NomeID:string = "Cliente";
        constructor(
        Nome:string,
        Email:string,
        Senha:string,
        Telefone:string,
        Rua:string,
        Bairro:string,
        Numero:string,
        Cidade:string,
        Estado:string,
        DataCriacao:Date,Tipo:number){
            super();
            this.Nome = Nome;
            this.Email = Email;
            this.Senha = Senha;
            this.Telefone = Telefone;
            this.Rua = Rua;
            this.Bairro = Bairro;
            this.Numero = Numero;
            this.Cidade = Cidade;
            this.Estado = Estado;
            this.DataCriacao = DataCriacao;
            this.Tipo = Tipo;
        }
    };

    export class Cardapio extends MongoDocument {
        Dia:string;
        Nome:string;
        Ingredientes:string;
        Tipo:string;
        ImgSrc:string;
        Preco?:number;
        Tamanho?:string;
        static NomeID:string = "Cardapios";
        constructor(
        Dia:string,
        Nome:string,
        Ingredientes:string,
        Tipo:string,
        ImgSrc:string,
        Preco?:number,
        Tamanho?:string){
            super();
            this.Dia = Dia;
            this.Nome = Nome;
            this.Ingredientes = Ingredientes;
            this.Tipo = Tipo;
            this.ImgSrc = ImgSrc;
            this.Preco = Preco;
            this.Tamanho = Tamanho;
        }
    };

    export class Complemento extends MongoDocument{
        Nome:string;
        Tipo:string;
        Preco:number;
        static NomeID:string = "Complemento";
        constructor(Nome:string,
            Tipo:string,
            Preco:number){
            super();
                this.Nome=Nome;
                this.Tipo=Tipo;
                this.Preco=Preco;
            }
    }

    export class Pedido extends MongoDocument {
        IdCliente:string;
        Cardapios:Cardapio[];
        Complementos:Complemento[];
        Observacao:string;
        Aberto:boolean;
        Preco:number;
        DataEnvio:Date;
        static NomeID:string = "Pedido";
        constructor(
        IdCliente:string,
        Cardapios:Cardapio[],
        Complementos:Complemento[],
        Observacao:string,
        Aberto:boolean,
        Preco:number,
        DataEnvio:Date){
            super();
            this.IdCliente = IdCliente;
            this.Cardapios = Cardapios;
            this.Complementos = Complementos;
            this.Aberto = Aberto;
            this.Observacao = Observacao;
            this.Preco = Preco;
            this.DataEnvio = DataEnvio;
        }
        
    };

    // export class Sessoes extends MongoDocument {
    //     jwt:string;
    //     idCliente:string;
    //     static NomeID:string = "Sessoes";
    //     constructor(
    //     jwt:string,
    //     idCliente:string){
    //         super();
    //         this.idCliente = idCliente;
    //         this.jwt = jwt;
    //     }
    // };
}