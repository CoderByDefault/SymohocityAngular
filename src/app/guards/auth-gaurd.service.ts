import { AuthloginService } from '../login/loginservices/authlogin.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGaurdService implements CanActivate {

  constructor(private authloginService: AuthloginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authloginService.isValid()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
