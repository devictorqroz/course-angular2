import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CoursesService {

  courseCreated = new EventEmitter<string>();
  static newCourseCreated = new EventEmitter<string>();

  private courses: string[] = ['JavaOO', 'JavaWeb', 'Tests JUnit', 'Angular2'];

  constructor() {
    console.log('CoursesService');
  }

  getCourses() {
    return this.courses;
  }

  addCourse(course: string) {
    this.courses.push(course);
    this.courseCreated.emit(course);
    CoursesService.newCourseCreated.emit(course);
  }

}
