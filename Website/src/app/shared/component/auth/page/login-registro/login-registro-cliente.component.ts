import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import custom validator to validate that password and confirm password fields match
import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { CadastroService } from 'src/app/core/service/cadastro.service';

import { Collections } from 'src/app/data/schema/MongoCollections';
import { InformacoesContatoService } from 'src/app/data/service/domain/InformacoesContatoService';
import { slide,fade } from 'src/app/animations';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';

class Login_Form {
  Email:string;
  Senha:string;
}

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

  registerForm: FormGroup;

  @Input()
  InformacoesContato:Collections.InformacoesContato = null;
  
  form = new Login_Form();
  Cadastro_Form = new Cadastro_Form();
  AceitaCartao:boolean;
  Logado:boolean;
  EmailError:boolean;
  PassError:boolean;
  Cardapio:Collections.Cardapio;
  Cadastrar:boolean;
  constructor(
    private infocontatoservice: InformacoesContatoService, 
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
    ) 
    { 
        this.authenticationService.currentUser.subscribe(x =>console.log(x));
        this.Cadastrar = false;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
                this.EmailError = false;
                this.PassError = false;
                this.error = null;
                this.Logado = true;
                if(this.returnUrl != "/")
                  this.router.navigateByUrl(this.returnUrl);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
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
                this.error = null;
                this.Logado = true;
            },
            error => {
                this.error = error;
                this.loading = false;
            });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.LerInformacoesContato();

    this.registerForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
