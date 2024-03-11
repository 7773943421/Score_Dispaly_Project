import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingMatchesComponent } from './upcoming-matches.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
  {path:'upcoming_matches',component:UpcomingMatchesComponent}
];

@NgModule({
  declarations: [
    UpcomingMatchesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class UpcomingMatchesModule { }
