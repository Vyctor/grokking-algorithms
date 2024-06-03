export class BubbleSort {
  sort(array: number[], direction: "asc" | "desc" = "asc"): number[] {
    direction === "desc"
      ? console.log("Ordenando de forma decrescente")
      : console.log("Ordenando de forma crescente");

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (direction === "desc") {
          if (array[i] < array[j]) {
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
        } else {
          console.log("Ordenando de forma decrescente");
          if (array[i] > array[j]) {
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
        }
      }
    }
    return array;
  }
}
