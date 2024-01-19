import { FoodItem } from "./FoodItem";
import { Restaurent } from "./Restaurent";

export interface FoodCateloguePage{
    foodItemsList: FoodItem[];
    restaurent: Restaurent;
}