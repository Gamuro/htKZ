import { DataTour, Tour } from './../../interfaces/tour.interface';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-tours-table',
  templateUrl: './tours-table.component.html',
  styleUrls: ['./tours-table.component.scss']
})
export class ToursTableComponent implements OnInit, OnChanges {
  @Input() dataTour: DataTour;
  displayedColumns: string[] = ['hotelName', 'price', 'currency'];
  public dataSource: Tour[];

  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = this.dataTour?.tours;
  }

}
