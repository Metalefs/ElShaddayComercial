import { Routes, RouterModule } from '@angular/router';
import { PratosComponent } from './page/pratos.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pratos',
    pathMatch: 'full'
  },
  {
    path: 'pratos',
    component: PratosComponent
  },
];

export const PratosRoutes = RouterModule.forChild(routes);
