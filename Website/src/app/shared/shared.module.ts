import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { CardapioCardComponent } from './component/cardapio-card/component/cardapio-card.component';
import { CardapioCardItemComponent } from './component/cardapio-card/component/cardapio-card-item/cardapio-card-item.component';
import { IconeWhatsappComponent } from './component/icone-whatsapp/icone-whatsapp.component';
import { CountPedidoComponent } from './component/count-pedido/count-pedido.component';
import { MaterialModule } from './material.module';
import { AuthModule } from './component/auth/auth.module';
import { DynamicFormModule } from './component/dynamic-form/dynamic-form.module';

import { CountUpModule } from 'ngx-countup';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CountUpModule,
    RouterModule,
    ClarityModule,
    MaterialModule
  ],
  declarations: [
    CardapioCardComponent,
    CardapioCardItemComponent,
    IconeWhatsappComponent,
    CountPedidoComponent
  ],
  exports: [
    CommonModule,
    ClarityModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AuthModule,
    DynamicFormModule,
    CardapioCardComponent,
    CardapioCardItemComponent, 
    IconeWhatsappComponent,
    CountPedidoComponent
  ]
})
export class SharedModule {
  constructor() {
   
  }
}
