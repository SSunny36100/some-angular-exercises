import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import {GameControlComponent} from "./game-control/game-control.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit{

  emittedNumbers : number[] = [];

  @ViewChild(GameControlComponent) controlPanel: any;

  ngAfterViewInit(): void {
    let myNumber$ = (<Observable<number>>this.controlPanel.number$).subscribe(_ => this.emittedNumbers.push(_));
        
  }

  title = 'databinding-ass-resolution';

  numbersPrinted: number[] = [];

  message = "my message"



}
