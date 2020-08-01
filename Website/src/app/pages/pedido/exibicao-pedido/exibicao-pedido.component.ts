import { Component, OnInit, Input } from '@angular/core';
import { Collections } from '../../../shared/_models/MongoCollections';
import { fade } from '../../../animations';
import { PrecoMarmitexService } from '../../../api/services/PrecoMarmitexService';
import { InformacoesContatoService } from '../../../api/services/InformacoesContatoService';
import { PedidoService } from '../../../api/services/PedidoService';
import { AuthenticationService } from 'src/app/api/authentication/authentication.service';
@Component({
  selector: 'app-exibicao-pedido',
  templateUrl: './exibicao-pedido.component.html',
  styleUrls: ['./exibicao-pedido.component.css'],
  animations: [fade]
})
export class ExibicaoPedidoComponent implements OnInit {
  @Input()
  Pedido:Collections.Pedido;
  InformacoesContato:Collections.InformacoesContato;
  PrecoMarmitex:Collections.PrecoMarmitex[];
  Cliente:Collections.Cliente;
  constructor(private InformacoesContatoService: InformacoesContatoService,
    PrecoMarmitexService: PrecoMarmitexService,
    private PedidoService: PedidoService,
    private AuthenticationService: AuthenticationService
    ) {
      PrecoMarmitexService.Ler().subscribe(x=>this.PrecoMarmitex = x);
      InformacoesContatoService.Ler().subscribe(x=> this.InformacoesContato = x[0]);
      AuthenticationService.currentUser.subscribe(x=>this.Cliente = x);
  }

  CriarMensagemPedido(){    
    try{
      this.PedidoService.Incluir(this.Pedido).subscribe(x=>console.log(x));
    }
    catch(err){}
    let Endereco = '';
    if(this.Cliente)
      Endereco= `${this.Cliente.Rua}, ${this.Cliente.Numero}, Bairro ${this.Cliente.Bairro}`;
    window.open(`https://wa.me/${this.InformacoesContato.Whatsapp}?text=${this.Pedido.CriarMensagemPedido()}. Endereço:${Endereco}`, "_blank");
  }

  ngOnInit(): void {
  }

}
