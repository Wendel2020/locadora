import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { CarroModule } from '../carro/carro.module';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
