import { Injectable } from '@angular/core';

@Injectable()
export class StudentsService {

  private students: any[] = [
    { id: 1, name: 'Student01', email: 'student01@email.com' },
    { id: 2, name: 'Student02', email: 'student02@email.com' },
    { id: 3, name: 'Student03', email: 'student03@email.com' }
  ];

  getStudents() {
    return this.students;
  }

  getStudent(id: number) {
    for (let i=0; i<this.students.length; i++) {
      let student = this.students[i];
      if (student.id == id) {
        return student;
      }
    }
    return null;
  }

  constructor() { }

}
