import { TestBed, async } from '@angular/core/testing';
import {PlayGameComponent} from './playgame.component';
import { DeckcardsService } from 'app/services/deckcards.service';
import { MaterialModule } from '@angular/material';



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

    it('should be undefined',async(() => {
        
     const fixture = TestBed.createComponent(PlayGameComponent);
     let comp = fixture.componentInstance;
    expect(comp.checkHigherLower()).toBeUndefined();
  }))});