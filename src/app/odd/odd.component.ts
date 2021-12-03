import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: `
    <p>
      odd works!
    </p>
  `,
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
