import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customized-directives',
  templateUrl: './customized-directives.component.html',
  styleUrls: ['./customized-directives.component.scss']
})
export class CustomizedDirectivesComponent implements OnInit {

  displayCourses: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onDisplayCourses() {
    this.displayCourses = !this.displayCourses;
  }


}
