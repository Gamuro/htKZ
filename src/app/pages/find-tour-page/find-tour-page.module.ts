import { ToursTableComponent } from './../../components/tours-table/tours-table.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FindTourFormComponent } from './../../components/find-tour-form/find-tour-form.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindTourPageComponent } from './find-tour-page.component';

import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';



@NgModule({

  declarations: [FindTourPageComponent, FindTourFormComponent, ToursTableComponent],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: FindTourPageComponent,
    }]),
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,

  ],
})
export class FindTourPageModule { }
