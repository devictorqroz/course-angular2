import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  angularCourse: boolean = true;
  imageUrl: string = 'https://picsum.photos/400/200';

  getValue() {
    return 1;
  }

  isLikedCourse() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}

