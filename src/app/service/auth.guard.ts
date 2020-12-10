import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   constructor(private router: Router, private auth: UserService) {}
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   if (localStorage.getItem('connect') === 'true') {
  //     return true;
  //   } else {
  //     this.router.navigate([""]);
  //     return false;
  //   }
  // }
  canActivate(): boolean {
    if (!this.auth.isAuthentificated()) {
      this.router.navigate([''])
      console.log( 'You are not authorised to view this page');
      return false;
    } else {
      return true;

    }

  }

}
