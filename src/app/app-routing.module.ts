import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './home/cadastro/cadastro.component';
import { ConfigurarComponent } from './home/configurar/configurar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    pathMatch:'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'configurar',
    component: ConfigurarComponent
  
  },
  {
    path: 'cadastro',
    component: CadastroComponent
=======
    pathMatch: 'full',
    redirectTo: 'foco'
  },
  {
    path: 'foco',
    loadChildren: () => import('./produdoro/produdoro.module').then(m => m.ProdudoroModule)
>>>>>>> develop
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
