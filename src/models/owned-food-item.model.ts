import { CountedFoodItem } from "./counted-food-item.model";

export interface OwnedFoodItem extends CountedFoodItem{
  type: 'owned';
}

export function createOwnedFoodItem(item: CountedFoodItem): OwnedFoodItem {
  return ({ ...item, type: 'owned'})
}

