import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import custom validator to validate that password and confirm password fields match
import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';

import { Collections } from 'src/app/data/schema/MongoCollections';
import { InformacoesContatoService } from 'src/app/data/service/domain/InformacoesContatoService';
import { slide,fade } from 'src/app/animations';

@Component({
  selector: 'login-registro-cliente',
  templateUrl: './login-registro-cliente.component.html',
  styleUrls: ['./login-registro-cliente.component.css'],
  animations: [slide,fade]
})

export class LoginRegistroClienteComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  emailPattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");

  @Input()
  InformacoesContato:Collections.InformacoesContato = null;
  
  AceitaCartao:boolean;
  Logado:boolean;
  EmailError:boolean;
  PassError:boolean;
  Cardapio:Collections.Cardapio;
  Cadastrar:boolean;
  constructor(
    private infocontatoservice: InformacoesContatoService, 
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    ) 
    { 
        this.authenticationService.currentUser.subscribe(x =>console.log(x));
        this.Cadastrar = false;
    }

  LerInformacoesContato() {
    this.infocontatoservice.Ler().subscribe(data=>{
      this.InformacoesContato = data[0];
      console.log(this.InformacoesContato);
    });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.LerInformacoesContato();

  }

  onReset() {
    this.submitted = false;
  }

}
