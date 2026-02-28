import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesService } from '../courses/courses.service';
import { CreateCourseComponent } from './create-course.component';

@NgModule({
  declarations: [
    CreateCourseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CreateCourseComponent],
  // providers: [CoursesService]
})
export class CreateCourseModule { }
