import { Component, OnInit, Input } from '@angular/core';

import { Collections } from '../shared/MongoCollections';
import { InformacoesContatoService } from '../api/services/InformacoesContatoService';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  Titulo: string;
  Whatsapp:string = null;
  

  async LerInfoContato(){
    this.InfoContatoService.Ler().subscribe(data=>{
      this.InformacaoContato = data[0];
      this.Whatsapp = data[0].Whatsapp;
    });
  }
  InformacaoContato:Collections.InformacoesContato;

  constructor( 
    public InfoContatoService: InformacoesContatoService
    ) {  }

  menuAtivo = false;

  ngOnInit(): void {
    this.LerInfoContato();
    console.log(this.Titulo);
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
