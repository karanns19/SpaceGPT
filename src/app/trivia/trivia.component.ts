import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  TriviaFacts1 = [
    "The largest rocket is over 300 feet tall",
    "Rocket power is measured in thrust",
    "Liquid-fuel rockets are more powerful than solid-fuel rockets",
    "The Saturn V rockets were the most successful rockets ever launched",
  ]

  TriviaFacts2 = [
    "Rockets are used to deliver cargo to the International Space Station",
    "The First Photograph Of The Earth From A Rocket Was Taken In 1946",
    "A FULL NASA SPACE SUIT COSTS $12,000,000",
    "THE SUN’S MASS TAKES UP 99.86% OF THE SOLAR SYSTEM",
  ]

  TriviaFacts3 = [
    "THERE ARE MORE TREES ON EARTH THAN STARS IN THE MILKY WAY",
    "ONE MILLION EARTHS CAN FIT INSIDE THE SUN",
    "ONE DAY ON VENUS IS LONGER THAN ONE YEAR",
    "THERE IS A PLANET MADE OF DIAMONDS", 
  ]

}
