import { Stack } from "./@stack/stack";
import { GenerateArrays } from "./@utils/generate-arrays";

const array = GenerateArrays.GenerateRandomNumbersArray(10);

const stack = new Stack<number>();

array.forEach((element) => {
  stack.push(element);
});

stack.print();
console.log("Stack size: ", stack.size());
console.log("Stack peek: ", stack.peek());
console.log("Stack isEmpty: ", stack.isEmpty());
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log("Stack size: ", stack.size());
console.log("Stack peek: ", stack.peek());
console.log("Stack isEmpty: ", stack.isEmpty());
