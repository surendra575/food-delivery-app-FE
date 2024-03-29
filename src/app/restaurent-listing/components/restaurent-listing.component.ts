import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Restaurent} from 'src/app/Shared/models/Restaurent'
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-restaurent-listing',
  templateUrl: './restaurent-listing.component.html',
  styleUrls: ['./restaurent-listing.component.css']
})
export class RestaurentListingComponent {
  public restaurantList: Restaurent[];

  ngOnInit(){
    this.getAllRestaurants();
  }

  constructor(private router: Router,private restaurantService: RestaurantService){

  }
  getAllRestaurants(){
    this.restaurantService.getAllRestaurants().subscribe(
      data =>{
        this.restaurantList=data;
      }
    )
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomImage(): string {
    const imageCount = 8; // Adjust this number based on the number of images in your asset folder
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpg`; // Replace with your image filename pattern
  }

  onButtonClick(id: any) {
    this.router.navigate(['/food-catalogue', id]);
  }


}
