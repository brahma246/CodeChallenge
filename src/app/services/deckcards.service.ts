import {Injectable} from '@angular/core';
import {Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DeckcardsService{

  constructor(private http:Http){

      console.log('Deckcards service Initialized.....')
  }

  drawCards(){
     return  this.http.get('https://deckofcardsapi.com/api/deck/new/draw/?count=2').map(res => res.json()).catch(this.handleServerError);
  }

  handleServerError(error:Response){
   
   return Observable.throw(error.json().error || 'Server error');
    }

  }


