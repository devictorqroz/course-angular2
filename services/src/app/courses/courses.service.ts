import { Injectable } from "@angular/core";

@Injectable()
export class CoursesService {

  private courses: string[] = ['JavaOO', 'JavaWeb', 'Tests JUnit', 'Angular2'];

  constructor() {
    console.log('CoursesService');
  }

  getCourses() {
    return this.courses;
  }

  addCourse(course: string) {
    this.courses.push(course);
  }

}
