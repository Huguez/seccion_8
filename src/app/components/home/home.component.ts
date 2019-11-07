import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
  
    <app-css></app-css>
  
  
    <app-clases></app-clases>
    
    <hr/>
  
    <p [appResaltado]="'orange'">Homa lundo XD </p>
    
    <hr/>
    
    <app-ng-switch></app-ng-switch>
    
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
