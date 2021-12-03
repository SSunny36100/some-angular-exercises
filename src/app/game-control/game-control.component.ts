import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Subject } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl:'./game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  numbers = interval(1000);
  takeNum = this.numbers;

  

  constructor() { }

  ngOnInit(): void {
  }

}
