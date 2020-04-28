// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished,
// return a string representing the original linked list's values backwards
// in the following format:
//
//                             'A -> B -> C -> D'
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
//
// -----------
// Let's code!
// -----------

function iterateAcrossLinkedListBackwards(linkedList) {
  // TODO: Implement the iterateAcrossLinkedListBackwards function here
  let str = "";

  if (!linkedList.length) return str;

  const stack = new Stack();
  let node = linkedList.head;

  while (node) {
    stack.push(node.value);
    node = node.next;
  }

  while (stack.size() > 1) {
    const current = stack.pop();
    str += `${current} -> `;
  }

  str += `${stack.pop()}`;

  return str;
}

// Stack

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
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
    return temp.value;
  }

  size() {
    return this.length;
  }
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
