import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreetPageComponent } from './street-page/street-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    StreetPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    StreetPageComponent
  ]
})
export class PagesModule { }
