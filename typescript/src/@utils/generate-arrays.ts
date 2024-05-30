export class GenerateArrays {
  static GenerateOrdenedNumbersArray(size: number): Array<number> {
    const array = new Array<number>();

    for (let i = 0; i <= size; i++) {
      array.push(i);
    }
    return array;
  }
}
