import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { GraphicComponent } from './graphic/graphic.component';


@NgModule({
  declarations: [
    FooterComponent,
    GraphicComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GraphicComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
