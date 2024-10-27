import { MealCollection } from "./meal-collection.model";
import { Meal } from "./meal.model";

export class WeeklyMealCollection extends MealCollection {

  setMonday(meal: Meal) {
    this.addMeal('monday', meal)
    return this
  }
  setTuesday(meal: Meal) {
    this.addMeal('tuesday', meal)
    return this
  }
  setWednesday(meal: Meal) {
    this.addMeal('wednesday', meal)
    return this
  }
  setThursday(meal: Meal) {
    this.addMeal('thursday', meal)
    return this
  }
  setFriday(meal: Meal) {
    this.addMeal('friday', meal)
    return this
  }
  setSaturday(meal: Meal) {
    this.addMeal('saturday', meal)
    return this
  }
  setSunday(meal: Meal) {
    this.addMeal('sunday', meal)
    return this
  }

}
