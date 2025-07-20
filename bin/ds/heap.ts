class Heap {
    protected heap: number[] = []; 

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
    protected heapifyUp(index: number): void {
        // Min or Max implementation detail
    }
    
    // Move element down to maintain heap property
    protected heapifyDown(index: number): void {
        // Min or Max implementation detail
    }
    
    protected swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    // For debugging
    toArray(): number[] {
        return [...this.heap];
    }
}

export class MinHeap extends Heap {
    constructor(array?: number[]) {
        super(array)
    }
    
    // Move element up to maintain heap property
    protected override heapifyUp(index: number): void {
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
    protected override heapifyDown(index: number): void {
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
}

class MaxHeap extends Heap {
    protected override heapifyUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            
            if (this.heap[parentIndex] >= this.heap[index]) { // >= instead of <=
                break;
            }
            
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }
    
    protected override heapifyDown(index: number): void {
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
}