import { DataTour, Tour } from './../../interfaces/tour.interface';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';



const ELEMENT_DATA = [
  { hotelName: 'Hydrogen', price: 1.0079, currency: 'H' },
  { hotelName: 'Helium', price: 4.0026, currency: 'He' },
  { hotelName: 'Lithium', price: 6.941, currency: 'Li' },
  { hotelName: 'Beryllium', price: 9.0122, currency: 'Be' },
  { hotelName: 'Boron', price: 10.811, currency: 'B' },
  { hotelName: 'Carbon', price: 12.0107, currency: 'C' },
  { hotelName: 'Nitrogen', price: 14.0067, currency: 'N' },
  { hotelName: 'Oxygen', price: 15.9994, currency: 'O' },
  { hotelName: 'Fluorine', price: 18.9984, currency: 'F' },
  { hotelName: 'Neon', price: 20.1797, currency: 'Ne' },
];

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
