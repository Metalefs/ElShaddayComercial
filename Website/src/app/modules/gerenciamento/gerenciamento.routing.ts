import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './page/editar/editar.component';

export const routes: Routes = [
  {
    path: '',
    component: EditarComponent,
    pathMatch: 'full'
  }
];

export const GerenciamentoPageRoutes = RouterModule.forChild(routes);
