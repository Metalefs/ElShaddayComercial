"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collections = void 0;
var MongoDocument = /** @class */ (function () {
    function MongoDocument() {
    }
    return MongoDocument;
}());
var Collections;
(function (Collections) {
    var InformacoesContato = /** @class */ (function (_super) {
        __extends(InformacoesContato, _super);
        function InformacoesContato(Telefone, Email, HorarioAtendimento, Whatsapp, Instagram) {
            var _this = _super.call(this) || this;
            _this.Telefone = Telefone;
            _this.Email = Email;
            _this.HorarioAtendimento = HorarioAtendimento;
            _this.Whatsapp = Whatsapp;
            _this.Instagram = Instagram;
            return _this;
        }
        InformacoesContato.NomeID = "InformacoesContato";
        return InformacoesContato;
    }(MongoDocument));
    Collections.InformacoesContato = InformacoesContato;
    ;
    var PrecoMarmitex = /** @class */ (function (_super) {
        __extends(PrecoMarmitex, _super);
        function PrecoMarmitex(Pequena, Grande) {
            var _this = _super.call(this) || this;
            _this.Pequena = Pequena;
            _this.Grande = Grande;
            return _this;
        }
        PrecoMarmitex.NomeID = "PrecoMarmitex";
        return PrecoMarmitex;
    }(MongoDocument));
    Collections.PrecoMarmitex = PrecoMarmitex;
    ;
    var Sobre = /** @class */ (function (_super) {
        __extends(Sobre, _super);
        function Sobre(Descricao, Nome, Servico, Historia, Slogan) {
            var _this = _super.call(this) || this;
            _this.Descricao = Descricao;
            _this.Nome = Nome;
            _this.Servico = Servico;
            _this.Slogan = Slogan;
            _this.Historia = Historia;
            return _this;
        }
        Sobre.NomeID = "Sobre";
        return Sobre;
    }(MongoDocument));
    Collections.Sobre = Sobre;
    ;
    var Feedback = /** @class */ (function (_super) {
        __extends(Feedback, _super);
        function Feedback(Nome, Email, Cliente, Titulo, Comentario) {
            var _this = _super.call(this) || this;
            _this.Nome = Nome;
            _this.Email = Email;
            _this.Cliente = Cliente;
            _this.Titulo = Titulo;
            _this.Comentario = Comentario;
            return _this;
        }
        Feedback.NomeID = "Feedback";
        return Feedback;
    }(MongoDocument));
    Collections.Feedback = Feedback;
    ;
    var Avaliacao = /** @class */ (function () {
        function Avaliacao(Nota) {
            this.Nota = Nota;
        }
        Avaliacao.NomeID = "Avaliacao";
        return Avaliacao;
    }());
    Collections.Avaliacao = Avaliacao;
    var Cliente = /** @class */ (function (_super) {
        __extends(Cliente, _super);
        function Cliente(Nome, Email, Senha, Telefone, Rua, Bairro, Numero, Cidade, Estado, DataCriacao, Tipo) {
            var _this = _super.call(this) || this;
            _this.Nome = Nome;
            _this.Email = Email;
            _this.Senha = Senha;
            _this.Telefone = Telefone;
            _this.Rua = Rua;
            _this.Bairro = Bairro;
            _this.Numero = Numero;
            _this.Cidade = Cidade;
            _this.Estado = Estado;
            _this.DataCriacao = DataCriacao;
            _this.Tipo = Tipo;
            return _this;
        }
        Cliente.NomeID = "Cliente";
        return Cliente;
    }(MongoDocument));
    Collections.Cliente = Cliente;
    ;
    var Cardapio = /** @class */ (function (_super) {
        __extends(Cardapio, _super);
        function Cardapio(Dia, Nome, Ingredientes, Tipo, Src, SrcType, Preco, Tamanho) {
            var _this = _super.call(this) || this;
            _this.Dia = Dia;
            _this.Nome = Nome;
            _this.Ingredientes = Ingredientes;
            _this.Tipo = Tipo;
            _this.Src = Src;
            _this.SrcType = SrcType;
            _this.Preco = Preco;
            _this.Tamanho = Tamanho;
            return _this;
        }
        Cardapio.NomeID = "Cardapios";
        return Cardapio;
    }(MongoDocument));
    Collections.Cardapio = Cardapio;
    ;
    var Complemento = /** @class */ (function (_super) {
        __extends(Complemento, _super);
        function Complemento(Nome, Tipo, Preco) {
            var _this = _super.call(this) || this;
            _this.Nome = Nome;
            _this.Tipo = Tipo;
            _this.Preco = Preco;
            return _this;
        }
        Complemento.NomeID = "Complemento";
        return Complemento;
    }(MongoDocument));
    Collections.Complemento = Complemento;
    var Pedido = /** @class */ (function (_super) {
        __extends(Pedido, _super);
        function Pedido(IdCliente, Cardapios, Complementos, Observacao, Estado, Preco, DataEnvio, DataAtualizacao) {
            var _this = _super.call(this) || this;
            _this.IdCliente = IdCliente;
            _this.Cardapios = Cardapios;
            _this.Complementos = Complementos;
            _this.Estado = Estado;
            _this.Observacao = Observacao;
            _this.Preco = Preco;
            _this.DataEnvio = DataEnvio;
            _this.DataAtualizacao = DataAtualizacao;
            return _this;
        }
        Pedido.NomeID = "Pedido";
        return Pedido;
    }(MongoDocument));
    Collections.Pedido = Pedido;
    ;
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
})(Collections = exports.Collections || (exports.Collections = {}));
