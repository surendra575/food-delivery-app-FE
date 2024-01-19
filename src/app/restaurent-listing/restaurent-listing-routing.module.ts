import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurentListingComponent } from './components/restaurent-listing.component';

const routes: Routes = [
  {path:'', component: RestaurentListingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurentListingRoutingModule { }
