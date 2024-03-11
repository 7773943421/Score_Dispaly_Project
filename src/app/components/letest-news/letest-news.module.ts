import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetestNewsComponent } from './letest-news.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
  {path:'news',component:LetestNewsComponent}
];

@NgModule({
  declarations: [
    LetestNewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class LetestNewsModule { }
