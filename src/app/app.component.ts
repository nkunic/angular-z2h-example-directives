import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // ngClass
  highligtColor = 'white';

  highligt(color: string) {
    this.highligtColor = color;
  }

  // ngStyle
  isStyleApplied = false;
  toggleStyle() {
    this.isStyleApplied = !this.isStyleApplied;
  }
}
