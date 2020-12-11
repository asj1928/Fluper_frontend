import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private routes: Router) { }
  canActivate() {
    if (localStorage.userid) {
      return true;
    } else {
      this.routes.navigate(['login'])
      return false;
    }
  }
}
