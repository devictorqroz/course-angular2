import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from "./students.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";
import { StudentFormComponent } from "./student-form/student-form.component";

const studentsRoutes: Routes = [
  {
    path: 'students',
    component: StudentsComponent,
    children: [
      { path: 'new', component: StudentFormComponent },
      { path: ':id', component: StudentDetailComponent },
      { path: ':id/edit', component: StudentFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(studentsRoutes)],
  exports: [RouterModule]

})
export class StudentsRoutingModule {}

