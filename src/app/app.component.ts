import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li *ngFor="let team of teams; let l = last">
      {{i}}.{{team.basketball}} <strong *ngIf="l"> Last entry in the list </strong>
    </li>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  teams = [{ basketball: 'Indians' }, { basketball: 'chinese' }, { basketball: 'rhinos' }];
}
