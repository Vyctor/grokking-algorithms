export class GenerateArrays {
  static GenerateOrdenedNumbersArray(size: number): Array<number> {
    const array = new Array<number>();

    for (let i = 0; i <= size; i++) {
      array.push(i);
    }
    return array;
  }

  static GenerateRandomNumbersArray(size: number): Array<number> {
    const array = new Array<number>();

    for (let i = 0; i < size; i++) {
      array.push(Math.floor(Math.random() * size));
    }
    return array;
  }
}
