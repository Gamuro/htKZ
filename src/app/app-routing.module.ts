import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  loadChildren: () => import('./pages/find-tour-page/find-tour-page.module').then(m => m.FindTourPageModule),
}, {
  path: 'verstka',
  loadChildren: () => import('./pages/htkz-card/htkz-card.module').then(m => m.HtkzCardModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
