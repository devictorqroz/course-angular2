import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { CoursesService } from 'app/courses/courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  id: number;
  inscription: Subscription;
  course: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
  ) {
    // this.id = this.route.snapshot.params['id'];
    // console.log(this.route);
  }

  ngOnInit() {
    this.inscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.course = this.coursesService.getCourse(this.id);

        if (this.course == null) {
          this.router.navigate(['/notFound']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }

}
