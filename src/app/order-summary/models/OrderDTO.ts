import { FoodItem } from "src/app/Shared/models/FoodItem";
import { Restaurent } from "src/app/Shared/models/Restaurent";

//This model is for OrderDTOFromUI model class in OrderMS

export interface OrderDTO{
    foodItemsList?:any;
    userId?:number;
    restaurent?:Restaurent
}