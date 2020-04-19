//1)heaps
/*
    Very similar to a binary search tree, but with some different rules!
    In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes
*/

//1.a) max binary heap
/*
    Each parent has at most two child nodes
    The value of each parent node is always greater than its child nodes
    In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
    A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first
    No Implied Ordering Between Siblings
*/

// what about min binary heap? Same idea, min values go upwards

/*
    Binary Heaps are used to implement Priority Queues, which are very commonly used data structures
    They are also used quite a bit, with graph traversal algorithms
    We'll come back to this!
*/

// storing a binary heap using array or list
/*
    REPRESENTING A HEAP
        For any index of an array n
        The left child is stored at 2n + 1
        The right child is at 2n + 2

    WHAT IF WE HAVE A CHILD NODE AND WANT TO FIND ITS PARENT?
        For any child node at index  n...
        Its parent is at index (n-1)/2
*/

// 1.b) insert - Add to the end then Bubble up

// pseudocode insert
/*
    Push the value into the values property on the heap
    Bubble Up:
        Create a variable called index which is the length of the values property - 1
        Create a variable called parentIndex which is the floor of (index-1)/2
        Keep looping as long as the values element at the parentIndex is less than the values element at the child index
            Swap the value of the values element at the parentIndex with the value of the element property at the child index
            Set the index to be the parentIndex, and start over!
*/

// 1.c) remove - Remove the root then Replace with the most recently added then Adjust (sink down)
//what is sink down?
/*
    The procedure for deleting the root from the heap 
    (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) 
    and restoring the properties is called down-heap 
    (also known as bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max).
*/
// pseudocode remove(extractMax)
/*
    Swap the first value in the values property with the last one
    Pop from the values property, so you can return the value at the end.
    Have the new root "sink down" to the correct spot...​
        Your parent index starts at 0 (the root)
        Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
        Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
        If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
        The child index you swapped to now becomes the new parent index.  
        Keep looping and swapping until neither child is larger than the element.
        Return the old root!
*/

//1.d) prority queue
// A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.
/*
    Write a Min Binary Heap - lower number means higher priority.
    Each Node has a val and a priority.  Use the priority to build the heap.
    Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
    Dequeue method removes root element, returns it, and rearranges heap using priority.
*/

//1.e) maxheapify
//convert an array into max binary heap
/*
    Create a new heap
    Iterate over the array and invoke your insert function
    return the values property on the heap
*/

//1.f) heap sort

/*
    We can sort an array in O(n log n) time and O(1) space by making it a heap!
    Make the array a max heap (use maxHeapify)
    Loop over the array, swap the root node with last item in the array
    After swapping each item, run maxHeapify again to find the next root node
    Next loop you'll swap the root node with the second-to-last item in the array and run maxHeapify again.
    Once you've run out of items to swap, you have a sorted array! 
*/
//bigO of binary heaps
/*
    Insertion -   O(log N)
    Removal   -   O(log N)
    Search    -   O(N)
*/

//worst about heaps, always REMEMBER THIS DEPRESSING TREE? NOT POSSIBLE WITH HEAPS!

//closing remarks about heaps
/*
    Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues
    Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children
    With just a little bit of math, we can represent heaps using arrays!
*/

//code max binary heap
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

//code prority queue
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
