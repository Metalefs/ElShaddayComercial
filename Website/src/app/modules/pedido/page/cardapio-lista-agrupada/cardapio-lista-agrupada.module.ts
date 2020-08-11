import { NgModule } from '@angular/core';

import { CardapioListaItemComponent } from './components/cardapio-lista-item/cardapio-lista-item.component';
import { CardapioListaAgrupadaComponent } from './components/cardapio-lista-agrupada.component';

@NgModule({
  declarations: [
    CardapioListaItemComponent,
    CardapioListaAgrupadaComponent,
  ],
  imports: [],
  exports: [CardapioListaItemComponent,
    CardapioListaAgrupadaComponent],
  providers: []
})
export class CardapioListaAgrupadaModule {}
