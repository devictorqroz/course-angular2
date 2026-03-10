import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentsComponent } from './students.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsRoutingModule } from './students.routing.module';
import { StudentsService } from './students.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StudentsRoutingModule
  ],
  exports: [],
  declarations: [
    StudentsComponent,
    StudentFormComponent,
    StudentDetailComponent
  ],
  providers: [StudentsService],
})
export class StudentsModule { }
