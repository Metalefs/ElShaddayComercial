import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeroComponent } from './hero/hero.component';
import { ContatoComponent } from './contato/contato.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'cardapio', component: CardapioComponent },
  // { path: '',
  //   redirectTo: '/main',
  //   pathMatch: 'full'
  // },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
