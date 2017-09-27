import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li *ngFor="let team of teams; let i = index">
      {{i}}.{{team.basketball}}
    </li>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  teams = [{ basketball: 'Indians' }, { basketball: 'chinese' }, { basketball: 'rhinos' }];
}
