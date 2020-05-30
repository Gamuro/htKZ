import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-htkz-card',
  templateUrl: './htkz-card.component.html',
  styleUrls: ['./htkz-card.component.scss']
})
export class HtkzCardComponent implements OnInit {
  public cards = [1, 2, 3, 4, 5, 6];

  constructor() { }

  ngOnInit(): void {
  }

}
