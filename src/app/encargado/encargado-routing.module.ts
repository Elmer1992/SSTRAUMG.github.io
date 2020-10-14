import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncargadoComponent } from './encargado.component';

const routes: Routes = [{ path: '', component: EncargadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncargadoRoutingModule { }
