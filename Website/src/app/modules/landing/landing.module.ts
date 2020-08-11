import { NgModule } from '@angular/core';

import { EstrelasComponent } from './page/avaliacoes/estrelas/estrelas.component';
import { FeedbackComponent } from './page/avaliacoes/feedback/feedback.component';
import { ContatoComponent } from './page/contato/contato.component';
import { HeroComponent } from './page/hero/hero.component';
import { LocalizacaoComponent } from './page/localizacao/localizacao.component';
import { LandingPageComponent } from './page/landing-page.component';
import { LandingPageRoutes } from './landing.routing';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    EstrelasComponent,
    FeedbackComponent,
    ContatoComponent,
    HeroComponent,
    LocalizacaoComponent,
    LandingPageComponent
  ],
  imports: [
    SharedModule,
    LandingPageRoutes
  ],
  exports: [],
  providers: []
})
export class LandingPageModule {}
