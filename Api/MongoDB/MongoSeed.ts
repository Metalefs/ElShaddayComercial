import {Collections} from './MongoCollections';
export = {
    
      SeedCollections: function (){ // FAZ SEEDING NO MONGODB DO AMBIENTE
            let InformacoesContato = new Collections.InformacoesContato
            ("991823760",
            "simonejessicamarmitex@gmail.com",
            "Segunda a Sábado, 9:00 ás 14:00h",
            "5531991823760");
            let Sobre = new Collections.Sobre("Atendemos aos bairros vizinhos e centro de Lagoa Santa sem taxa de entrega.",
            "El Shadday Marmitex",
            "Disk Marmitex",
            "",
            "Deliciosa comida caseira.");
            let Cardapios:Collections.Cardapio[];
            Cardapios = [];
            Cardapios.push(new Collections.Cardapio("1","","",""));
            Cardapios.push(new Collections.Cardapio("2","","",""));
            Cardapios.push(new Collections.Cardapio("3","","",""));
            Cardapios.push(new Collections.Cardapio("4","","",""));
            Cardapios.push(new Collections.Cardapio("5","","",""));
            Cardapios.push(new Collections.Cardapio("6","","",""));

            let Clientes:Collections.Cliente[];
            Cardapios = [];

            let Pedidos:Collections.Pedido[];
            let Feedback:Collections.Feedback;
            let Empresa = new Collections.Empresa(InformacoesContato,Sobre,Cardapios,Clientes,Pedidos,Feedback);
            
            return [Empresa];
      },  
}