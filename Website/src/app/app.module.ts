import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './core/interceptor';
import { CountUpModule } from 'ngx-countup';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentLayoutComponent } from 'src/app/layout/content-layout/content-layout.component';
import { FactoryStepsComponent } from 'src/app/layout/content-layout/page/factory-steps/component/factory-steps.component';
import { NavbariconComponent } from 'src/app/layout/content-layout/page/factory-steps/component/navbaricon/navbaricon.component';
import { FeedbackComponent } from 'src/app/layout/content-layout/page//feedback/feedback.component';
import { ScrollTopComponent } from 'src/app/layout/content-layout/page/scroll-top/scroll-top.component';

import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { NavbarComponent } from 'src/app/layout/nav/navbar.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { CardapioHelper } from './_helpers/cardapio_helper';

@NgModule({
  declarations: [
    AppComponent,
    FactoryStepsComponent,
    NavbariconComponent,
    FeedbackComponent,
    ScrollTopComponent,
    FooterComponent,
    NavbarComponent,
    ContentLayoutComponent
  ],
  imports: [
    ClarityModule,
    MaterialModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CountUpModule,
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
