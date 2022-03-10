import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CountdownModule } from 'ngx-countdown';

import { FocoComponent } from './components/foco/foco.component';
import { PausaCurtaComponent } from './components/pausa-curta/pausa-curta/pausa-curta.component';
import { PausaLongaComponent } from './components/pausa-longa/pausa-longa/pausa-longa.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { ProdudoroRoutingModule } from './produdoro-routing.module';



@NgModule({
  declarations: [
    FocoComponent,
    PausaCurtaComponent,
    PausaLongaComponent,
    TarefaComponent
  ],
  imports: [
    CommonModule,
    ProdudoroRoutingModule,
    CountdownModule,
    MatSnackBarModule
  ]
})
export class ProdudoroModule { }
