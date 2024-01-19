import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodItemService } from '../service/fooditem.service';
import { FoodCateloguePage } from 'src/app/Shared/models/FoodCateloguePage';
import { FoodItem } from 'src/app/Shared/models/FoodItem';

@Component({
  selector: 'app-food-catelogue',
  templateUrl: './food-catelogue.component.html',
  styleUrls: ['./food-catelogue.component.css']
})
export class FoodCatelogueComponent {

  restaurantId: number;
  foodItemResponse: FoodCateloguePage;
  foodItemCart: FoodItem[] = [];
  orderSummary: FoodCateloguePage;


  //The first param of constructor is ActivatedRoute, Using this we will get data i.e restaurent id from restuarent router.
  //The second param is injecting the FoodItem service to food-catelogue component
  //The third param is to route the info from this food-catelogue router to another router (like order router)
  constructor(private route: ActivatedRoute, private foodItemService: FoodItemService, private router: Router){}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.restaurantId = +params.get('id');
    });

    this.getFoodItemsByRestaurant(this.restaurantId);
    
  }

  getFoodItemsByRestaurant(restaurant: number) {
    this.foodItemService.getFoodItemsByRestaurant(restaurant).subscribe(
      data => {
        this.foodItemResponse = data;
        
      }
    )
  }

  increment(food: any) {
    food.Quantity++;
    const index = this.foodItemCart.findIndex(item => item.id === food.id);
    if (index === -1) {
      // If record does not exist, add it to the array
      this.foodItemCart.push(food);
    } else {
      // If record exists, update it in the array
      this.foodItemCart[index] = food;
    }
  }

  decrement(food: any) {
    if (food.Quantity > 0) {
      food.Quantity--;

      const index = this.foodItemCart.findIndex(item => item.id === food.id);
      if (this.foodItemCart[index].Quantity == 0) {
        this.foodItemCart.splice(index, 1);
      } else {
        // If record exists, update it in the array
        this.foodItemCart[index] = food;
      }

    }
  }

  onCheckOut() {
    this.foodItemCart;
    this.orderSummary = {
      foodItemsList: [],
      restaurent: null
    }
    this.orderSummary.foodItemsList = this.foodItemCart;
    this.orderSummary.restaurent = this.foodItemResponse.restaurent;
    
    this.router.navigate(['/orderSummary'], { queryParams: 
      { data: JSON.stringify(this.orderSummary) } });
  }
}
