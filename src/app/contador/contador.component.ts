import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

@Input({required: true}) valorContador!: number;
@Output() eventoContador = new EventEmitter();

incrementar() {
  this.valorContador++;
  this.eventoContador.emit(this.valorContador);
}

decrementar() {
  this.valorContador--;
  this.eventoContador.emit(this.valorContador);
}

  constructor() { }

  ngOnInit() {
  }

}
