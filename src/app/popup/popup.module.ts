import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';



const components = [
  PopupComponent
];

const imports = [
  CommonModule,
 
];

@NgModule({
  declarations: [components],
  imports: [
    imports
  ],
  exports: [components]
})
export class PopupModule { }
