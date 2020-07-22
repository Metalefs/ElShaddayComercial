import { Component, OnInit } from '@angular/core';
import { fade } from '../../animations';

@Component({
  selector: 'app-zippy',
  animations:[
    fade
  ],
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
