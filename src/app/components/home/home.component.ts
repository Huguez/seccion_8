import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
  
    <app-css></app-css>
  
    <app-clases></app-clases>
    
    <br/>
  
    <p [appResaltado]="'orange'">Homa lundo XD </p>
    
    <br/>

    <app-ng-switch></app-ng-switch>    
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  
  ngOnInit() {
    console.log("1  ngOnInit");
  }
    
  ngOnDestroy(): void {
    console.log("2 ngOnDestroy");
  }

  ngAfterViewChecked(): void {
    console.log("3 ngAfterViewChecked");
  }

  ngAfterViewInit(): void {
    console.log("4 ngAfterViewInit");
  }

  ngAfterContentChecked(): void {
    console.log("5 ngAfterContentChecked");
  }

  ngAfterContentInit(): void {
    console.log("6 ngAfterContentInit");
  }

  ngDoCheck(): void {
    console.log("7 ngDoCheck");
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("8 ngOnChanges");
  }

  constructor() {
    console.log( "0 Constructor" );
  }

}
