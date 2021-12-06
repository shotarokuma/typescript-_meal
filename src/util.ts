export interface Named {
  readonly name: string;
}
export interface Priced {
  readonly price: number;
}
export default interface Valued extends Priced {
  readonly value: number;
  isBetterValue(o: Valued): boolean;
  isBetterValue(o: number): boolean;
  isBetterValue(o: Valued | number): boolean;
}


