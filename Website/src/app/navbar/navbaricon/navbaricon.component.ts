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
  Icon: object;
  constructor() { }

  ngOnInit(): void {
    console.log(this.Titulo,
      this.Link,
      this.Icon)
  }

}
