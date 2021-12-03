import { NumberSymbol } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, interval, Subject, Subscription } from 'rxjs';
import { repeat, take, tap, map, share } from 'rxjs/operators';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy {

  @Output() number$ = interval(1000).pipe(map(_ => _+1), share());

  myNumbers =  this.number$.subscribe(x => console.log(x));

  constructor() { }
  ngOnDestroy(): void {
    this.myNumbers.unsubscribe();
  }

  ngOnInit(): void {   


  }

}
