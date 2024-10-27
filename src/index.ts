import { Cupboard } from "./models/cupboard.model";
import { Meal } from "./models/meal.model";
import { Recipe } from "./models/recipe";
import { WeeklyMealCollection } from "./models/weekly-meal-collection.model";


// Cupboard

const cupboard = new Cupboard();

cupboard.add('schnitzel', 4);
cupboard.add('kassler chop', 4);
cupboard.add('mince-unit', 3);
cupboard.add('potato sack', 0.33);
cupboard.add('rice', 0.75);
cupboard.add('butter', 0.5);
cupboard.add('mustard', 0.5);
cupboard.add('cheese', 0.25);
cupboard.add('cornflour', 0.5);
cupboard.add('pasta-flour', 0.5);
cupboard.add('olive oil', 0.5);
cupboard.add('eggs', 9)


// Recipes

const potatoSalad = new Recipe()
  .addFoodItem('potato sack', 0.25)
  .addFoodItem('parsley box', 0.25)
  .addFoodItem('celery pack', 0.25)
  .addFoodItem('mustard', 0.05)
  .addFoodItem('olive oil', 0.05)
  .addFoodItem('green onions', 0.05);

const mash = new Recipe()
  .addFoodItem('potato sack', 0.25)
  .addFoodItem('parsley box', 0.25)
  .addFoodItem('butter', 1 / 10)

const spagBol = new Recipe()
  .addFoodItem('mince-unit')
  .addFoodItem('pasta-flour', 0.5)
  .addFoodItem('eggs', 2)
  .addFoodItem('cheese', 1 / 10)

const wraps = new Recipe()
  .addFoodItem('wraps', 4)
  .addFoodItem('beef bits', 1)
  .addFoodItem('heat-resistant-leaves bag', 1)
  .addFoodItem('cheese', 1 / 10)
  .addFoodItem('cornflour', 1 / 20)
  .addFoodItem('mustard', 1 / 20)

const kasslerChopThing = new Recipe()
  .addFoodItem('kassler chop', 4)
  .addFoodItem('potato sack', 1 / 4)
  .addFoodItem('green beans', 1)

const riceAndVeggies = new Recipe()
  .addFoodItem('rice', 1 / 4)
  .addFoodItem('brocolli', 1 / 2)
  .addFoodItem('carrots', 1 / 2)
  .addFoodItem('chives', 1 / 2)

// Meals for the week
const week = new WeeklyMealCollection();

week.setSunday(
  new Meal()
    .addFoodItem('schnitzel', 2)
    .addRecipe(potatoSalad)
)
week.setMonday(
  new Meal().addRecipe(spagBol)
);
week.setTuesday(
  new Meal().addRecipe(kasslerChopThing)
);
week.setWednesday(
  new Meal().addRecipe(wraps)
);
week.setThursday(
  new Meal().addFoodItem('schnitzel', 2).addRecipe(riceAndVeggies)
);
week.setFriday(
  new Meal().addRecipe(spagBol)
);
week.setSaturday(
  new Meal().addRecipe(wraps)
);

const shoppingList = cupboard.findFoodItemsToBuyForWeek(week)
const remains = cupboard.findRemainsAfter(week);

console.log('# Meal plan')

console.log('## Required TODO: items are not compacted')
week.forItem(item => console.log(`- ${item.name} ${item.count}`) )

console.log('## Shopping list')
shoppingList.forEach(item => { console.log(`- [ ] ${item.name} ${item.count}`) })

console.log('## Remains:')
remains.forEach(item => { console.log(`- ${item.name} ${item.count}`) })









