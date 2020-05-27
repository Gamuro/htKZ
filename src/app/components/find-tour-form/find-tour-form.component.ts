import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import * as m from 'moment';
import { DataService } from 'src/app/services/data.service';
import { DataTour } from './../../interfaces/tour.interface';
import { arrive } from '../../shared/arrive';
import { depart } from '../../shared/depart';

@Component({
  selector: 'app-find-tour-form',
  templateUrl: './find-tour-form.component.html',
  styleUrls: ['./find-tour-form.component.scss']
})
export class FindTourFormComponent implements OnInit {
  @Output() dataChanged = new EventEmitter<DataTour>();
  public findTour: FormGroup;
  public departCity: FormControl;
  public country: FormControl;
  public nights: FormControl;
  public nightsTo: FormControl;
  public date: FormControl;
  public minDate: Date;
  public maxDate: Date;
  public startDays = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  public endDays = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  public countryList = { ...arrive };
  public departCityList = { ...depart };

  constructor(private dateAdapter: DateAdapter<any>, private dataService: DataService) {

  }


  ngOnInit(): void {
    this.minDate = m().clone().add(1, 'day').toDate();
    this.maxDate = m().clone().add(60, 'day').toDate();
    this.dateAdapter.setLocale('ru');
    this.createFormFields();
    this.createFormGroup();
    this.onFormFieldsChanges();
  }


  createFormFields(): void {
    this.departCity = new FormControl('', [Validators.required]);
    this.country = new FormControl('', [Validators.required]);
    this.nights = new FormControl('', [Validators.required]);
    this.nightsTo = new FormControl('', [Validators.required]);
    this.date = new FormControl('', [Validators.required]);
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
  onFormFieldsChanges() {
    this.findTour.valueChanges.subscribe(data => {
      if (data.departCity) {
        this.countryList.ids = [...this.departCityList[data.departCity].avalibleFlights];
      } else {
        this.countryList.ids = [...arrive.ids];
      }
    });
  }

  submit() {
    if (this.findTour.valid) {
      this.dataService.getTours(this.findTour.value).subscribe(data => this.dataChanged.emit(data));
    }
  }

}
