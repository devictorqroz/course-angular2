import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CoursesService } from './courses.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CoursesComponent,
    CoursesDetailComponent
  ],
  exports: [
    CoursesComponent,
    CoursesDetailComponent
  ],
  providers: [ CoursesService ]
})
export class CoursesModule { }
