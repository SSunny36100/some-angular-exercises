import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  
  @Input() evenNumbers : number[] = [];

  @Input() test = 'test';

  constructor() { }

  ngOnInit(): void {
  } 

}
