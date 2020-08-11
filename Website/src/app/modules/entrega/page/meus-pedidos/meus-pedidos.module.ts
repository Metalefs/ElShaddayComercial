import { NgModule } from '@angular/core';

import { DetalhesPedidoComponent } from './components/detalhes-pedido/detalhes-pedido.component';
import { MeusPedidosComponent } from './components/meus-pedidos.component';

@NgModule({
  declarations: [
    DetalhesPedidoComponent,
    MeusPedidosComponent
  ],
  imports: [],
  exports: [],
  providers: []
})
export class MeusPedidosModule {}
