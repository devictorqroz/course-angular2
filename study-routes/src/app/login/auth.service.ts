import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserLogin } from './userLogin';

@Injectable()
export class AuthService {

  private isAuthenticated: boolean = false;

  navbarVisibility = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(userLogin: UserLogin) {

    if (userLogin.name === 'user@email.com' &&
        userLogin.password === '123456') {

        this.isAuthenticated = true;

        this.navbarVisibility.emit(true);

        this.router.navigate(['/']);

      } else {
        this.isAuthenticated = false;

        this.navbarVisibility.emit(false);
    }
  }

  isUserAuthenticated() {
    return this.isAuthenticated;
  }


}
