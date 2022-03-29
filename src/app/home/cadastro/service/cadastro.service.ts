import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


import * as environment from '../../../../environments/environment'
import { NewUser } from '../interfaces/new-user';

import { UserService } from 'src/app/compartilhado/service/user/user.service.js';


@Injectable({
  providedIn: 'root'
})

export class SignupService {

  constructor(
    

  ) {

  }

  
}
