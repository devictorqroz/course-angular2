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

  url: string = 'http://loiane.com';
  angularCourse: boolean = true;
  imageUrl: string = 'https://picsum.photos/400/200';

  currentKeyEntered: string = '';
  savedValue: any;

  isMouseOver: boolean = false;


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

  constructor() { }

  ngOnInit() {
  }

}

