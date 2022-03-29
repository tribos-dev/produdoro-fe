import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './home/cadastro/cadastro.component';
import { ConfigurarComponent } from './home/configurar/configurar.component';


const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'foco'
  },
  {
    path: 'foco',
    loadChildren: () => import('./produdoro/produdoro.module').then(m => m.ProdudoroModule)
  },
  {
    path: 'configurar',
    component: ConfigurarComponent

  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
