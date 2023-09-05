import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escape',
  templateUrl: './escape.component.html',
  styleUrls: ['./escape.component.css']
})
export class EscapeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  desc = "With this light year calculator, we aim to help you calculate the distance that light can travel in a certain amount of time. A light year is a unit of measurement used in astronomy to describe the distance that light travels in one year. Since light travels at a speed of approximately 186,282 miles per second (299,792,458 meters per second), a light year is a significant distance — about 5.88 trillion miles (9.46 trillion km). "
  sol:number = 299792458
  time!:number
  distance!:number
  result = false

  calculate(){
    this.distance = this.sol * this.time
    this.result = true
  }
}
