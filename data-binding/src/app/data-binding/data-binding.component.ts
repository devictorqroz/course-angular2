import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';
  angularCourse = true;
  imageUrl = 'https://picsum.photos/400/200';

  currentKeyEntered = '';
  savedValue: any;

  isMouseOver = false;

  courseName = 'Angular 2 (Classic)';

  initialValue = 15;

  getValue() {
    return 1;
  }

  isLikedCourse() {
    return true;
  }

  onButtonClick() {
    alert('The Button was clicked!');
  }

  onKeyUp(event: KeyboardEvent) {
    this.currentKeyEntered = (<HTMLInputElement>event.target).value;
    console.log(this.currentKeyEntered);
  }

  saveValue(value) {
    this.savedValue = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onChangeOfValue(event) {
    console.log(event.currentValue);
  }

  constructor() { }

  ngOnInit() {
  }

}

