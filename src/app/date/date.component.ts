import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent {
  visibility: boolean = true;
  toggle() {
    this.visibility = !this.visibility
  }
  constructor() {}
}
