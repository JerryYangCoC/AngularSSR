import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './components';


const COMPONENTS = [
  LoadingComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class SharedModule { }
