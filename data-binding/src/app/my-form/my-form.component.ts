import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  phrase = 'lorem ipsum';

  person: any = {
    name: 'Doe',
    age: 30
  };

  constructor() { }

  ngOnInit() {
  }

}
