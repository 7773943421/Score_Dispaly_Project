import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveComponent } from './live.component';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';


const route: Routes = [
  {path:'live',component:LiveComponent}
];

@NgModule({
  declarations: [
    LiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    CarouselModule
  ]
})
export class LiveModule { }
