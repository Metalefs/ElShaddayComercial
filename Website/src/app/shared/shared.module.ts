import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { CardapioCardComponent } from './component/cardapio-card/component/cardapio-card.component';
import { CardapioCardItemComponent } from './component/cardapio-card/component/cardapio-card-item/cardapio-card-item.component';
import { FactoryStepsComponent } from './component/factory-steps/component/factory-steps.component';
import { NavbariconComponent } from './component/factory-steps/component/navbaricon/navbaricon.component';
import { IconeWhatsappComponent } from './component/icone-whatsapp/icone-whatsapp.component';
import { ScrollTopComponent } from './component/scroll-top/scroll-top.component';
import { MaterialModule } from './material.module';

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
    FactoryStepsComponent,
    NavbariconComponent, IconeWhatsappComponent, ScrollTopComponent],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CardapioCardComponent,
    CardapioCardItemComponent,
    FactoryStepsComponent,
    NavbariconComponent, IconeWhatsappComponent, ScrollTopComponent, IconeWhatsappComponent, ScrollTopComponent
  ]
})
export class SharedModule {
  constructor() {
   
  }
}
