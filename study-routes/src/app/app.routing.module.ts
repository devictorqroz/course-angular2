import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'courses', loadChildren: 'app/courses/courses.module#CoursesModule'},
  { path: 'students', loadChildren: 'app/students/students.module#StudentsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}
