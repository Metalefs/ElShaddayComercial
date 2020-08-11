import { NgModule } from '@angular/core';

import { MeusPedidosModule } from './page/meus-pedidos/meus-pedidos.module';
import { EntregaComponent } from './page/entrega.component';
import { EntregaRoutes } from './entrega.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    EntregaComponent
  ],
  imports: [
    SharedModule,
    MeusPedidosModule,
    EntregaRoutes
  ],
  exports: [],
  providers: []
})
export class EntregaModule {}
