// Linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.root = null;
  }

  append(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      let current = this.root;

      while(current.next) {
        current = current.next;
      }

      current.next = new Node(value);
    }
  }

  prepend(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      const nextNode = this.root;
      this.root = new Node(value);
      this.root.next = nextNode;
    }
  }

  getSize() {
    if (!this.root) {
      return 0;
    }

    let size = 1;

    let current = this.root;

    while(current.next) {
      current = current.next;
      size++;
    }

    return size;
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(40);
list.prepend(50);
list.prepend(60);
console.log(list);
console.log(list.getSize());
