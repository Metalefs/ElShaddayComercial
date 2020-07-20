import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbariconComponent } from './navbar/navbaricon/navbaricon.component';
import { ContatoComponent } from './contato/contato.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CardapioCardComponent } from './cardapio/cardapio-card/cardapio-card.component';
import { HeroComponent } from './hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClarityModule } from '@clr/angular';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';


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
    HeroComponent,
    RegistroClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
