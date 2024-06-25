export class RecursiveMaximumNumber {
  public execute(numbers: number[], max?: number): number {
    if (numbers.length === 0) {
      return 0;
    }

    return this.execute(numbers.slice(1), max) > numbers[0]
      ? this.execute(numbers.slice(1), max)
      : numbers[0];
  }
}

const numbers = [1, 2, 3, 4, 5000, 6, 7, 8, 9, 10, 1000];

const recursiveMax = new RecursiveMaximumNumber();
console.log(recursiveMax.execute(numbers));
