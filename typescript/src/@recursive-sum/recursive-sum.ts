export class RecursiveSum {
  execute(number: number[]): number {
    if (number.length === 0) {
      return 0;
    }

    return number[0] + this.execute(number.slice(1));
  }
}
