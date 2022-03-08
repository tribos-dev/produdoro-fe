import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdudoroRoutingModule } from './produdoro-routing.module';
import { PausaCurtaComponent } from './components/pausa-curta/pausa-curta/pausa-curta.component';
import { PausaLongaComponent } from './components/pausa-longa/pausa-longa/pausa-longa.component';
import { FocoComponent } from './components/foco/foco.component';
import { CountdownModule } from 'ngx-countdown';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TarefaComponent } from './components/tarefa/tarefa.component';



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
