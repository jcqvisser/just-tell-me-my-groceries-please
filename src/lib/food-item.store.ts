import { CountedFoodItem } from "../models/counted-food-item.model";
import { MealCollection } from "../models/meal-collection.model";
import { RequiredFoodItem } from "../models/required-food-item.model";

export class FoodItemStore<TFoodItem extends CountedFoodItem> implements Iterator<TFoodItem> {
  private readonly store: TFoodItem[] = [];

  constructor(private readonly createFoodItem: (item: CountedFoodItem) => TFoodItem) { }

  next(): IteratorResult<TFoodItem, any> {
    let index = 0;
    const foodItems = this.store;

    if (index > foodItems.length) {
      return { value: null, done: true }
    } else {
      return { value: foodItems[index++], done: false }
    }
  }

  add(foodItem: CountedFoodItem): void {
    const { name, count } = foodItem;

    const foundMaybe = this.get(name);

    if (foundMaybe !== undefined) {
      foundMaybe.count = foundMaybe.count + count;
    } else {
      this.store.push(this.createFoodItem(foodItem));
    }
  }

  addAll(foodItems: CountedFoodItem[]): void {
    for (const foodItem of foodItems) { this.add(foodItem) }
  }

  get(foodItemName: string): TFoodItem | undefined {
    const foundMaybe = this.store.find((fi) => fi.name === foodItemName);
    return foundMaybe;
  }

  getAll(): TFoodItem[] {
    return this.store;
  }


  subtractStoreItemsFromItems(items: RequiredFoodItem[]): RequiredFoodItem[] {
    return items.map(
      (mi: RequiredFoodItem) => ({ ...mi, count: this.subtractStoreCountFromItemCount(mi) })
    ).filter(mi => mi.count > 0)
  }


  subtractItemsFromStoreItems(items: RequiredFoodItem[]): TFoodItem[] {
    return this.getAll().map(
      storeItem => ({... storeItem, count: storeItem.count - this.findItemCount(storeItem.name, items)})
    )
  }

  subtractStoreCountFromItemCount(fi: RequiredFoodItem): number {
    const inStore = this.get(fi.name) ?? { ...fi, count: 0 };
    return fi.count - inStore.count
  }

  private findItemCount(name: string, items: CountedFoodItem[] ): number {
    return items.find(item => item.name === name)?.count ?? 0
  }

}

