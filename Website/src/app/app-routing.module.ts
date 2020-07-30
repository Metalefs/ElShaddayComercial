import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from './_helpers';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { EntregaComponent } from './pages/entrega/entrega.component';
import { HeroComponent } from './hero/hero.component';
import { EditarComponent } from './gerenciamento/editar/editar.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'hero', component: HeroComponent, data: { animation: 'isLeft' } },
  { path: 'entrega', component: EntregaComponent },
  { path: 'pedido', component: PedidoComponent, data: { animation: 'isRight' } },
  { path: 'gerenciamento', component: EditarComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
