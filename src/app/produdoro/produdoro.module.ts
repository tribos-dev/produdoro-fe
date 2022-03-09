import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdudoroRoutingModule } from './produdoro-routing.module';
import { PausaCurtaComponent } from './components/pausa-curta/pausa-curta/pausa-curta.component';
import { PausaLongaComponent } from './components/pausa-longa/pausa-longa/pausa-longa.component';
import { FocoComponent } from './components/foco/foco.component';
import { CountdownModule } from 'ngx-countdown';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from '../home/home.component';
import { CadastroComponent } from '../home/cadastro/cadastro.component';
import { ConfigurarComponent } from '../home/configurar/configurar.component';



@NgModule({
  declarations: [
    HomeComponent,
    CadastroComponent,
    ConfigurarComponent,
    FocoComponent,
    PausaCurtaComponent,
    PausaLongaComponent
  ],
  imports: [
    CommonModule,
    ProdudoroRoutingModule,
    CountdownModule,
    MatSnackBarModule
  ]
})
export class ProdudoroModule { }
