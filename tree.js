export class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  export class Tree {
    constructor(arr) {
      this.root = this.buildTree([...new Set(arr)].sort((a, b) => a - b));
    }
  
    buildTree(arr) {
      if (arr.length === 0) return null;
      const mid = Math.floor(arr.length / 2);
      const root = new Node(arr[mid]);
      root.left = this.buildTree(arr.slice(0, mid));
      root.right = this.buildTree(arr.slice(mid + 1));
      return root;
    }
  
    insert(root, value) {
      if (root === null) return new Node(value);
      if (root.value === value) return root;
      if (value < root.value)
        root.left = this.insert(root.left, value);
      else
        root.right = this.insert(root.right, value);
      return root;
    }
  
    deleteNode(root, x) {
      if (root === null) return root;
      if (x < root.value) {
        root.left = this.deleteNode(root.left, x);
      } else if (x > root.value) {
        root.right = this.deleteNode(root.right, x);
      } else {
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;
        let succ = this.getSuccessor(root);
        root.value = succ.value;
        root.right = this.deleteNode(root.right, succ.value);
      }
      return root;
    }
  
    getSuccessor(curr) {
      curr = curr.right;
      while (curr && curr.left) {
        curr = curr.left;
      }
      return curr;
    }
  
    find(value, node = this.root) {
      if (!node) return null;
      if (value === node.value) return node;
      return value < node.value ? this.find(value, node.left) : this.find(value, node.right);
    }
  
    depth(value, node = this.root, depth = 0) {
      if (!node) return null;
      if (value === node.value) return depth;
      return value < node.value
        ? this.depth(value, node.left, depth + 1)
        : this.depth(value, node.right, depth + 1);
    }
  
    height(value) {
      const node = this.find(value);
      if (!node) return null;
      const heightHelper = (n) => {
        if (!n) return -1;
        return 1 + Math.max(heightHelper(n.left), heightHelper(n.right));
      };
      return heightHelper(node);
    }
  
    isBalanced(node = this.root) {
      if (!node) return true;
      const height = (n) => (!n ? -1 : 1 + Math.max(height(n.left), height(n.right)));
      const leftHeight = height(node.left);
      const rightHeight = height(node.right);
      const diff = Math.abs(leftHeight - rightHeight);
      return diff <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right);
    }
  
    rebalance() {
      const values = [];
      this.inOrder((node) => values.push(node.value));
      this.root = this.buildTree(values);
    }
  
    inOrder(callback, node = this.root) {
      if (!callback || !node) return;
      this.inOrder(callback, node.left);
      callback(node);
      this.inOrder(callback, node.right);
    }
  
    preOrder(callback, node = this.root) {
      if (!callback || !node) return;
      callback(node);
      this.preOrder(callback, node.left);
      this.preOrder(callback, node.right);
    }
  
    postOrder(callback, node = this.root) {
      if (!callback || !node) return;
      this.postOrder(callback, node.left);
      this.postOrder(callback, node.right);
      callback(node);
    }
  
    levelOrder(callback) {
      if (!callback) return;
      const queue = [this.root];
      while (queue.length > 0) {
        const current = queue.shift();
        callback(current);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
    }
  }