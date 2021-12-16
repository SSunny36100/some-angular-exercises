import { NumberSymbol } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, interval, of, Subject, Subscription, Observable } from 'rxjs';
import { repeat, take, tap, map, share, throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy {
 

  number$ = interval(1000).pipe(map(_ => _+1), share());

 

 
  ngOnInit(): void { 
  

  }
  ngOnDestroy(): void {
    
  }
  constructor(){    
    
  }
  
}
