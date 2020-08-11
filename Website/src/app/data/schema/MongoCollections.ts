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

    export class Avaliacao{
        Nota:number;
        static NomeID:string = "Avaliacao";
        constructor(Nota:number){
            this.Nota = Nota;
        }
    }

    export class Cliente extends MongoDocument {
        Nome :string;
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
            DataCriacao:Date,
            Tipo:number
        ){
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
        Estado:string;
        Preco:number;
        DataEnvio:Date;
        DataAtualizacao:Date;
        static NomeID:string = "Pedido";
        constructor(
        IdCliente:string,
        Cardapios:Cardapio[],
        Complementos:Complemento[],
        Observacao:string,
        Estado:string,
        Preco:number,
        DataEnvio:Date,
        DataAtualizacao:Date
        ){
            super();
            this.IdCliente = IdCliente;
            this.Cardapios = Cardapios;
            this.Complementos = Complementos;
            this.Estado = Estado;
            this.Observacao = Observacao;
            this.Preco = Preco;
            this.DataEnvio = DataEnvio;
        }

        AdicionarComplemento(Complemento: Complemento){
            this.Complementos.push(Complemento);
        }

        RemoverComplemento(Complemento: Complemento){
            for(var i = 0; i < this.Complementos.length; i++) {
                if(this.Complementos[i].Nome == Complemento.Nome) {
                    this.Complementos.pop();
                    break;
                }
            }
        }

        SelecionarCardapio(Cardapio: Cardapio){
            Cardapio.Preco = parseFloat(Cardapio.Preco.toString());
            this.Cardapios.push(Cardapio);
        }

        CalcularPreco(){
            this.Preco = 0;
            
            this.Complementos.forEach(complemento => {
                this.Preco += complemento.Preco;
            });
            this.Cardapios.forEach(cardapio => {
                this.Preco += cardapio.Preco;
            });

            return this.Preco;
        }

        CriarMensagemPedido(){
            let mensagem = 'Olá Elshadday, venho do site diskmarmitexelshadday.com.br, fiz esse pedido: ';
            mensagem += this.MensagemCardapio();
            mensagem += this.MensagemComplemento()
            return mensagem;
        }

        MensagemCardapio(){
            let Cardapios = '(' + this.Cardapios.length +')';
            this.Cardapios.forEach(cardapio => {
                Cardapios += `${cardapio.Nome}, `;
            });
            return Cardapios;
        }

        MensagemComplemento(){
            let Complementos = 'Sem complementos';
            if(this.Complementos.length > 1){
                Complementos = '(' + this.Complementos.length +')';
                this.Complementos.forEach(complemento => {
                    if(complemento.Preco > 0)
                        Complementos += `${complemento.Nome}, `;
                });
            }
            return Complementos;
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