import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarroRoutingModule } from './carro-routing.module';
import { ComponentsModule } from '../components/components.module';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
   PostComponent

  ],
  imports: [
    CommonModule,
    CarroRoutingModule,
    ComponentsModule,
  ]
})
export class CarroModule { }
