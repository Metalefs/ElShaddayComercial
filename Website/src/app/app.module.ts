import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbariconComponent } from './shared/factory-steps/navbaricon/navbaricon.component';
import { ContatoComponent } from './contato/contato.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CardapioCardComponent } from './cardapio/cardapio-card/cardapio-card.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { HeroComponent } from './hero/hero.component';
import { ClarityModule } from '@clr/angular';
import { FactoryStepsComponent } from './shared/factory-steps/factory-steps.component';
import { IconeWhatsappComponent } from './icone-whatsapp/icone-whatsapp.component';
import { ZippyComponent } from './shared/zippy/zippy.component';
import { EditarComponent } from './gerenciamento/editar/editar.component';
import { EditarSobreComponent } from './gerenciamento/editar/editar-sobre/editar-sobre.component';
import { EditarInfocontatoComponent } from './gerenciamento/editar/editar-infocontato/editar-infocontato.component';
import { EditarCardapioComponent } from './gerenciamento/editar/editar-cardapio/editar-cardapio.component';
import { EditarComplementoComponent } from './gerenciamento/editar/editar-complemento/editar-complemento.component';
import { EditarPrecoMarmitexComponent } from './gerenciamento/editar/editar-preco-marmitex/editar-preco-marmitex.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { EntregaComponent } from './pages/entrega/entrega.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbariconComponent,
    ContatoComponent,
    PageNotFoundComponent,
    MainPageComponent,
    CardapioComponent,
    CardapioCardComponent,
    RegistroClienteComponent,
    HeroComponent,
    FactoryStepsComponent,
    IconeWhatsappComponent,
    ZippyComponent,
    EditarComponent,
    EditarSobreComponent,
    EditarInfocontatoComponent,
    EditarCardapioComponent,
    EditarComplementoComponent,
    EditarPrecoMarmitexComponent,
    PedidoComponent,
    EntregaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClarityModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
