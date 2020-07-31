import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/api/authentication/authentication.service';
import { Collections } from 'src/app/shared/_models/MongoCollections';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {
  currentUser: Collections.Cliente;
  constructor(private AuthenticationService: AuthenticationService) { 
    this.AuthenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

}
