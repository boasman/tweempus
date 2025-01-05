import { Component } from '@angular/core';

import { TwimpCardComponent } from '../shared/twimp/twimp-card/twimp-card.component';
import { TweempuesTwinpListComponent } from "../shared/tweempus/twimp/tweempues-twinp-list/tweempues-twinp-list.component";

@Component({
  selector: 'tweempus-dashboard',
  standalone: true,
  imports: [TwimpCardComponent, TweempuesTwinpListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
