import { Component } from '@angular/core';
import { TwimpCardComponent } from "../../../twimp/twimp-card/twimp-card.component";
import { AuthorModel } from '../../../author/author.model';
import { TwimpModel } from '../../../twimp/twimp.model';

@Component({
  selector: 'tweempus-tweempues-twinp-list',
  standalone: true,
  imports: [TwimpCardComponent],
  templateUrl: './tweempues-twinp-list.component.html',
  styleUrl: './tweempues-twinp-list.component.css'
})
export class TweempuesTwinpListComponent {

  text: string = 'lorem ipsum';
  authors: AuthorModel[] = [];
  twimps: TwimpModel[] = [];

  constructor(){
    this.authors.push(new AuthorModel('1'));
    this.twimps.push(new TwimpModel('1', this.authors[0], this.text, '01/01/1970'));
    this.twimps.push(new TwimpModel('2', this.authors[0], this.text, '01/01/1970'));
    this.twimps.push(new TwimpModel('3', this.authors[0], this.text, '01/01/1970'));
    this.twimps.push(new TwimpModel('4', this.authors[0], this.text, '01/01/1970'));
  }

}
