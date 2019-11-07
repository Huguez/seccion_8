import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {
  
  alerta:string = 'info';

  data:Array<any> = [
    { id: "primary", valor: "primary" },
    { id: "secondary", valor: "secondary" },
    { id: "success", valor: "success" },
    { id: "danger", valor: "danger" },
    { id: "warning", valor: "warning" },
    { id: "info", valor: "info" },
    { id: "light", valor: "light" },
    { id: "dark", valor: "dark" }
  ];

  constructor() { }

  ngOnInit() {
  }
  
  seleccionarAlerta( event:any  ){
    this.alerta = event.target.value;
    console.log( this.alerta );
  }

}
