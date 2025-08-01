# Min/Max Heaps

## What is a Heap?

A **heap** is a complete binary tree that satisfies the **heap property**:
- **Min Heap**: Parent ≤ Children (smallest element at root)
- **Max Heap**: Parent ≥ Children (largest element at root)

## You're Right - It IS a Tree!

```
Min Heap Example:
        1
       / \
      3   6
     / \ / \
    5  9 8  10

Max Heap Example:
        10
       /  \
      9    8
     / \  / \
    5  3 6   1
```

## Array Implementation (The Magic!)

Here's the beautiful part: **heaps are trees, but we implement them using arrays**!

### Array Representation
```typescript
// Min Heap: [1, 3, 6, 5, 9, 8, 10]
// Indices:   0  1  2  3  4  5   6

//         1 (index 0)
//        / \
//   (1) 3   6 (2)
//      / \ / \
// (3) 5  9 8  10 (6)
//    (4) (5)
```

### Index Relationships
```typescript
// For element at index i:
const parent = Math.floor((i - 1) / 2);
const leftChild = 2 * i + 1;
const rightChild = 2 * i + 2;

// Example: Element at index 4 (value 9)
// Parent: Math.floor((4-1)/2) = 1 (value 3) ✅
// Left child: 2*4+1 = 9 (doesn't exist)
// Right child: 2*4+2 = 10 (doesn't exist)
```

## Why Array Implementation?

### 1. **Space Efficient**
```typescript
// Tree with pointers: Need parent, left, right references
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

// Array: Just the values!
const heap: number[] = [1, 3, 6, 5, 9, 8, 10];
```

### 2. **Cache Friendly**
```typescript
// Array elements are stored contiguously in memory
// Better CPU cache performance than scattered tree nodes
```

### 3. **Simple Navigation**
```typescript
// No need to follow pointers - just arithmetic!
const getParent = (i: number) => Math.floor((i - 1) / 2);
const getLeft = (i: number) => 2 * i + 1;
const getRight = (i: number) => 2 * i + 2;
```

## Complete Min Heap Implementation

```typescript
class MinHeap {
    private heap: number[] = [];
    
    constructor(array?: number[]) {
        if (array) {
            this.heap = [...array];
            this.buildHeap();
        }
    }
    
    // Get minimum element (root)
    peek(): number | null {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
    
    // Insert new element
    insert(value: number): void {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }
    
    // Remove and return minimum element
    extractMin(): number | null {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop()!;
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop()!; // Move last element to root
        this.heapifyDown(0); // Restore heap property
        return min;
    }
    
    // Check if heap is empty
    isEmpty(): boolean {
        return this.heap.length === 0;
    }
    
    // Get heap size
    size(): number {
        return this.heap.length;
    }
    
    // Build heap from array (O(n) time)
    private buildHeap(): void {
        // Start from last non-leaf node and heapify down
        const startIdx = Math.floor((this.heap.length - 2) / 2);
        for (let i = startIdx; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }
    
    // Move element up to maintain heap property
    private heapifyUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            
            if (this.heap[parentIndex] <= this.heap[index]) {
                break; // Heap property satisfied
            }
            
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }
    
    // Move element down to maintain heap property
    private heapifyDown(index: number): void {
        while (true) {
            let minIndex = index;
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            
            // Find smallest among parent and children
            if (leftChild < this.heap.length && 
                this.heap[leftChild] < this.heap[minIndex]) {
                minIndex = leftChild;
            }
            
            if (rightChild < this.heap.length && 
                this.heap[rightChild] < this.heap[minIndex]) {
                minIndex = rightChild;
            }
            
            if (minIndex === index) {
                break; // Heap property satisfied
            }
            
            this.swap(index, minIndex);
            index = minIndex;
        }
    }
    
    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    // For debugging
    toArray(): number[] {
        return [...this.heap];
    }
}
```

## Max Heap Implementation

```typescript
class MaxHeap {
    private heap: number[] = [];
    
    // Same structure as MinHeap, but comparison operators are flipped
    
    private heapifyUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            
            if (this.heap[parentIndex] >= this.heap[index]) { // >= instead of <=
                break;
            }
            
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }
    
    private heapifyDown(index: number): void {
        while (true) {
            let maxIndex = index;
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            
            // Find largest among parent and children
            if (leftChild < this.heap.length && 
                this.heap[leftChild] > this.heap[maxIndex]) { // > instead of <
                maxIndex = leftChild;
            }
            
            if (rightChild < this.heap.length && 
                this.heap[rightChild] > this.heap[maxIndex]) { // > instead of <
                maxIndex = rightChild;
            }
            
            if (maxIndex === index) break;
            
            this.swap(index, maxIndex);
            index = maxIndex;
        }
    }
    
    // Rest of implementation is identical...
}
```

## Step-by-Step Example: Insert into Min Heap

```typescript
// Starting heap: [1, 3, 6, 5, 9, 8]
//         1
//        / \
//       3   6
//      / \ /
//     5  9 8

// Insert 2:
// Step 1: Add to end
// [1, 3, 6, 5, 9, 8, 2]
//         1
//        / \
//       3   6
//      / \ / \
//     5  9 8  2

// Step 2: Heapify up from index 6
// Compare 2 with parent 6 (index 2): 2 < 6, swap
// [1, 3, 2, 5, 9, 8, 6]
//         1
//        / \
//       3   2
//      / \ / \
//     5  9 8  6

// Step 3: Compare 2 with parent 1 (index 0): 2 > 1, stop
// Final: [1, 3, 2, 5, 9, 8, 6]
```

## Time Complexities

| Operation | Time Complexity | Why |
|-----------|----------------|-----|
| **peek()** | O(1) | Root is always at index 0 |
| **insert()** | O(log n) | Heapify up through tree height |
| **extractMin()** | O(log n) | Heapify down through tree height |
| **buildHeap()** | O(n) | Mathematical proof: most nodes are near leaves |

## Why My Meeting Rooms Example Was Wrong

You caught an important mistake! In my Meeting Rooms example:

```typescript
// ❌ This is NOT a real heap implementation:
endTimes.push(end);
endTimes.sort((a, b) => a - b); // O(n log n) each time!

// ✅ Should be:
const minHeap = new MinHeap();
minHeap.insert(end); // O(log n)
```

Sorting the entire array each time defeats the purpose of using a heap!

## Correct Meeting Rooms II with Real Heap

```typescript
function minMeetingRooms(intervals: number[][]): number {
    if (intervals.length === 0) return 0;
    
    intervals.sort((a, b) => a[0] - b[0]);
    const endTimes = new MinHeap();
    
    for (const [start, end] of intervals) {
        // If earliest meeting has ended, reuse that room
        if (!endTimes.isEmpty() && endTimes.peek()! <= start) {
            endTimes.extractMin();
        }
        
        endTimes.insert(end);
    }
    
    return endTimes.size();
}
```

## JavaScript's Built-in "Heap"

JavaScript doesn't have a built-in heap, but you can simulate one:

```typescript
// Poor man's min heap (not efficient!)
const minHeap: number[] = [];

function heapPush(heap: number[], value: number) {
    heap.push(value);
    heap.sort((a, b) => a - b); // O(n log n) - slow!
}

function heapPop(heap: number[]): number | undefined {
    return heap.shift(); // O(n) - slow!
}
```

## Better: Use a Library

```typescript
// Popular heap libraries for JavaScript:
// - heap-js
// - js-priority-queue
// - datastructures-js

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

const minHeap = new MinPriorityQueue();
minHeap.enqueue(5);
minHeap.enqueue(2);
const min = minHeap.dequeue(); // { element: 2, priority: 2 }
```

## Common Heap Applications

1. **Priority Queues** - Process tasks by importance
2. **Dijkstra's Algorithm** - Shortest path finding
3. **Heap Sort** - O(n log n) sorting algorithm
4. **Top K Elements** - Find k largest/smallest efficiently
5. **Sliding Window Maximum** - Using max heap
6. **Merge K Sorted Lists** - Using min heap

## Key Takeaways

1. **Heaps are trees** implemented as arrays for efficiency
2. **Array index arithmetic** replaces pointer navigation
3. **Complete binary tree** property enables array representation
4. **Heapify operations** maintain the heap property
5. **O(log n) insert/delete** makes heaps very efficient
6. **Don't sort arrays** when you need heap operations!

You were absolutely right to question my "sorted array" approach - that's not how real heaps work! 🎯
