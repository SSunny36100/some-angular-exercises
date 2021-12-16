import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  
  @Input('numberz') numbersEmitted = 'dsadsaasdw';
  @Input() test = 'test';

  constructor() { }

  ngOnInit(): void {
  } 

}
