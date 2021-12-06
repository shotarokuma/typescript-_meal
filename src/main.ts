import { FoodItemImpl } from './FoodItem';
import { MealImpl } from './Meal';
import Valued from './util';



function getBestValue(...meals: Valued[]): Valued {
  let bestValue = meals[0];
  for (let i = 1; i < meals.length; i++) {
    if (meals[i].isBetterValue(bestValue)) {
      bestValue = meals[i];
    }
  }
  return bestValue;
}


const meal1 = new MealImpl()
  .add(new FoodItemImpl("rice", 9, 300))
  .add(new FoodItemImpl("pork", 8, 500))
  .add(new FoodItemImpl("salda", 4, 100));
const meal2 = new MealImpl()
  .add(new FoodItemImpl("rice", 9, 300))
  .add(new FoodItemImpl("salmon", 8, 400))
  .add(new FoodItemImpl("salada", 4, 100));
const meal3 = new FoodItemImpl(" ", 0, 100000);

console.log(getBestValue(meal1, meal2, meal3));




