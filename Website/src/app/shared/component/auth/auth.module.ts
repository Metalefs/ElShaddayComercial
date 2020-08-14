import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginClienteComponent } from './page/login/login-cliente.component';
import { RegistroClienteComponent } from './page/registro/registro-cliente.component';
import { LoginRegistroClienteComponent } from './page/login-registro/login-registro-cliente.component';
import { LoginDialogComponent } from 'src/app/layout/nav/login-dialog/login-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { MatDialogModule } from '@angular/material/dialog' 
@NgModule({
  declarations: [
    LoginClienteComponent,
    RegistroClienteComponent,
    LoginRegistroClienteComponent,
    LoginDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule,
    ClarityModule
  ],
  exports: [
    LoginClienteComponent,
    RegistroClienteComponent,
    LoginRegistroClienteComponent,
    LoginDialogComponent
  ]
})
export class AuthModule { }
