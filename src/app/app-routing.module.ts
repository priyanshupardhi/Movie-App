import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'details', component: DetailsComponent},
  { path: '**', component: ErrorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }