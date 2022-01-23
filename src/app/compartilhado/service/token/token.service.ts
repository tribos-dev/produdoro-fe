import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable, Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

import * as environment from '../../../../environments/environment.js';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service.js';

const key = "authToken"

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private expDate: BehaviorSubject<Date> = new BehaviorSubject<Date>(null);
  private TokenObservabe: Observable<boolean> = new Observable<boolean>(obs => {
    obs.next(this.hasToken());
  });

  constructor(private http: HttpClient) { }

  hasToken() {
    return !!this.getToken();
  }

  setToken(token: string) {
    window.localStorage.setItem(key, token);
  }

  getToken() {
    return window.localStorage.getItem(key);
  }

  removeToken() {
    this.setTokenExpDate(null);
    window.localStorage.removeItem('tokenExpirationDate')
    window.localStorage.removeItem(key);
  }

  renewToken() {
    return this.http.get<any>(environment.wakanda.wakander.auth.renew.path,
      { observe: "response" });
  }

  setTokenExpDate(dateString: string) {
    window.localStorage.setItem('tokenExpirationDate', dateString);
  }

  getTokenExpDate() {
    let expirationDateString = window.localStorage.getItem('tokenExpirationDate');
    return expirationDateString == null ? null : new Date(expirationDateString);
  }

  tokenHasExpired(): boolean {
    return new Date() < this.expDate.value;
  }

  getTokenObservable() {
    return this.TokenObservabe
  }

}
