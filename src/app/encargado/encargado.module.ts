import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncargadoRoutingModule } from './encargado-routing.module';
import { EncargadoComponent } from './encargado.component';


@NgModule({
  declarations: [EncargadoComponent],
  imports: [
    CommonModule,
    EncargadoRoutingModule
  ]
})
export class EncargadoModule { }
