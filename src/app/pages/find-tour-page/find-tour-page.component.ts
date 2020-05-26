import { DataTour } from './../../interfaces/tour.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-tour-page',
  templateUrl: './find-tour-page.component.html',
  styleUrls: ['./find-tour-page.component.scss']
})
export class FindTourPageComponent implements OnInit {
  public dataTour: DataTour;

  constructor() { }

  ngOnInit(): void {

  }


  dataChanged(event) {
    this.dataTour = event;
    console.log('page', this.dataTour);
  }
}
