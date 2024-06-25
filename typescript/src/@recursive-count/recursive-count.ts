export class RecursiveCount {
  execute(data: any[]): number {
    if (data.length === 0) {
      return 0;
    }

    return 1 + this.execute(data.slice(1));
  }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const recursiveCount = new RecursiveCount();
console.log(recursiveCount.execute(array));
