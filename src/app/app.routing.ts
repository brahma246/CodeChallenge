import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import {PlayGameComponent} from './components/playgame/playgame.component';
import {FavMovieComponent} from './components/favmovies/favmovie.component';



const appRoutes:Routes = [

  {
      path: 'playgame',
      component: PlayGameComponent
  },
  {
      path: 'favmovie',
      component: FavMovieComponent
  }

]

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);