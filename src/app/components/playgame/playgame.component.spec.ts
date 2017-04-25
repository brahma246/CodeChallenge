import { TestBed, async } from '@angular/core/testing';
import {PlayGameComponent} from './playgame.component';
import { DeckcardsService } from 'src/app/services/deckcards.service';
import { MaterialModule } from '@angular/material';
import {} from 'jasmine';


describe('playgame test', () => {
  beforeEach(() => {
    
  

    TestBed.configureTestingModule({
    
  
       declarations: [ PlayGameComponent ],
    providers: [DeckcardsService],
    imports: [MaterialModule.forRoot()]
    });
    TestBed.compileComponents();
  


  });

   it('should create the PlayGameComponent', async(() => {
    const fixture = TestBed.createComponent(PlayGameComponent);
    const playgame = fixture.debugElement.componentInstance;
    expect(playgame).toBeTruthy();
  }));

it('should be return message',async(() => {
        
     const fixture = TestBed.createComponent(PlayGameComponent);
     let comp = fixture.componentInstance;
     comp.lower=true;
     comp.mycard={
            "image": "https://deckofcardsapi.com/static/img/KH.png",
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
        };
      comp.guestCard= {
            "image": "https://deckofcardsapi.com/static/img/8C.png",
            "value": "8",
            "suit": "CLUBS",
            "code": "8C"
        };
    expect(comp.checkHigherLower()).toEqual('You Win!' || 'Better Luck Next Time');
  }))
  

    it('should be return message',async(() => {
        
     const fixture = TestBed.createComponent(PlayGameComponent);
     let comp = fixture.componentInstance;
     comp.higher=true;
     comp.guestCard={
            "image": "https://deckofcardsapi.com/static/img/KH.png",
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
        };
      comp.mycard= {
            "image": "https://deckofcardsapi.com/static/img/8C.png",
            "value": "8",
            "suit": "CLUBS",
            "code": "8C"
        };
    expect(comp.checkHigherLower()).toEqual('You Win!' || 'Better Luck Next Time');
  }))});