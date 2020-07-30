import {Collections} from './MongoCollections';
export module Seeder {
    
      export function SeedCollections (){ // FAZ SEEDING NO MONGODB DO AMBIENTE
            let InformacoesContato = 
            new Collections.InformacoesContato(
                  "(31) 99446-1428",
                  "diskmarmitex@elshadday.com",
                  "Segunda a Sábado, 8:00 ás 14:00h",
                  "5531994461428",
                  "diskmarmitexls"
            );

            let Sobre = 
            new Collections.Sobre(
                  "<em>Sem taxa de entrega</em> para o bairro Aeronautas, bairros vizinhos e centro.",
                  "El Shadday Marmitex",
                  "Disk Marmitex",
                  "",
                  "Uma deliciosa comida caseira."
            );

            let PrecoMarmitex = new Collections.PrecoMarmitex(10.00,12.00);

            let Cardapios:Collections.Cardapio[];
            Cardapios = [];
            Cardapios.push(new Collections.Cardapio("1","Carne de panela","Arroz, Feijao, Carne cozida com batata e salada","N","F"));
            Cardapios.push(new Collections.Cardapio("2","Bife de frango grelhado","Arroz, Feijao, Macarrão ao alho e óleo, Filé de frango a milanesa","N","F"));
            Cardapios.push(new Collections.Cardapio("3","Tropeiro","Arroz, Tropeiro com bife de porco, Couve e Torresmo","N","F"));
            Cardapios.push(new Collections.Cardapio("4","Frango com Quiabo","Arroz, Feijao, Frango com Quiabo e Angu","N","F"));
            Cardapios.push(new Collections.Cardapio("4","Bisteca com couve e angu","Arroz, Feijao, Bisteca com Couve e Angu","N","F"));
            Cardapios.push(new Collections.Cardapio("5","Feijoada","Arroz, Feijoada, Couve, Farofa, Laranja e Vinagrete","N","V"));
            Cardapios.push(new Collections.Cardapio("6","Tropeiro","Arroz, Tropeiro com bife de porco, Couve e Torresmo","N","F"));

            let Saladas_Complemento:Collections.Complemento[];
            Saladas_Complemento = [];
            Saladas_Complemento.push(new Collections.Complemento("Alface","S",1.00));
            Saladas_Complemento.push(new Collections.Complemento("Tomate","S",1.00));
            Saladas_Complemento.push(new Collections.Complemento("Cenoura","S",2.00));
            Saladas_Complemento.push(new Collections.Complemento("Vinagrete","S",2.00));
            Saladas_Complemento.push(new Collections.Complemento("Brócolis","S",2.00));
            Saladas_Complemento.push(new Collections.Complemento("Couve-flor","S",2.00));
            
            let Carnes_Complemento:Collections.Complemento[];
            Carnes_Complemento = [];
            Carnes_Complemento.push(new Collections.Complemento("Filé de frango","C",3.50));
            Carnes_Complemento.push(new Collections.Complemento("Bife de porco","C",3.50));
            Carnes_Complemento.push(new Collections.Complemento("Bife de boi","C",4.00));
 
            let Bebidas_Complemento:Collections.Complemento[];
            Bebidas_Complemento = [];
            Bebidas_Complemento.push(new Collections.Complemento("Guaraná 200ml","B",3.00));
            Bebidas_Complemento.push(new Collections.Complemento("Coca-Cola 200ml","B",3.00));

            let Outros_Complemento:Collections.Complemento[];
            Outros_Complemento = [];
            Outros_Complemento.push(new Collections.Complemento("Fritas","O",8.00));
            Outros_Complemento.push(new Collections.Complemento("Fritas com Filé de Frango","O", 10.00));

            let Complementos:Collections.Complemento[];
            Complementos = [];
            Complementos = Complementos.concat(Saladas_Complemento);
            Complementos = Complementos.concat(Carnes_Complemento);
            Complementos = Complementos.concat(Bebidas_Complemento);
            Complementos = Complementos.concat(Outros_Complemento);

            let Clientes:Collections.Cliente[];
            Clientes = [];
            Clientes.push(
                  new Collections.Cliente(
                        "Jackson Ramalho",
                        "jack-ten@hotmail.com",
                        "sd1245",
                        "987576467",
                        "Julio Verne",
                        "Aeronautas",
                        "185",
                        "Lagoa Santa",
                        "Minas Gerais",
                        new Date(),
                        1
                  )
            )

            let Pedidos:Collections.Pedido[];
            Pedidos = [];

            let Feedback = new Collections.Feedback(Clientes[0].Nome,Clientes[0].Email,Clientes[0],"Adorei","Entregue pontualmente todos os dias úteis, não preciso me preocupar com alimentação!");

            return [
                  {name:Collections.InformacoesContato.NomeID, value:InformacoesContato, Single:true},
                  {name:Collections.Sobre.NomeID, value:Sobre, Single:true},
                  {name:Collections.Cardapio.NomeID, value:Cardapios, Single:false},
                  {name:Collections.Complemento.NomeID, value:Complementos, Single:false},
                  {name:Collections.PrecoMarmitex.NomeID, value:PrecoMarmitex, Single:true}
            ];
      }
}