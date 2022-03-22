import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user';

import {catchError, finalize} from 'rxjs/operators'
import { throwError } from 'rxjs';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  apiUrl = `${environment.apiUrl}/cadastro`;

  users: User [] = []

  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private http: HttpClient 
  ){
}

  save(user: User) {
    this.spinner.show();
    return this.http.post<User>(this.apiUrl, user).pipe(
      catchError(err => this.exceptionHandler(err)),
      finalize(() => this.spinner.hide())
    );
  }

    update(id: number, user: User){
      this.spinner.show();  
    return this.http.put<User>(`${this.apiUrl}/${id}`, user).pipe(
      catchError(err => this.exceptionHandler(err)),
      finalize(() => this.spinner.hide())
    );
  }

  deleteById(id:number) {
    this.spinner.show();
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(err => this.exceptionHandler(err)),
      finalize(() => this.spinner.hide())
    );
  }

  findById(id: number) {
    this.spinner.show();
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      catchError(err => this.exceptionHandler(err)),
      finalize(() => this.spinner.hide())
    );
  }

  findAll() {
    this.spinner.show();
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError(err => this.exceptionHandler(err)),
      finalize(() => this.spinner.hide())
    );
  }

  private exceptionHandler(error: HttpErrorResponse) {
    this.toastr.error(error.message, `${error.status} - ${error.statusText}`);
    return throwError(error);
  }
}