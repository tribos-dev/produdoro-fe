import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { ToastrModule } from 'ngx-toastr';
import { CountdownModule } from 'ngx-countdown';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProdudoroModule } from './produdoro/produdoro.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';


const toastrConfig = {
  maxOpened: 1,
  timeOut: 5000,
  autoDimiss: true,
  preventDuplicates: true,
  positionClass: 'toast-top-rigth'
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    NoopAnimationsModule,
    CompartilhadoModule,
    HttpClientModule,
    NoopAnimationsModule,
    ProdudoroModule,
    MatSnackBarModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
