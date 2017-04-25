import { Component,ViewChild } from '@angular/core';

import { DeckcardsService } from 'src/app/services/deckcards.service';



@Component({
  selector:'play-game',
  templateUrl:'playgame.component.html',
  providers: [DeckcardsService]
  
})

export class PlayGameComponent{
    
    mycard:any;
    guestCard:any;
    drawcards:any;
    higher:boolean = false;
    lower:boolean = false;
    isGuessed:boolean = false;
    deckcardsService:DeckcardsService;
    isTried:boolean;
    message:string;
  

    cards:any = {'1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, '7': 6, '8': 7, '9': 8, '10': 9, 'JOCKEY': 10, 'QUEEN': 11, 'KING': 12, 'ACE': 13};

constructor(deckcardsService:DeckcardsService){
 
  this.deckcardsService = deckcardsService;
  
  this.drawDecks();
}

drawDecks(){

 this.deckcardsService.drawCards().subscribe(deckcards => {
        this.drawcards = deckcards.cards;
       
        this.mycard = this.drawcards[0];
      
        
        this.guestCard = this.drawcards[1];

         if(this.guestCard.value == this.mycard.value ){
            this.drawDecks();
        }

    });

}

resetStatus(){
   
   this.isTried = false;
   this.isGuessed = false;
  this.higher = false;
  this.lower = false;
   this.drawDecks();


}




checkHigherLower():any{
    
if(this.higher){

    if(this.cards[this.mycard.value] < this.cards[this.guestCard.value] ){
        this.message = "You Win!";
       
    }else{
         this.message = "Better Luck Next Time"
    
    }
    this.isGuessed = true;
   this.isTried = true;

}

if(this.lower){

    if(this.cards[this.mycard.value] > this.cards[this.guestCard.value] ){
        this.message = "You Win!";
       
    }else{

        this.message = "Better Luck Next Time";
    }
      this.isGuessed = true;
         this.isTried = true;
}
return this.message;
}



}