import { NgModule } from '@angular/core';

import { EditarCardapioComponent } from './page/editar/editar-cardapio/editar-cardapio.component';
import { EditarComplementoComponent } from './page/editar/editar-complemento/editar-complemento.component';
import { EditarInfoContatoComponent } from './page/editar/editar-infocontato/editar-infocontato.component';
import { EditarPrecoMarmitexComponent } from './page/editar/editar-preco-marmitex/editar-preco-marmitex.component';
import { EditarSobreComponent } from './page/editar/editar-sobre/editar-sobre.component';
import { EditarComponent } from './page/editar/editar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    EditarCardapioComponent,
    EditarComplementoComponent,
    EditarInfoContatoComponent,
    EditarPrecoMarmitexComponent,
    EditarSobreComponent,
    EditarComponent,
  ],
  imports: [SharedModule
    ],
  exports: [],
  providers: []
})
export class GerenciamentoModule {}
