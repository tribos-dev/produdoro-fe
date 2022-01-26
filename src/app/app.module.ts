import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { ProdudoroModule } from './produdoro/produdoro.module';
import { CountdownModule } from 'ngx-countdown';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
=======
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
>>>>>>> develop

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD

=======
    HomeComponent,
    CadastroComponent
>>>>>>> develop
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NoopAnimationsModule,
    ProdudoroModule,
    CountdownModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
