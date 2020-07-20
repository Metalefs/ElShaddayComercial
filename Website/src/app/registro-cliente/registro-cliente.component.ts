import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";



class Form {
  username:string;
  password:string;
  rememberMe:string;
  type:string;
}


@Component({
  selector: 'registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  constructor() { }

  form = new Form();

  ngOnInit(): void {
  }

}
