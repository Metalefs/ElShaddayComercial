import { NgModule } from '@angular/core';

import { CardapioListaItemComponent } from './components/cardapio-lista-item/cardapio-lista-item.component';
import { CardapioListaAgrupadaComponent } from './components/cardapio-lista-agrupada.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CardapioListaItemComponent,
    CardapioListaAgrupadaComponent,
  ],
  imports: [SharedModule],
  exports: [CardapioListaItemComponent,
    CardapioListaAgrupadaComponent],
  providers: []
})
export class CardapioListaAgrupadaModule {}
