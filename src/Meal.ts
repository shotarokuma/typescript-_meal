import Valued from './util';
import FoodItem from './FoodItem';

export interface Meal extends Valued {
  readonly cals: number;
  add(food: FoodItem): Meal;
}

export class MealImpl implements Meal {
  private foods: FoodItem[];
  private _cals: number;
  private _price: number;
  private _value: number;
  constructor() {
    this.foods = [];
    this._cals = 0;
    this._price = 0;
    this._value = 0;
  }
  get cals(): number {
    return this._cals;
  }
  get price(): number {
    return this._price;
  }
  get value(): number {
    return this._value;
  }
  isBetterValue(o: Valued): boolean;
  isBetterValue(o: number): boolean;
  isBetterValue(o: Valued | number): boolean {
    if (typeof o === 'number') {
      if (this.value > o) {
        return true;
      } else {
        return false;
      }
    } else {
      if (this.value > o.value) {
        return true;
      } else {
        return false;
      }
    }
  }
  add(food: FoodItem): MealImpl {
    this.foods.push(food);
    this._cals = this._cals + food.cals;
    this._price = this._price + food.price;
    this._value = this._cals / this._price;
    return this;
  }
}