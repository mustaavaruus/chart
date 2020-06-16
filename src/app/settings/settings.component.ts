import { Component, OnInit, Input } from '@angular/core';


export interface Card {
  id: number;
  line: string;
  color: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})


export class SettingsComponent implements OnInit {

  @Input() settings: Card[]

  constructor() { }

  settingsCards: Card[] = [
    {id: 0, line: 'bar',color: 'rgba(255, 99, 132, 0.4)'},
    {id: 1, line: 'line',color: 'rgba(99, 255, 132, 0.4)'},
    {id: 2, line: 'radar',color: 'rgba(82, 59, 255, 0.4)'},
    {id: 3, line: 'doughnut',color: 'rgba(234, 234, 55, 0.4)'}
  ]

  ngOnInit(): void {
  }

}
