import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from './core/interceptor';
import { NoAuthGuard } from './core/guard/no-auth.guard';
import { AppComponent } from './app.component';

import { ContentLayoutComponent } from 'src/app/layout/content-layout/content-layout.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { NavbarComponent } from 'src/app/layout/nav/navbar.component';

import { AuthModule } from 'src/app/modules/auth/auth.module';
import { LandingPageModule } from 'src/app/modules/landing/landing.module';
import { PedidoModule } from 'src/app/modules/pedido/pedido.module';
import { EntregaModule } from 'src/app/modules/entrega/entrega.module';
import { GerenciamentoModule } from 'src/app/modules/gerenciamento/gerenciamento.module';

import { CardapioCardComponent } from 'src/app/shared/component/cardapio-card/component/cardapio-card.component';

//import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { 
    path: '', component: ContentLayoutComponent,
    canActivate: [NoAuthGuard], 
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('src/app/modules/landing/landing.module').then(m => m.LandingPageModule)
      },
      {
        path: 'pedido',
        loadChildren: () =>
          import('src/app/modules/pedido/pedido.module').then(m => m.PedidoModule)
      },
      {
        path: 'entrega',
        loadChildren: () =>
          import('src/app/modules/entrega/entrega.module').then(m => m.EntregaModule)
      },
      { path: 'cardapio', component: CardapioCardComponent },
      { path: 'gerenciamento', component: GerenciamentoModule, canActivate: [AuthGuard] },
    ]
  },
  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
