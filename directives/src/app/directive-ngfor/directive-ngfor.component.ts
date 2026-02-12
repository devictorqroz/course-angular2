import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngfor',
  templateUrl: './directive-ngfor.component.html',
  styleUrls: ['./directive-ngfor.component.scss']
})
export class DirectiveNgforComponent implements OnInit {

  courses: string[] = ["Angular 2", "Java", "Spring"];

  constructor() { }

  ngOnInit() {
  }

}
