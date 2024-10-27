import { FoodItemStore } from "../lib/food-item.store";
import { createRequiredFoodItem, RequiredFoodItem } from "./required-food-item.model";

export class Recipe {
  constructor() {}

  store = new FoodItemStore(createRequiredFoodItem)

  addFoodItem(name: string, count?: number) {
    this.store.add({ name, count: count ?? 1 })
    return this;
  }

  getAllFoodItems(): RequiredFoodItem[] {
    return this.store.getAll();
  }
}

