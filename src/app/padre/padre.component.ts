import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports:[],
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // userName:string = "David";

  // sayHello(event:any): void {
  //   alert(event.target.value);
  // }

  frase:string = "";

  listenerPadre(event:any): void {
    this.frase = event;
  }

}
