/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PlayGameComponent } from 'app/components/playgame/playgame.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    
    imports:[MaterialModule.forRoot(),
      RouterTestingModule.withRoutes([
               {
      path: '',
      component: AppComponent
  }
        ])]
      ,
  
      declarations: [
        AppComponent,PlayGameComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'CodeChallenge'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('CodeChallenge');
  }));

 
});
