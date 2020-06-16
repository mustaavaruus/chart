import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../settings/settings.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() settingsCards: Card
  constructor() { }

  ngOnInit(): void {
  }

}
