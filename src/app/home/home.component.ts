import { Component, OnInit } from '@angular/core';

export interface Chart {
  id: number;
  name: string;
  type: string;
  color: string;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  charts:Chart[] = [
    {id: 0, name: 'chart 1 (temperature)', type: "line", color: "rgba(255, 99, 132, 0.5)"},
    {id: 1, name: 'chart 2 (light)', type: "bar", color: "rgba(99, 255, 132, 0.2)"},
    {id: 2, name: 'chart 3 (humidity)', type: "doughnut", color: "rgba(82, 59, 255, 0.4)"},
    {id: 3, name: 'chart 4 (something)', type: "radar", color: "rgba(82, 59, 255, 0.4)"}
  ] 

  

  ngOnInit(): void {
  }

}
