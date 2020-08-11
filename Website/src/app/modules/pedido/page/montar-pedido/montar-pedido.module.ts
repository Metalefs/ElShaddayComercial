import { NgModule } from '@angular/core';

import { ComplementosComponent } from './components/complementos/complementos.component';
import { ComplementoItemComponent } from './components/complementos/complemento-item/complemento-item.component';
import { MontarPedidoComponent } from './components/montar-pedido.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ComplementosComponent,
    ComplementoItemComponent,
    MontarPedidoComponent
  ],
  imports: [SharedModule],
  exports: [ComplementosComponent,
    ComplementoItemComponent,
    MontarPedidoComponent],
  providers: []
})
export class MontarPedidoModule {}
