import { FoodItemStore } from "../lib/food-item.store";
import { Recipe } from "./recipe";
import { createRequiredFoodItem, RequiredFoodItem } from "./required-food-item.model";

export class Meal {

  constructor() {}

  store = new FoodItemStore(createRequiredFoodItem)

  addRecipe(recipe: Recipe) {
    recipe.getAllFoodItems().forEach(item => this.addFoodItem(item.name, item.count))
    return this;
  }

  addFoodItem(name: string, count?: number) {
    this.store.add({ name, count: count ?? 1 })
    return this;
  }

  getAllFoodItems(): RequiredFoodItem[] {
    return this.store.getAll();
  }
}
