import { Component, OnInit } from '@angular/core';

import { CoursesService } from 'app/courses/courses.service';

@Component({
  selector: 'app-course-created-notification',
  templateUrl: './course-created-notification.component.html',
  styleUrls: ['./course-created-notification.component.css']
})
export class CourseCreatedNotificationComponent implements OnInit {

  course: string;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.courseCreated.subscribe(
      newCourseCreated => this.course = newCourseCreated
    );
  }

}
