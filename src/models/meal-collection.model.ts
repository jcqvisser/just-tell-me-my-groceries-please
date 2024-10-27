import { FoodItemStore } from "../lib/food-item.store";
import { Meal } from "./meal.model";
import { createRequiredFoodItem, RequiredFoodItem } from "./required-food-item.model";

export class MealCollection {
  private meals: Record<string, Meal> = {}

  addMeal(key: string, meal: Meal) {
    this.meals[key] = meal;
    return this;
  }

  forMeal(callback: (meal: Meal, index: number) => void) {
    return Object.values(this.meals).forEach(callback)
  }

  forItem(callback: (item: RequiredFoodItem) => void){
    return Object.values(this.meals).flatMap(m => m.getAllFoodItems()).forEach(callback)
  }


  getRequiredFoodItems(): RequiredFoodItem[] {
    const store = new FoodItemStore(createRequiredFoodItem);
    Object.values(this.meals).forEach(meal => store.addAll(meal.getAllFoodItems()))
    return store.getAll()
  }
}
