import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProdudoroModule } from './PP-2-FE-usuario-muda-status/produdoro/produdoro/produdoro.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NoopAnimationsModule,
    ProdudoroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
