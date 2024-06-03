export class SelectionSort {
  public sort(arr: Array<number>): Array<number> {
    const newArr = new Array<number>();
    const length = arr.length;

    for (let i = 0; i < length; i++) {
      const smallest = this.findSmallest(arr);
      newArr.push(arr.splice(smallest, 1)[0]);
    }
    return newArr;
  }

  private findSmallest(arr: Array<number>): number {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
        smallestIndex = i;
      }
    }
    return smallestIndex;
  }
}
