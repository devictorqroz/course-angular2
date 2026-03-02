import { EventEmitter, Injectable } from "@angular/core";

import { LogService } from "app/shared/log.service";

@Injectable()
export class CoursesService {

  courseCreated = new EventEmitter<string>();
  static newCourseCreated = new EventEmitter<string>();

  private courses: string[] = ['JavaOO', 'JavaWeb', 'Tests JUnit', 'Angular2'];

  constructor(private logService: LogService) {
    console.log('CoursesService');
  }

  getCourses() {
    this.logService.consoleLog('Fetching courses');
    return this.courses;
  }

  addCourse(course: string) {
    this.logService.consoleLog(`Creating a new course ${course}`);
    this.courses.push(course);
    this.courseCreated.emit(course);
    CoursesService.newCourseCreated.emit(course);
  }

}
