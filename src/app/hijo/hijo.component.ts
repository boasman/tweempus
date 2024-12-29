import { Component, EventEmitter, input, Input, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // @Input() name!: string;

  // @Input({ required: true}) prueba!: boolean;

  @Output() eventoHijo = new EventEmitter();  


  sayHello(event:any): void {
    this.eventoHijo.emit("Hola!");
  }

}
