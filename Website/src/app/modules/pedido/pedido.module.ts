import { NgModule } from '@angular/core';

import { CardapioListaAgrupadaModule } from './page/cardapio-lista-agrupada/cardapio-lista-agrupada.module';
import { ExibicaoPedidoComponent } from './page/exibicao-pedido/exibicao-pedido.component';
import { MontarPedidoModule } from './page/montar-pedido/montar-pedido.module';
import { PedidoComponent } from './page/pedido.component';
import { PedidoRoutes } from './pedido.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ExibicaoPedidoComponent,
    PedidoComponent
  ],
  imports: [SharedModule,PedidoRoutes,CardapioListaAgrupadaModule,MontarPedidoModule],
  exports: [],
  providers: []
})
export class PedidoModule {}
