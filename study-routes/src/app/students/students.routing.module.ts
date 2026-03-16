import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from "./students.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";
import { StudentFormComponent } from "./student-form/student-form.component";
import { StudentsGuard } from "app/guards/students.guard";
import { StudentsDeactivateGuard } from "app/guards/students-deactivate.guard";

const studentsRoutes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    canActivateChild: [StudentsGuard],
    children: [
      {
        path: 'new',
        component: StudentFormComponent,
        canDeactivate: [StudentsDeactivateGuard]
       },
      {
        path: ':id',
        component: StudentDetailComponent
      },
      {
        path: ':id/edit',
        component: StudentFormComponent,
        canDeactivate: [StudentsDeactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(studentsRoutes)],
  exports: [RouterModule]

})
export class StudentsRoutingModule {}

