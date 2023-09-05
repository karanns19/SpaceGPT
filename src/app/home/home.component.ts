import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  desc = "Welcome to the 21st-century space race, one that could potentially lead to 10-minute space vacations, orbiting space hotels, and humans on Mars. Now, instead of warring superpowers battling for dominance in orbit, private companies are competing to make space travel easier and more affordable. This year, SpaceX achieved a major milestone—launching humans to the International Space Station (ISS) from the United States—but additional goalposts are on the star-studded horizon. The International Space Station is a research laboratory in low Earth orbit. With many different partners contributing to its design and construction, this high-flying laboratory has become a symbol of cooperation in space exploration, with former competitors now working together."
  desc2 = "Humans are explorers. Since before the dawn of civilization, we’ve been lured over the horizon to find food or more space, to make a profit, or just to see what’s beyond those trees or mountains or oceans. Our ability to explore reached new heights—literally—in the last hundred years. Airplanes shortened distances, simplified travel, and showed us Earth from a new perspective. By the middle of the last century, we aimed even higher."  
  desc3 = "Our first steps into space began as a race between the United States and the former Soviet Union, rivals in a global struggle for power. Laika was followed into orbit four years later by the first human, Soviet Cosmonaut Yuri A. Gagarin. With Earth orbit achieved, we turned our sights on the moon. The United States landed two astronauts on its stark surface in 1969, and five more manned missions followed. The U.S.’s National Aeronautics and Space Administration (NASA) launched probes to study the solar system. Manned space stations began glittering in the sky. NASA developed reusable spacecraft—space shuttle orbiters—to ferry astronauts and satellites to orbit. Space-travel technology had advanced light-years in just three decades. Gagarin had to parachute from his spaceship after reentry from orbit. The space shuttle leaves orbit at 16,465 miles an hour (26,498 kilometers an hour) and glides to a stop on a runway without using an engine."

  started(){
    window.location.reload()
  }
}
