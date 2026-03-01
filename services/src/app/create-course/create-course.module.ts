import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesService } from '../courses/courses.service';
import { CreateCourseComponent } from './create-course.component';
import { CourseCreatedNotificationComponent } from '../course-created-notification/course-created-notification.component';

@NgModule({
  declarations: [
    CreateCourseComponent,
    CourseCreatedNotificationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CreateCourseComponent],
  // providers: [CoursesService]
})
export class CreateCourseModule { }
