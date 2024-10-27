import { CountedFoodItem } from "./counted-food-item.model";

export interface RequiredFoodItem extends CountedFoodItem {
  type: 'required'
}

export function createRequiredFoodItem(item: CountedFoodItem): RequiredFoodItem {
  return ({
    ...item,
    type: 'required'
  })
}


