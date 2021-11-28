// Queue - очередь. FIFO - First In First Out
class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(value) {
    this.storage.push(value);
  }

  dequeue() {
    this.storage.shift();
  }

  head() {
    return this.storage[0];
  }

  length() {
    return this.storage.length;
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue);
queue.dequeue();
console.log(queue);
console.log(queue.head());
console.log(queue.length());
