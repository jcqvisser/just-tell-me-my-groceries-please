import { FoodItemStore } from "../lib/food-item.store";
import { MealCollection } from "./meal-collection.model";
import { Meal } from "./meal.model";
import { createOwnedFoodItem } from "./owned-food-item.model";
import { RequiredFoodItem } from "./required-food-item.model";

export class Cupboard {
  private store = new FoodItemStore(createOwnedFoodItem);

  add(name: string, count?: number) {
    this.store.add({ name, count: count ?? 1 })
    return this;
  }

  findFoodItemsToBuyForMeal(meal: Meal): RequiredFoodItem[] {
    return this.store
      .subtractStoreItemsFromItems(meal.getAllFoodItems())
      .filter(mi => mi.count > 0)
  }

  findFoodItemsToBuyForWeek(mealCollection: MealCollection): RequiredFoodItem[] {
    return this.store.subtractStoreItemsFromItems(mealCollection.getRequiredFoodItems())
  }

  findRemainsAfter(meals: MealCollection) {
    return this.store
      .subtractItemsFromStoreItems(meals.getRequiredFoodItems())
      .filter(item => item.count > 0)
  }
}
