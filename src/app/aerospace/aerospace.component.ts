import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aerospace',
  templateUrl: './aerospace.component.html',
  styleUrls: ['./aerospace.component.css']
})
export class AerospaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  componentId:any = 1

  changeTabs(event:any){
    let index = event.target.id
    this.componentId = Number(index)
  }

}
