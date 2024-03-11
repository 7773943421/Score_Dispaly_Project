import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompleteMatchesModule } from './complete-matches/complete-matches.module';
import { HomeModule } from './home/home.module';
import { LetestNewsModule } from './letest-news/letest-news.module';
import { LiveModule } from './live/live.module';
import { UpcomingMatchesModule } from './upcoming-matches/upcoming-matches.module';
import { CommentaryComponent } from './commentary/commentary.component';



@NgModule({
  declarations: [ 
    CommentaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CompleteMatchesModule,
    HomeModule,
    LetestNewsModule,
    LiveModule,
    UpcomingMatchesModule
  ]
})
export class LiveScoreModule { }
