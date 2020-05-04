class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }
  
  getLeftChild(idx) {
    return idx * 2;
  }
  
  getRightChild(idx) {
    return idx * 2 + 1;
  }

  siftUp(idx) { 
    let parentIdx = this.getParent(idx);
    
    if (this.array[idx] < this.array[parentIdx] || !parentIdx) return;
    
    if (this.array[idx] > this.array[parentIdx]) {
      [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
      
      this.siftUp(parentIdx);
    }
    
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }
  

  siftDown(idx) { 
    // idx = 1 , 3
    let arr = this.array;
    let leftChildIdx = this.getLeftChild(idx); // 2, 6
    let rightChildIdx = this.getRightChild(idx); // 3, undefined 
    let leftChildVal = arr[leftChildIdx]; // 30, 16
    let rightChildVal = arr[rightChildIdx]; // 40, undefined

    //edge cases no children. we want to make sure the given value ends up as 
    //the parent of the next possible children. setting the values to -Infinity
    //make it possible to compare values
    if (!leftChildVal) leftChildVal = -Infinity;
    if (!rightChildVal) rightChildVal = -Infinity;

    //if both the children are smaller than value at the given index then it's 
    //in the right place and we can stop sifting down

    if( arr[idx] > leftChildVal && arr[idx] > rightChildVal) return;

    let idxToSwapWith;
    
    if(leftChildVal < rightChildVal) {
      idxToSwapWith = rightChildIdx; // 
    } else { 
      // leftChildVal > rightChildVal
      idxToSwapWith = leftChildIdx;
    }
    // idx = 1 , //idxToSwapWith = 3
    [ arr[idx], arr[idxToSwapWith] ] = [ arr[idxToSwapWith], arr[idx] ];
    
    this.siftDown(idxToSwapWith)
  }
}

module.exports = {
  MaxHeap
};