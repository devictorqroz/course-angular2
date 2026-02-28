import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: string[] = [];

  // coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    // this.coursesService = new CoursesService();
    // this.coursesService = _coursesService;

  }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

}
