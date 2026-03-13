import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./guards/auth.guard";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent
  },
  { path: '', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'courses',
    loadChildren: 'app/courses/courses.module#CoursesModule',
    canActivate: [AuthGuard]
  },
  { path: 'students',
    loadChildren: 'app/students/students.module#StudentsModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}
