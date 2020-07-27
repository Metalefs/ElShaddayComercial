import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from './_helpers';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { EntregaComponent } from './pages/entrega/entrega.component';
import { HeroComponent } from './hero/hero.component';
import { ContatoComponent } from './contato/contato.component';
import { CardapioCardComponent } from './cardapio-card/cardapio-card.component';
import { EditarComponent } from './gerenciamento/editar/editar.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'entrega', component: EntregaComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'cardapio-card', component: CardapioCardComponent },
  { path: 'gerenciamento', component: EditarComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
