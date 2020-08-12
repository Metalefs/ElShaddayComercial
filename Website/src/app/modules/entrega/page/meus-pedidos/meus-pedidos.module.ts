import { NgModule } from '@angular/core';
import { DetalhesPedidoDialogComponent } from './components/detalhes-pedido/detalhes-pedido-dialog/detalhes-pedido-dialog.component';

import { DetalhesPedidoComponent } from './components/detalhes-pedido/detalhes-pedido.component';
import { MeusPedidosComponent } from './components/meus-pedidos.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DetalhesPedidoDialogComponent,
    DetalhesPedidoComponent,
    MeusPedidosComponent,
  ],
  imports: [SharedModule],
  exports: [DetalhesPedidoComponent,
    MeusPedidosComponent],
  providers: []
})
export class MeusPedidosModule {}
