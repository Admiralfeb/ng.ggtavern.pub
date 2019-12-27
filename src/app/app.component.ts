import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="root-app">
    <app-navbar></app-navbar>
    <div class="routed">
      <div class="scrollable">
        <ng-scrollbar barclass="main-scrollbar">
          <router-outlet></router-outlet>
        </ng-scrollbar>
      </div>
    </div>
  </div>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
