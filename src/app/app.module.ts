import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConfigurarComponent } from './configurar/configurar.component';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    ConfigurarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NoopAnimationsModule,
    CompartilhadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
