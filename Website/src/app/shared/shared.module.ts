import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { CardapioCardComponent } from './component/cardapio-card/component/cardapio-card.component';
import { CardapioCardItemComponent } from './component/cardapio-card/component/cardapio-card-item/cardapio-card-item.component';
import { IconeWhatsappComponent } from './component/icone-whatsapp/icone-whatsapp.component';
import { MaterialModule } from './material.module';
import { AuthModule } from './component/auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ClarityModule
  ],
  declarations: [
    CardapioCardComponent,
    CardapioCardItemComponent,
    IconeWhatsappComponent
  ],
  exports: [
    CommonModule,
    ClarityModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AuthModule,
    CardapioCardComponent,
    CardapioCardItemComponent, 
    IconeWhatsappComponent,
  ]
})
export class SharedModule {
  constructor() {
   
  }
}
