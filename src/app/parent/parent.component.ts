import {Component} from '@angular/core';

@Component({
  selector: 'insta-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})

export class ParentComponent {
  isSuccess = false

  constructor() {
    setTimeout(() => {
      this.isSuccess = true
    }, 3000)
  }
}
