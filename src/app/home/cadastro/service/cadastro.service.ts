import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


import * as environment from '../../../../environments/environment'
import { NewUser } from '../interfaces/new-user';

import { UserService } from 'src/app/compartilhado/service/user/user.service.js';
import { LoginService } from 'src/app/signin/service/login-service/login-service.service.js';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private emailBehaviourSubject: BehaviorSubject<string> = new BehaviorSubject("");

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private loginService: LoginService
  ) { }

  enviaGmail(email: string) {
    let params = new HttpParams().set("gmail", email);
    return this.http.get(environment.wakanda.wakander.gmail.path, { observe: "response", params: params })
  }

  setGmail(email: string) {
    return this.emailBehaviourSubject.next(email);
  }

  getGmail() {
    return this.emailBehaviourSubject.value
  }

  hasGmail() {
    return !!this.getGmail();
  }

  signup(cadastro: NewUser) {
    return this.http.post(environment.credencial.path, JSON.stringify(cadastro), { observe: 'response' })
      .pipe(tap(res => {
        setTimeout(() => {
          if (res.ok)
            this.loginService.login(cadastro.usuario, cadastro.senha).subscribe((res) => {
              const authToken = res.body.token;
              this.userService.setToken(authToken);
            });
        }, 1000);
      }))
  }

}
