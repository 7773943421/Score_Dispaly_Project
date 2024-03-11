import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteMatchesComponent } from './complete-matches.component';
import { Routes, RouterModule } from '@angular/router';
import { CommentaryComponent } from '../commentary/commentary.component';

const route: Routes = [
  {path:'completed_matches',component:CompleteMatchesComponent},
  {path:'commentary/:eid',component:CommentaryComponent}

];

@NgModule({
  declarations: [
    CompleteMatchesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class CompleteMatchesModule { }
