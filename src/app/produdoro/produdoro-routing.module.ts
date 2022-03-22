import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FocoComponent } from './components/foco/foco.component';
import { PausaCurtaComponent } from './components/pausa-curta/pausa-curta/pausa-curta.component';
import { PausaLongaComponent } from './components/pausa-longa/pausa-longa/pausa-longa.component';

const routes: Routes = [
  {
    path: '',
    component: FocoComponent
  },
  {
    path: 'pausa-curta',
    component: PausaCurtaComponent
  },
  {
    path: 'pausa-longa',
    component: PausaLongaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdudoroRoutingModule { }
