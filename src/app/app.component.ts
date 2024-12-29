import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./core/header/header.component";
import { NavComponent } from "./core/nav/nav.component";
import { HolamundoComponent } from './holamundo/holamundo.component';
import { PadreComponent } from './padre/padre.component';

@Component({
  selector: 'tweempus-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent,HolamundoComponent,PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tweempus';
}
