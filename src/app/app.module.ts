import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppComponent} from './app.component';
import { PlayGameComponent } from './components/playgame/playgame.component';
import { FavMovieComponent } from './components/favmovies/favmovie.component';
import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    PlayGameComponent,
    FavMovieComponent
  ],
  entryComponents:[
  AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routing,
    MaterialModule.forRoot()

  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
