import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { UserLogin } from './userLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userLogin: UserLogin = new UserLogin();

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  login() {
    this.authService.login(this.userLogin);
  }

}
