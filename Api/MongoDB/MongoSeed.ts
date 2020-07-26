import {Collections} from './MongoCollections';
export module Seeder {
    
      export function SeedCollections (){ // FAZ SEEDING NO MONGODB DO AMBIENTE
            let InformacoesContato = 
            new Collections.InformacoesContato(
                  "(31) 99446-1428",
                  "diskmarmitex@elshadday.com",
                  "Segunda a Sábado, 8:00 ás 14:00h",
                  "5531994461428"
            );

            let Sobre = 
            new Collections.Sobre(
                  "<em>Sem taxa de entrega</em> para o bairro Aeronautas, bairros vizinhos e centro.",
                  "El Shadday Marmitex",
                  "Disk Marmitex",
                  "",
                  "Uma deliciosa comida caseira."
            );

            let PrecoMarmitex = new Collections.PrecoMarmitex("10,00","12,00");

            let Cardapios:Collections.Cardapio[];
            Cardapios = [];
            Cardapios.push(new Collections.Cardapio("1","Bife de frango grelhado","Arroz, Feijao, Carne cozida com batata e salada","N","F"));
            Cardapios.push(new Collections.Cardapio("2","Carne de panela","Arroz, Feijao, Macarrão ao alho e óleo, Filé de frango a milanesa","N","F"));
            Cardapios.push(new Collections.Cardapio("3","Tropeiro","Arroz, Tropeiro com bife de porco, Couve e Torresmo","N","V"));
            Cardapios.push(new Collections.Cardapio("4","Frango com Quiabo / Bisteca com couve e angu","Arroz, Feijao, Frango com Quiabo e Angu","N","F"));
            Cardapios.push(new Collections.Cardapio("5","Feijoada","Arroz, Feijoada, Couve, Farofa, Laranja e Vinagrete","N","V"));
            Cardapios.push(new Collections.Cardapio("6","Tropeiro","Arroz, Tropeiro com bife de porco, Couve e Torresmo","N","V"));

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
                  {name:"InformacoesContato",value:InformacoesContato,Single:true},
                  {name:"Sobre",value:Sobre,Single:true},
                  {name:"Cardapios",value:Cardapios,Single:false},
                  {name:"PrecoMarmitex",value:PrecoMarmitex,Single:true}
            ];
      }
}