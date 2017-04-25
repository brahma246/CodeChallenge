import { Component,ViewChild } from '@angular/core';

import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'fav-movie',
  templateUrl: './favmovie.component.html',
  providers: [MoviesService]
})
export class FavMovieComponent {

  favMovies : any;
   noImage:string = "../images/noimage.png";
  constructor(private moviesService:MoviesService){
    
      this.moviesService.getFavouriteMovies().subscribe( favMovies => {
        this.favMovies = favMovies.cast;
    
});

}

}