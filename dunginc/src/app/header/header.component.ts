import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dinc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title;

  constructor() { }

  ngOnInit() {
    this.title = 'Dunginc';
  }

}
