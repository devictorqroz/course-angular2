import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {

  courses: string[] = [];


  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses();

    // this.coursesService.courseCreated.subscribe(
    //   course => console.log(course)
    // );

    CoursesService.newCourseCreated.subscribe(
      course => this.courses.push(course)
    );
  }

}
