import { GenerateArrays } from "../@utils/generate-arrays";

export class QuickSort {
  execute(numbers: number[]): number[] {
    if (numbers.length < 2) return numbers;

    const randomPivotIndex = Math.floor(Math.random() * numbers.length);
    const pivot = numbers[randomPivotIndex];
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] < pivot) {
        leftArray.push(numbers[i]);
      } else {
        rightArray.push(numbers[i]);
      }
    }
    return [...this.execute(leftArray), pivot, ...this.execute(rightArray)];
  }
}

const unsortedArray = GenerateArrays.GenerateOrdenedNumbersArray(10_000_000);
const quickSort = new QuickSort();
console.log(quickSort.execute(unsortedArray));
