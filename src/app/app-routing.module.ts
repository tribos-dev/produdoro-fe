import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConfigurarComponent } from './configurar/configurar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
    component: HomeComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    loadChildren:'./cadastro/cadastro.component.html'
  },
  {
    path: 'configurar',
    component: ConfigurarComponent,
    loadChildren:'./configurar/configurar.component.html'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
