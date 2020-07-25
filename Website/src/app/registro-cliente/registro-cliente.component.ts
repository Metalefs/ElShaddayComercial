import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../api/authentication/authentication.service';

import { Collections } from '../shared/_models/MongoCollections';
import { InformacoesContatoService } from '../api/services/InformacoesContatoService';
import { ClienteService } from '../api/services/ClienteService';
import { CardapioService } from '../api/services/CardapioService';

class Form {
  Email:string;
  Senha:string;
  rememberMe:string;
}

@Component({
  selector: 'registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  @Input()
  InformacoesContato:Collections.InformacoesContato = null;
  
  form = new Form();
  AceitaCartao:boolean;
  Logado:boolean;
  Cardapio:Collections.Cardapio;

  constructor(
    private infocontatoservice: InformacoesContatoService, 
    private clienteservice: ClienteService,
    private CardapioService: CardapioService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
    ) { 
        if (this.authenticationService.currentUserValue) { 
          this.Logado = true;
        }
    }

  LerInformacoesContato() {
    this.infocontatoservice.Ler().subscribe(data=>{
      this.InformacoesContato = data[0];
      console.log(this.InformacoesContato);
    });
  }

  Login() {
    this.loading = true;
    this.authenticationService.login(this.form.Email, this.form.Senha)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
  }

  Cadastro(cliente:Collections.Cliente) {
    this.authenticationService.signup(cliente)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.LerInformacoesContato();
  }

}
