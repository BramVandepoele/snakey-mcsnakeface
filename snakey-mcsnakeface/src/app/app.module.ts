import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavouriteSnakesComponent } from './favourite-snakes/favourite-snakes.component';
import { SnakeDetailComponent } from './snake-detail/snake-detail.component';
import { DreamComponent } from './dream/dream.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavouriteSnakesComponent,
    SnakeDetailComponent,
    DreamComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
