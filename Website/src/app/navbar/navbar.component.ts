import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../api/authentication/authentication.service';

import { Collections } from '../shared/_models/MongoCollections';
import { InformacoesContatoService } from '../api/services/InformacoesContatoService';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../dialogs/login-dialog/login-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  Titulo: string;
  @Input()
  Logado: boolean;
  opened: boolean;
  returnUrl: string;
  Whatsapp:string = null;
  

  async LerInfoContato(){
    this.InfoContatoService.Ler().subscribe(data=>{
      this.InformacaoContato = data[0];
      this.Whatsapp = data[0].Whatsapp;
    });
  }
  InformacaoContato:Collections.InformacoesContato;

  constructor( 
    private InfoContatoService: InformacoesContatoService,
    private AuthenticationService:AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
    ) {  }

  menuAtivo = false;

  Logout(){
    this.AuthenticationService.logout();
    this.router.navigateByUrl(this.router.url);
  }

  AbrirModalEntrar(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '90%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit(): void {
    this.LerInfoContato();
    this.opened = true;
    console.log(this.Titulo);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // Check for click events on the navbar burger icon
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if (navbarBurgers.length > 0) {
  
      navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });

    }
  }
}
