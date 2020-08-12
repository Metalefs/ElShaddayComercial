import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginClienteComponent } from './page/login/login-cliente.component';
import { RegistroClienteComponent } from './page/registro/registro-cliente.component';
import { LoginRegistroClienteComponent } from './page/login-registro/login-registro-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
@NgModule({
  declarations: [
    LoginClienteComponent,
    RegistroClienteComponent,
    LoginRegistroClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ClarityModule
  ],
  exports: [
    LoginClienteComponent,
    RegistroClienteComponent,
    LoginRegistroClienteComponent
  ]
})
export class AuthModule { }
