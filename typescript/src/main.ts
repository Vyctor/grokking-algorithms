import { BubbleSort } from "./@bubble-sort/bubble-sort";
import { SelectionSort } from "./@selection-sort/selection-sort";
import { GenerateArrays } from "./@utils/generate-arrays";

const array = GenerateArrays.GenerateRandomNumbersArray(100_000);

const orderedArray = new SelectionSort().sort(array);

console.log("Array ordenado: ", orderedArray);
