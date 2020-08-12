import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { CadastroService } from 'src/app/core/service/cadastro.service';

import { Collections } from 'src/app/data/schema/MongoCollections';
import { InformacoesContatoService } from 'src/app/data/service/domain/InformacoesContatoService';
import { slide,fade } from 'src/app/animations';

class Cadastro_Form {
  Email:string;
  Nome:string;
  Telefone:string;
  Senha:string;
  Rua:string;
  Bairro:string;
  Numero:string;
  Cidade:string;
  Estado:string;
}

@Component({
  selector: 'registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css'],
  animations: [slide,fade]
})
export class RegistroClienteComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  emailPattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");

  @Input()
  InformacoesContato:Collections.InformacoesContato = null;
  
  Cadastro_Form = new Cadastro_Form();
  AceitaCartao:boolean;
  Logado:boolean;
  EmailError:boolean;
  PassError:boolean;
  Cardapio:Collections.Cardapio;
  @Input()
  Cadastrar:Boolean;
  constructor(
    private infocontatoservice: InformacoesContatoService, 
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private CadastroService: CadastroService,
    private formBuilder: FormBuilder
    ) 
    { 
        this.authenticationService.currentUser.subscribe(x =>console.log(x));
    }

  LerInformacoesContato() {
    this.infocontatoservice.Ler().subscribe(data=>{
      this.InformacoesContato = data[0];
      console.log(this.InformacoesContato);
    });
  }

  SetCadastrar(val){
    this.CadastroService.setCadastrar(val);
    this.Cadastrar = val;
  }

  Cadastro() {
    this.loading = true;
    let cliente = new Collections.Cliente(
      this.Cadastro_Form.Nome,
      this.Cadastro_Form.Email,
      this.Cadastro_Form.Senha,
      this.Cadastro_Form.Telefone,
      this.Cadastro_Form.Rua,
      this.Cadastro_Form.Bairro,
      this.Cadastro_Form.Numero,
      "Lagoa Santa",
      "Minas Gerais",
      new Date(),
      1
    ); 
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
