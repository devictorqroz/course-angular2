import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value = 5;

  deleteCycle = false;

  changeValue() {
    this.value++;
  }

  destroyCycle() {
    this.deleteCycle = true;
  }

}
