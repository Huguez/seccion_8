import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <hr>
    <p>
      css works!
    </p>
    <hr>
  `,
  styles: [ `p{
    color:red;
    font-size: 20px;
  }` ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
