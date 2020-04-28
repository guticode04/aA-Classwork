// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  removeTail() {
    if (!this.tail) return undefined;
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = newTail.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  addToHead(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  removeHead() {
    let currentHead = this.head;
    if (!currentHead) return undefined;
    if (currentHead.next) {
      let newHead = currentHead.next;
      this.head = newHead;
    } else {
      this.head = null;
    }
    this.length--;
    if (!this.length) this.tail = null;
    return currentHead;
  }

  contains(target) {
    let node = this.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;
    let iter = 0;
    let current = this.head;
    while (iter !== index) {
      current = current.next;
      iter++;
    }
    return current;
  }

  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.value = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.addToHead(val);
    if (index === this.length) return !!this.addToTail(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);

    // A -> C
    // A.next = C
    // A -> [B] -> C    [B] is inserted newNode
    // A.next = B
    // B.next = C
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.removeHead();
    if (index === this.length) return this.removeTail();

    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
