import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';

import { TokenService } from '../token/token.service';
import { User } from "../../../compartilhado/interface/user";
import * as environament from '../../../../environments/environment.js'

const null = null;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private http: HttpClient,
  ) { this.tokenService.hasToken() && this.decode(); }

  private decode() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decode();
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigateByUrl("login");
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUser() {
    console.log(this.userSubject);
    return this.userSubject.asObservable();
  }

  hasUser(user: User): boolean {
    if (user)
      return true;
    return false
  }
}
