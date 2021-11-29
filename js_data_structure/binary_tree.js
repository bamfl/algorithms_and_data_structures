// Binary tree - бинарное дерево
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      let current = this.root;

      while(current) {
        if (value > current.value) {
          if (!current.right) {
            break;
          }
          current = current.right;
        } else {
          if (!current.left) {
            break;
          }
          current = current.left;
        }
      }

      if (value > current.value) {
        current.right = new TreeNode(value);
      } else {
        current.left = new TreeNode(value);
      }
    }
  }

  print(root = this.root) {
    if (!root) {
      return true;
    }

    console.log(root.value);
    this.print(root.left);
    this.print(root.right);
  }
}

const tree = new BinaryTree();
tree.add(5);
tree.add(2);
tree.add(6);
tree.add(2);
tree.add(1);
tree.print();
