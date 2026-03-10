import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: any = {};
  inscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentsService
  ) { }

  ngOnInit() {
    this.inscription = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.student = this.studentService.getStudent(id);
      }
    );
  }

  editStudent() {
    this.router.navigate(['/students', this.student.id, 'edit']);
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }

}
