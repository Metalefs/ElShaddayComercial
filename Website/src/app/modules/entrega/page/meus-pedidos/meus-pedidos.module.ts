import { NgModule } from '@angular/core';

import { DetalhesPedidoComponent } from './components/detalhes-pedido/detalhes-pedido.component';
import { MeusPedidosComponent } from './components/meus-pedidos.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DetalhesPedidoComponent,
    MeusPedidosComponent
  ],
  imports: [SharedModule],
  exports: [],
  providers: []
})
export class MeusPedidosModule {}
