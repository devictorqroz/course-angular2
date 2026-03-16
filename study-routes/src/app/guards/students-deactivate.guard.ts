import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";

import { StudentFormComponent } from "app/students/student-form/student-form.component";

@Injectable()
export class StudentsDeactivateGuard implements CanDeactivate<StudentFormComponent> {

  canDeactivate(
    component: StudentFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log('deactivate guard');

    return component.canDeactivate ? component.canDeactivate() : true;
  }


}
