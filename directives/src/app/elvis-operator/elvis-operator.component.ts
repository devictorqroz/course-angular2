import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis-operator',
  templateUrl: './elvis-operator.component.html',
  styleUrls: ['./elvis-operator.component.scss']
})
export class ElvisOperatorComponent implements OnInit {

  task: any = {
    description: 'Task description',
    responsible: {
      id: 'ID 1',
      status: null,
      user: {
        username: 'user name',
        userId: null
      }
    }
  };


  constructor() { }

  ngOnInit() {
  }

}
