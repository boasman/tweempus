import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holamundo',
  standalone: true,
  templateUrl: './holamundo.component.html',
  styleUrls: ['./holamundo.component.css']
})
export class HolamundoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userName:string = "David";
  changed:boolean = true;

}
