export module Collections { 
    export class InformacoesContato {
        Telefone:string;
        Email:string;
        HorarioAtendimento:string;
        Whatsapp:string
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
    export class Sobre {
        Descricao:string;
        Nome:string;
        Servico:string;
        Historia:string;
        Slogan:string;
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
        Ingredientes:string;
        Tipo:string;
        Preco:string;
        constructor(
        Dia:string,
        Ingredientes:string,
        Tipo:string,
        Preco:string){
            this.Dia = Dia;
            this.Ingredientes = Ingredientes;
            this.Tipo = Tipo;
            this.Preco = Preco;
        }
    };
    export class Pedido {
        IdCliente:string;
        Cardapios:Cardapio[];
        Aberto:string;
        Preco:string;
        constructor(
        IdCliente:string,
        Cardapios:Cardapio[],
        Aberto:string,
        Preco:string){
            this.IdCliente = IdCliente;
            this.Cardapios = Cardapios;
            this.Aberto = Aberto;
            this.Preco = Preco;
        }
    };
    export class Empresa{
        InformacoesContato:InformacoesContato;
        Cardapios:Cardapio[];
        Clientes:Cliente[];
        Pedidos:Pedido[];
        Sobre:Sobre;
        Feedback:Feedback;
        constructor(InformacoesContato:InformacoesContato,
            Sobre:Sobre,
            Cardapios:Cardapio[],
            Clientes:Cliente[],
            Pedidos:Pedido[],
            Feedback:Feedback){
            this.InformacoesContato = InformacoesContato;
            this.Cardapios = Cardapios;
            this.Clientes = Clientes;
            this.Pedidos = Pedidos;
            this.Sobre = Sobre;
            this.Feedback = Feedback;
        };
    }
}