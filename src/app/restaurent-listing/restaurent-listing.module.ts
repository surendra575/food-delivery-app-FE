import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurentListingRoutingModule } from './restaurent-listing-routing.module';
import { RestaurentListingComponent } from './components/restaurent-listing.component';


@NgModule({
  declarations: [
    RestaurentListingComponent
  ],
  imports: [
    CommonModule,
    RestaurentListingRoutingModule
  ]
})
export class RestaurentListingModule { }
