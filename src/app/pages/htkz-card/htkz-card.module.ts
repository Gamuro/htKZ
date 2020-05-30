import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtkzCardComponent } from './htkz-card.component';



@NgModule({
  declarations: [HtkzCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: HtkzCardComponent,
    }])
  ]
})
export class HtkzCardModule { }
