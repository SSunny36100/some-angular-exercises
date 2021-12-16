import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameControlComponent } from "./game-control/game-control.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];


  @ViewChild(GameControlComponent) controlPanel: any;

  ngAfterViewInit(): void {
    let myNumber$ = (<Observable<number>>this.controlPanel.number$).subscribe(_ => _ % 2 === 0? this.evenNumbers.push(_) : this.oddNumbers.push(_));

  }

  sortNumber(x: number): void {

  }


  title = 'databinding-ass-resolution';

  message = "my message"



}
