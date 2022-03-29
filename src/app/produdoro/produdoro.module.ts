import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CountdownModule } from 'ngx-countdown';
import { CadastroComponent } from '../home/cadastro/cadastro.component';
import { ConfigurarComponent } from '../home/configurar/configurar.component';

import { FocoComponent } from './components/foco/foco.component';
import { PausaCurtaComponent } from './components/pausa-curta/pausa-curta/pausa-curta.component';
import { PausaLongaComponent } from './components/pausa-longa/pausa-longa/pausa-longa.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { ProdudoroRoutingModule } from './produdoro-routing.module';





@NgModule({
  declarations: [
  CadastroComponent,
  ConfigurarComponent,
  FocoComponent,
  PausaCurtaComponent,
  PausaLongaComponent,
  TarefaComponent

  ],

  imports: [
    CommonModule,
    ProdudoroRoutingModule,
    CountdownModule,
    MatSnackBarModule,
    FormsModule,
    MatListModule,
    MatSnackBarModule
  ],


})
export class ProdudoroModule {}
