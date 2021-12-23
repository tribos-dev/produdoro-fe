import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocosComponent } from '../focos/focos.component';



@NgModule({
  declarations: [
    FocosComponent
  ],
  exports: [
    FocosComponent
  ],
  imports: [
    CommonModule

  ],
})
export class ProdudoroModule { }
