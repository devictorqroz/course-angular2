import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  // inputs: ['courseName']
  // inputs: ['courseName: name']
})
export class InputPropertyComponent implements OnInit {

  @Input() courseName = '';
  // @Input('name') courseName: string = '';

  constructor() { }

  ngOnInit() {
  }

}
