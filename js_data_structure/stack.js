// Stack - стопка. LIFO - Last In First Out
class Stack {
  constructor() {
    this.storage = [];
  }

  push(value) {
    this.storage.push(value);
  }

  pop() {
    this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

  getSize() {
    return this.storage.length;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop();
console.log(stack);
console.log(stack.peek());
console.log(stack.getSize());
