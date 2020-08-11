import { Routes, RouterModule } from '@angular/router';
import { PedidoComponent } from './page/pedido.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pedido',
    pathMatch: 'full'
  },
  {
    path: 'pedido',
    component: PedidoComponent
  },
];

export const PedidoRoutes = RouterModule.forChild(routes);
