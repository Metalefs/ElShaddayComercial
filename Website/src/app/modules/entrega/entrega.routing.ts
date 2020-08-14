import { Routes, RouterModule } from '@angular/router';
import { EntregaComponent } from './page/entrega.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'entrega',
    pathMatch: 'full'
  },
  {
    path: 'entrega',
    component: EntregaComponent
  },
];

export  const EntregaRoutes = RouterModule.forChild(routes);
