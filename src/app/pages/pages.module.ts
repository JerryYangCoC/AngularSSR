import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';


const COMPONENTS = [
  PagesComponent,
  HomeComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ],
  exports: []
})
export class PagesModule { }
