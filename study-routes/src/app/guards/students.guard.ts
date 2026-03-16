import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";

@Injectable()
export class StudentsGuard implements CanActivateChild {

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    // console.log(route);
    // console.log(state);

    if (state.url.includes('edit')) {
      // alert('user unautorized!');
      // return false;
      // return Observable.of(false);
    }

    return true;
  }

}



