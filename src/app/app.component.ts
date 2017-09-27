import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 *ngIf="title; else mycomponent"> 
    Title is present
  </h1>
  <ng-template #mycomponent> This is my component </ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titles = 'app';
  teams = [{ basketball: 'Indians' }, { basketball: 'chinese' }, { basketball: 'rhinos' }];
}
