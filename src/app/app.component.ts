import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [ngSwitch]="titles">
      <div *ngSwitchCase="'app'">
        this mathced with app
      </div>
      <div *ngSwitchCase="'result'">
        It matched with result
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titles = 'result';
  teams = [{ basketball: 'Indians' }, { basketball: 'chinese' }, { basketball: 'rhinos' }];
}
