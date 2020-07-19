import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'navbaricon',
  templateUrl: './navbaricon.component.html',
  styleUrls: ['./navbaricon.component.css']
})
export class NavbariconComponent implements OnInit {
  @Input()
  Titulo: string;
  @Input()
  Link: string;
  @Input()
  Icon: string;
  constructor() { }

  ngOnInit(): void {
  }

}
