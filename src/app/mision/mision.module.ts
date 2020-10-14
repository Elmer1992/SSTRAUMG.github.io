import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisionRoutingModule } from './mision-routing.module';
import { MisionComponent } from './mision.component';


@NgModule({
  declarations: [MisionComponent],
  imports: [
    CommonModule,
    MisionRoutingModule
  ]
})
export class MisionModule { }
