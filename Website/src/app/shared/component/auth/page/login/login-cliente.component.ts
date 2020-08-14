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

class Login_Form {
  Email:string;
  Senha:string;
}

@Component({
  selector: 'login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css'],
  animations: [slide,fade]
})
export class LoginClienteComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  emailPattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
  registerForm: FormGroup;

  @Input()
  InformacoesContato:Collections.InformacoesContato = null;
  
  form = new Login_Form();
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
