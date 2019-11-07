import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <br>
    <p>
      css works!
    </p>
    <br>
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
