import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";

import { Student } from "../student";
import { StudentsService } from "../students.service";

@Injectable()
export class StudentDetailResolver implements Resolve<Student> {

  constructor(private studentsService: StudentsService) {

  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

      console.log('StudentDetailResolver');

      let id = route.params['id'];

      return this.studentsService.getStudent(id);
  }


}

