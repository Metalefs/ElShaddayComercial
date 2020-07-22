import {Collections} from './MongoCollections';
export module Seeder {
    
      export function SeedCollections (){ // FAZ SEEDING NO MONGODB DO AMBIENTE
            let InformacoesContato = new Collections.InformacoesContato
            ("994461428",
            "diskmarmitex@elshadday.com",
            "Segunda a Sábado, 9:00 ás 14:00h",
            "5531994461428");
            let Sobre = new Collections.Sobre("Atendemos ao Aeronautas, bairros vizinhos e centro de Lagoa Santa <em>sem taxa de entrega.</em>",
            "El Shadday Marmitex",
            "Disk Marmitex",
            "",
            "Deliciosa comida caseira.");

            let PrecoMarmitex = new Collections.PrecoMarmitex("10,00","12,00");

            let Cardapios:Collections.Cardapio[];
            Cardapios = [];
            Cardapios.push(new Collections.Cardapio("1","Bife de frango grelhado","Arroz, Feijao, Macarrão ao alho e olho, Batata frita e Bife de frango grelhado","N"));
            Cardapios.push(new Collections.Cardapio("2","Carne de panela","Arroz, Feijao, Carne de boi e legumes","N"));
            Cardapios.push(new Collections.Cardapio("3","Tropeiro","Arroz, Tropeiro com bife de porco, Couve e Torresmo","N"));
            Cardapios.push(new Collections.Cardapio("4","Frango com Quiabo","Arroz, Feijao, Frango com Quiabo e Angu","N"));
            Cardapios.push(new Collections.Cardapio("5","Feijoada","Arroz, Feijoada, Couve, Farofa, Laranja e Vinagrete","N"));
            Cardapios.push(new Collections.Cardapio("6","Tropeiro","Arroz, Tropeiro com bife de porco, Couve e Torresmo","N"));

            let Clientes:Collections.Cliente[];
            Clientes = [];
            Clientes.push(new Collections.Cliente("Jackson Ramalho",
            "jack-ten@hotmail.com",
            "987576467",
            "Julio Verne",
            "Aeronautas",
            "185",
            "Lagoa Santa",
            "Minas Gerais",
            "125.123.586-74")
            )

            let Pedidos:Collections.Pedido[];
            Pedidos = [];

            let Feedback = new Collections.Feedback(Clientes[0].Nome,Clientes[0].Email,Clientes[0],"Adorei","Entregue pontualmente todos os dias úteis, não preciso me preocupar com alimentação!");

            return [{name:"InformacoesContato",value:InformacoesContato,Single:true},
                   {name:"Sobre",value:Sobre,Single:true},
                   {name:"Cardapios",value:Cardapios,Single:false},
                   {name:"Clientes",value:Clientes,Single:false},
                   {name:"Pedidos",value:Pedidos,Single:false},
                   {name:"Feedback",value:Feedback,Single:false},
                   {name:"PrecoMarmitex",value:PrecoMarmitex,Single:true}
                  ];
      }
}