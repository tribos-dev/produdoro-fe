import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConfigurarComponent } from './configurar/configurar.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'',
    redirectTo: 'home',
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'configurar',
    component: ConfigurarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
