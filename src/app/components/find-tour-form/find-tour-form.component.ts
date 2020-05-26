import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { DataService } from 'src/app/services/data.service';
import { DataTour } from './../../interfaces/tour.interface';

@Component({
  selector: 'app-find-tour-form',
  templateUrl: './find-tour-form.component.html',
  styleUrls: ['./find-tour-form.component.scss']
})
export class FindTourFormComponent implements OnInit, OnChanges {
  @Output() dataChanged = new EventEmitter<DataTour>();
  public findTour: FormGroup;
  public departCity: FormControl;
  public country: FormControl;
  public nights: FormControl;
  public nightsTo: FormControl;
  public date: FormControl;
  public startDays = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  public endDays = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  public departCityList = [{
    id: 10,
    name: 'Алматы',
    avalibleFlights: [553, 554],
  },
  {
    id: 11,
    name: 'Астана',
  },
  ];
  public countryList = [
    {
      id: 552,
      name: 'Турция',
    },
    {
      id: 553,
      name: 'Тайланд',
    },
    {
      id: 554,
      name: 'Чехия',
    }
  ];
  public minDate;
  public maxDate;

  constructor(private dateAdapter: DateAdapter<any>, private dataService: DataService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
    this.dateAdapter.setLocale('ru');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', changes);
  }

  ngOnInit(): void {
    this.createFormFields();
    this.createFormGroup();
    this.findTour.valueChanges.subscribe(data => console.log('data', data));
  }

  createFormFields(): void {
    this.departCity = new FormControl();
    this.country = new FormControl();
    this.nights = new FormControl();
    this.nightsTo = new FormControl();
    this.date = new FormControl();
  }

  createFormGroup(): void {
    this.findTour = new FormGroup({
      departCity: this.departCity,
      country: this.country,
      nights: this.nights,
      nightsTo: this.nightsTo,
      date: this.date,
    });
  }

  submit() {
    console.log('submit', this.findTour);
    // this.dataService.getTours().subscribe(data => this.dataChanged.emit(data));
  }

}
