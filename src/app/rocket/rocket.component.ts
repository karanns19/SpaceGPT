import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  desc = "The ideal rocket equation describes the motion of a device that can apply an acceleration to itself using thrust. Such a rocket burns the propelling fuel and simultaneously reduces its weight.  Burned propellants are exhausted from the nozzle, and the rocket accelerates as a result of the conservation of momentum. We should use the Tsiolkovsky rocket equation only in simple cases when no other external forces act on a rocket. In real motion, the rocket has to overcome both air resistance and gravity, which was taken into account by Tsiolkovsky in his further, more complicated, studies."
  effVelo!:number
  InitialMass!:number
  FinalMass!:number
  changeVelo!:number
  result = false

  calculate(){
    this.changeVelo = Number((this.effVelo * Math.log(this.InitialMass/this.FinalMass)).toFixed(3))
    this.result = true
  }
}
