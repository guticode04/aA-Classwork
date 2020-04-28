// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push
//   - Pop
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
  // TODO: Implement the Node class!
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  // TODO: Implement the Stack class!
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push({ value }) {
    let newNode = new Node(value);
    let tempNode;
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      tempNode = this.top;
      this.top = newNode;
      this.top.next = tempNode;
    }
    this.length++;
    return this.length;
    // return ++this.length;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const temp = this.top;
    this.top = this.top.next;
    this.length--;
    return temp;
  }

  size() {
    return this.length;
  }
}

class StackQueue {
  // TODO: Implement the StackQueue class!
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();

    this.front = this.outStack.top || this.inStack.bottom;

    // this.front = null;
    this.back = null;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.inStack.push(newNode);
    return this.size();
  }

  dequeue() {
    if (!this.front) return null;
    if (this.size() === 1) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
    }
    if (!this.outStack.size()) {
      while (this.inStack.size()) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }

  size() {
    return this.inStack.size() + this.outStack.size();
  }
}

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
