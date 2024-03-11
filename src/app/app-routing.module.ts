import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'HomeModule',loadChildren:()=>import('./components/home/home.module').then(mod=>mod.HomeModule)},
  {path:'LiveModule',loadChildren:()=>import('./components/live/live.module').then(mod=>mod.LiveModule)},
  {path:'UpcomingMatchesModule',loadChildren:()=>import('./components/upcoming-matches/upcoming-matches.module').then(mod=>mod.UpcomingMatchesModule)},
  {path:'CompleteMatchesModule',loadChildren:()=>import('./components/complete-matches/complete-matches.module').then(mod=>mod.CompleteMatchesModule)},
  {path:'LetestNewsModule',loadChildren:()=>import('./components/letest-news/letest-news.module').then(mod=>mod.LetestNewsModule)},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }
  // { path: 'commentary', loadChildren: () => import('./components/commentary/commentary.component').then(m => m.CommentaryComponent) },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
