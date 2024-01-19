import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodCatelogueRoutingModule } from './food-catelogue-routing.module';
import { FoodCatelogueComponent } from './components/food-catelogue.component';


@NgModule({
  declarations: [
    FoodCatelogueComponent
  ],
  imports: [
    CommonModule,
    FoodCatelogueRoutingModule
  ]
})
export class FoodCatelogueModule { }
