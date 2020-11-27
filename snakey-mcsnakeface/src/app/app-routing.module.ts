import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FavouriteSnakesComponent} from "./favourite-snakes/favourite-snakes.component";
import {DreamComponent} from "./dream/dream.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '' ,redirectTo: '/home', pathMatch: 'full'},
  {path: 'snakes', component: FavouriteSnakesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dream', component: DreamComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
