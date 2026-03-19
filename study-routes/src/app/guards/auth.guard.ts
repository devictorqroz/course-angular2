import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from 'app/login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    console.log('AuthGuard');

    return this.hasAccess();
 }

  private hasAccess() {
    if (this.authService.isUserAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }


  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.log('caLoad: checking user access to module');

    return this.hasAccess();
  }

}
