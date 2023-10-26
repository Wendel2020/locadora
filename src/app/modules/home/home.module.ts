import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { ComponentsModule } from '../components/components.module';





@NgModule({
  declarations: [
    IndexComponent,
    

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,



  ]
})
export class HomeModule { }
