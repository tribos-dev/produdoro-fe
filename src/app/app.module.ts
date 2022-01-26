import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './home/cadastro/cadastro.component';
import { ConfigurarComponent } from './home/configurar/configurar.component';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

const toastrConfig = {
  maxOpened: 1,
  timeOut: 5000,
  autoDimiss: true,
  preventDuplicates: true,
  positionClass: 'toast-top-rigth'
}
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
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    NoopAnimationsModule,
    CompartilhadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
