import { StudentsService } from './../students.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  student: any = {};
  inscription: Subscription;

  isFormChanged: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.inscription = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.student = this.studentsService.getStudent(id);

        if (this.student == null) {
          this.student = {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscription.unsubscribe;
  }

  onInput() {
    this.isFormChanged = true;
    console.log('changed');
  }

  canDeactivate() {

    if (this.isFormChanged) {
      return confirm('You have unsaved changes. Are you sure you want to leave this page?');
    }

    return true;
  }

}
