import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './core/interceptor';

import { ClarityModule } from '@clr/angular';

import { MatTableModule } from '@angular/material/table'  
import { CountUpModule } from 'ngx-countup';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentLayoutComponent } from 'src/app/layout/content-layout/content-layout.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { NavbarComponent } from 'src/app/layout/nav/navbar.component';

import { AuthModule } from 'src/app/modules/auth/auth.module';
import { LandingPageModule } from 'src/app/modules/landing/landing.module';
import { PedidoModule } from 'src/app/modules/pedido/pedido.module';
import { EntregaModule } from 'src/app/modules/entrega/entrega.module';
import { GerenciamentoModule } from 'src/app/modules/gerenciamento/gerenciamento.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { CardapioHelper } from './_helpers/cardapio_helper';

import { LoginDialogComponent } from 'src/app/shared/dialogs/login-dialog/login-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    FooterComponent,
    NavbarComponent,
    LoginDialogComponent,
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
    CountUpModule,
    MatDialogModule,
    MatTableModule,
    NgxMaskModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: CardapioHelper },
    { provide: Document },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
