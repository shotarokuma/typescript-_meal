import Valued from './util';
import Named from './util';

export default interface FoodItem extends Named, Valued {
  readonly cals: number;
}

export class FoodItemImpl implements FoodItem {
  readonly name: string;
  readonly price: number;
  readonly value: number;
  readonly cals: number;
  constructor(name: string, price: number, cals: number) {
    this.name = name;
    this.price = price;
    this.cals = cals;
    this.value = cals / price
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
}