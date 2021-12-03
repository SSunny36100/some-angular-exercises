import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  template: `
    <p>
      even works!
    </p>
  `,
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
