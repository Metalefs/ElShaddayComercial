"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seeder = void 0;
var MongoCollections_1 = require("./MongoCollections");
var Seeder;
(function (Seeder) {
    function SeedCollections() {
        var InformacoesContato = new MongoCollections_1.Collections.InformacoesContato("(31) 99446-1428", "diskmarmitex@elshadday.com", "Segunda a Sábado, 8:00 ás 14:00h", "5531994461428");
        var Sobre = new MongoCollections_1.Collections.Sobre("<em>Sem taxa de entrega</em> para o bairro Aeronautas, bairros vizinhos e centro.", "El Shadday Marmitex", "Disk Marmitex", "", "Uma deliciosa comida caseira.");
        var PrecoMarmitex = new MongoCollections_1.Collections.PrecoMarmitex("10,00", "12,00");
        var Cardapios;
        Cardapios = [];
        Cardapios.push(new MongoCollections_1.Collections.Cardapio("1", "Bife de frango grelhado", "Arroz, Feijao, Carne cozida com batata e salada", "N", "F"));
        Cardapios.push(new MongoCollections_1.Collections.Cardapio("2", "Carne de panela", "Arroz, Feijao, Macarrão ao alho e óleo, Filé de frango a milanesa", "N", "F"));
        Cardapios.push(new MongoCollections_1.Collections.Cardapio("3", "Tropeiro", "Arroz, Tropeiro com bife de porco, Couve e Torresmo", "N", "V"));
        Cardapios.push(new MongoCollections_1.Collections.Cardapio("4", "Frango com Quiabo / Bisteca com couve e angu", "Arroz, Feijao, Frango com Quiabo e Angu", "N", "F"));
        Cardapios.push(new MongoCollections_1.Collections.Cardapio("5", "Feijoada", "Arroz, Feijoada, Couve, Farofa, Laranja e Vinagrete", "N", "V"));
        Cardapios.push(new MongoCollections_1.Collections.Cardapio("6", "Tropeiro", "Arroz, Tropeiro com bife de porco, Couve e Torresmo", "N", "F"));
        var Saladas_Complemento;
        Saladas_Complemento = [];
        Saladas_Complemento.push(new MongoCollections_1.Collections.Complemento("Alface", "S", 2.00));
        Saladas_Complemento.push(new MongoCollections_1.Collections.Complemento("Tomate", "S", 2.00));
        Saladas_Complemento.push(new MongoCollections_1.Collections.Complemento("Cenoura", "S", 2.00));
        Saladas_Complemento.push(new MongoCollections_1.Collections.Complemento("Vinagrete", "S", 2.00));
        Saladas_Complemento.push(new MongoCollections_1.Collections.Complemento("Brócolis", "S", 2.00));
        Saladas_Complemento.push(new MongoCollections_1.Collections.Complemento("Couve-flor", "S", 2.00));
        var Carnes_Complemento;
        Carnes_Complemento = [];
        Carnes_Complemento.push(new MongoCollections_1.Collections.Complemento("Filé de frango", "C", 3.50));
        Carnes_Complemento.push(new MongoCollections_1.Collections.Complemento("Bife de porco", "C", 3.50));
        Carnes_Complemento.push(new MongoCollections_1.Collections.Complemento("Bife de boi", "C", 4.00));
        var Bebidas_Complemento;
        Bebidas_Complemento = [];
        Bebidas_Complemento.push(new MongoCollections_1.Collections.Complemento("Guaraná 200ml", "B", 3.00));
        Bebidas_Complemento.push(new MongoCollections_1.Collections.Complemento("Coca-Cola 200ml", "B", 3.00));
        var Outros_Complemento;
        Outros_Complemento = [];
        Outros_Complemento.push(new MongoCollections_1.Collections.Complemento("Fritas", "O", 8.00));
        Outros_Complemento.push(new MongoCollections_1.Collections.Complemento("Fritas com Filé de Frango", "O", 10.00));
        var Complementos;
        Complementos = [];
        Complementos = Complementos.concat(Saladas_Complemento);
        Complementos = Complementos.concat(Carnes_Complemento);
        Complementos = Complementos.concat(Bebidas_Complemento);
        Complementos = Complementos.concat(Outros_Complemento);
        var Clientes;
        Clientes = [];
        Clientes.push(new MongoCollections_1.Collections.Cliente("Jackson Ramalho", "jack-ten@hotmail.com", "sd1245", "987576467", "Julio Verne", "Aeronautas", "185", "Lagoa Santa", "Minas Gerais", new Date(), 1));
        var Pedidos;
        Pedidos = [];
        var Feedback = new MongoCollections_1.Collections.Feedback(Clientes[0].Nome, Clientes[0].Email, Clientes[0], "Adorei", "Entregue pontualmente todos os dias úteis, não preciso me preocupar com alimentação!");
        return [
            { name: MongoCollections_1.Collections.InformacoesContato.NomeID, value: InformacoesContato, Single: true },
            { name: MongoCollections_1.Collections.Sobre.NomeID, value: Sobre, Single: true },
            { name: MongoCollections_1.Collections.Cardapio.NomeID, value: Cardapios, Single: false },
            { name: MongoCollections_1.Collections.Complemento.NomeID, value: Complementos, Single: false },
            { name: MongoCollections_1.Collections.PrecoMarmitex.NomeID, value: PrecoMarmitex, Single: true }
        ];
    }
    Seeder.SeedCollections = SeedCollections;
})(Seeder = exports.Seeder || (exports.Seeder = {}));
