import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MoviesService{

  constructor(private http:Http){

      console.log('Movies service Initialized.....')
  }

  getFavouriteMovies(){
    return  this.http.get('https://api.themoviedb.org/3/movie/321612/credits?api_key=52323917aee144625c098a16c430e8f2').map(res => res.json()).catch(this.handleServerError);
  }

  handleServerError(error:Response){
   
   return Observable.throw(error.json().error || 'Server error');
    }

}

