import { Injectable } from "@angular/core";

@Injectable()
export class CoursesService {

  getCourses() {
    return ['JavaOO', 'JavaWeb', 'Tests JUnit', 'Angular2'];
  }

}
