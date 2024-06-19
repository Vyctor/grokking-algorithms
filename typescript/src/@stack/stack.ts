export class Stack<T> {
  private items: Array<T> = new Array<T>();

  public clear(): void {
    this.items = new Array<T>();
  }

  public push(item: T): void {
    this.items.push(item);
  }

  public pop(): void {
    this.items.pop();
  }

  public peek(): T {
    return this.items[this.items.length - 1];
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public size(): number {
    return this.items.length;
  }

  public print(): void {
    console.log("Stack: ", this.items);
  }
}
