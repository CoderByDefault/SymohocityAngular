import { Injectable } from '@angular/core';
import { ApiService } from '../../api/api/api.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import {
  map } from 'rxjs/operators';


export const TOKEN_IDENT = 'token';
@Injectable({
  providedIn: 'root'
})
export class AuthloginService {

  constructor( private apiService: ApiService, private helperService: JwtHelperService ) { }

  login(username: string, password: string) {
    return this.apiService.credentials(username, password).
    pipe(
      map(token => localStorage.setItem(TOKEN_IDENT, token.token)
      ));
  }

  isValid(): boolean {
    return !this.helperService.isTokenExpired(this.getToken());
  }

  logout() {
    return localStorage.removeItem(TOKEN_IDENT);
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_IDENT);
  }

}
