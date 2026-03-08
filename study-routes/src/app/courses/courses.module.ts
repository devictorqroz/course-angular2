import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';
import { CoursesService } from './courses.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [],
  declarations: [
    CoursesComponent,
    CourseDetailComponent,
    CourseNotFoundComponent
  ],
  providers: [CoursesService],
})
export class CoursesModule { }
