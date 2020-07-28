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
import { CardapioCardComponent } from './cardapio-card/cardapio-card.component';
import { CardapioCardItemComponent } from './cardapio-card/cardapio-card-item/cardapio-card-item.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { HeroComponent } from './hero/hero.component';
import { ClarityModule } from '@clr/angular';
import { CountUpModule } from 'ngx-countup';
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
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { AvaliacoesComponent } from './avaliacoes/avaliacoes.component';
import { MontarPedidoComponent } from './pages/pedido/montar-pedido/montar-pedido.component';
import { CardapioListaAgrupadaComponent } from './pages/pedido/cardapio-lista-agrupada/cardapio-lista-agrupada.component';
import { ComplementosComponent } from './pages/pedido/montar-pedido/complementos/complementos.component';
import { CardapioListaItemComponent } from './pages/pedido/cardapio-lista-agrupada/cardapio-lista-item/cardapio-lista-item.component';
import { CardapioHelper } from './_helpers/cardapio_helper';
import { ComplementoItemComponent } from './pages/pedido/montar-pedido/complementos/complemento-item/complemento-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbariconComponent,
    ContatoComponent,
    PageNotFoundComponent,
    MainPageComponent,
    CardapioCardComponent,
    CardapioCardItemComponent,
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
    LocalizacaoComponent,
    AvaliacoesComponent,
    MontarPedidoComponent,
    CardapioListaAgrupadaComponent,
    ComplementosComponent,
    CardapioListaItemComponent,
    ComplementoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClarityModule,
    CountUpModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: CardapioHelper },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
