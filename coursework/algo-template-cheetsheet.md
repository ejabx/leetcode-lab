# Algorithm Pattern Templates

## Table of Contents

1. [Two Pointers](#two-pointers)

   - [Basic Two Pointers (Opposite Ends)](#basic-two-pointers-opposite-ends)
   - [Two Pointers (Same Direction)](#two-pointers-same-direction)

2. [Sliding Window](#sliding-window)

   - [Fixed Size Window](#fixed-size-window)
   - [Variable Size Window](#variable-size-window)

3. [Depth-First Search (DFS)](#depth-first-search-dfs)

   - [Recursive DFS (Graph/Tree)](#recursive-dfs-graphtree)
   - [DFS with Path Tracking](#dfs-with-path-tracking)
   - [DFS for 2D Grid](#dfs-for-2d-grid)

4. [Breadth-First Search (BFS)](#breadth-first-search-bfs)

   - [Basic BFS](#basic-bfs)
   - [BFS with Level Tracking](#bfs-with-level-tracking)
   - [BFS for 2D Grid (Shortest Path)](#bfs-for-2d-grid-shortest-path)

5. [Backtracking](#backtracking)

   - [Basic Backtracking Template](#basic-backtracking-template)
   - [Permutations Template](#permutations-template)
   - [Subsets Template](#subsets-template)

6. [Dynamic Programming](#dynamic-programming)

   - [Basic DP Template (1D)](#basic-dp-template-1d)
   - [Basic DP Template (2D)](#basic-dp-template-2d)
   - [DP with Memoization (Top-Down)](#dp-with-memoization-top-down)

7. [Binary Search](#binary-search)

   - [Basic Binary Search](#basic-binary-search)
   - [Binary Search (Find First/Last Occurrence)](#binary-search-find-firstlast-occurrence)

8. [Stack & Monotonic Stack](#stack--monotonic-stack)

   - [Basic Stack Operations](#basic-stack-operations)
   - [Monotonic Stack (Increasing)](#monotonic-stack-increasing)

9. [Heap](#heap)

   - [Min Heap Implementation](#min-heap-implementation)

10. [Trie](#trie)

    - [Trie Implementation](#trie-implementation)

11. [Prefix and Suffix Arrays](#prefix-and-suffix-arrays)

    - [Prefix Sum](#prefix-sum)
    - [Prefix Product](#prefix-product)
    - [Suffix Product](#suffix-product)
    - [Product of Array Except Self](#product-of-array-except-self)

12. [Union Find](#union-find)
    - [Union Find Implementation](#union-find-implementation)

---

## Two Pointers

### Basic Two Pointers (Opposite Ends)

```typescript
function twoPointersOpposite(arr: number[], target: number): number[] {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];

    if (currentSum === target) {
      return [left, right];
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [-1, -1];
}
```

### Two Pointers (Same Direction)

```typescript
function twoPointersSameDirection(arr: number[]): number {
    let slow = 0;
    let fast = 0;

    while (fast < arr.length) {
        // Process fast pointer
        if (/* condition */) {
            arr[slow] = arr[fast];
            slow++;
        }
        fast++;
    }

    return slow; // or arr.slice(0, slow)
}
```

## Sliding Window

### Fixed Size Window

```typescript
function slidingWindowFixed(arr: number[], k: number): number {
  if (arr.length < k) {
    return 0;
  }

  // Initialize first window
  let windowSum = arr.slice(0, k).reduce((sum, num) => sum + num, 0);
  let maxSum = windowSum;

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}
```

### Variable Size Window

```typescript
function slidingWindowVariable(s: string): number {
  let left = 0;
  let result = 0;
  const windowState = new Map<string, number>();

  for (let right = 0; right < s.length; right++) {
    // Expand window
    windowState.set(s[right], (windowState.get(s[right]) || 0) + 1);

    // Contract window while condition is violated
    while (windowViolatesCondition(windowState)) {
      const leftChar = s[left];
      windowState.set(leftChar, windowState.get(leftChar)! - 1);
      if (windowState.get(leftChar) === 0) {
        windowState.delete(leftChar);
      }
      left++;
    }

    // Update result
    result = Math.max(result, right - left + 1);
  }

  return result;
}

function windowViolatesCondition(windowState: Map<string, number>): boolean {
  // Implementation depends on specific problem
  return false;
}
```

## Depth-First Search (DFS)

### Recursive DFS (Graph/Tree)

```typescript
function dfsRecursive(
  graph: Map<number, number[]>,
  node: number,
  visited: Set<number>
): void {
  if (visited.has(node)) {
    return;
  }

  visited.add(node);
  // Process current node

  const neighbors = graph.get(node) || [];
  for (const neighbor of neighbors) {
    dfsRecursive(graph, neighbor, visited);
  }
}
```

### DFS with Path Tracking

```typescript
function dfsWithPath(
  graph: Map<number, number[]>,
  start: number,
  target: number,
  path: number[],
  visited: Set<number>
): number[] | null {
  if (start === target) {
    return [...path, start];
  }

  visited.add(start);

  const neighbors = graph.get(start) || [];
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      const result = dfsWithPath(
        graph,
        neighbor,
        target,
        [...path, start],
        visited
      );
      if (result) {
        return result;
      }
    }
  }

  visited.delete(start); // Backtrack
  return null;
}
```

### DFS for 2D Grid

```typescript
function dfsGrid(
  grid: number[][],
  row: number,
  col: number,
  visited: Set<string>
): void {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    visited.has(`${row},${col}`) ||
    grid[row][col] === 0
  ) {
    // or other invalid condition
    return;
  }

  visited.add(`${row},${col}`);

  // Process current cell

  // Explore 4 directions
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  for (const [dr, dc] of directions) {
    dfsGrid(grid, row + dr, col + dc, visited);
  }
}
```

## Breadth-First Search (BFS)

### Basic BFS

```typescript
function bfs(graph: Map<number, number[]>, start: number): void {
  const visited = new Set<number>();
  const queue: number[] = [start];
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift()!;
    // Process current node

    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
```

### BFS with Level Tracking

```typescript
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function bfsLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const result: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel);
  }

  return result;
}
```

### BFS for 2D Grid (Shortest Path)

```typescript
function bfsGrid(
  grid: number[][],
  start: [number, number],
  target: [number, number]
): number {
  const [startRow, startCol] = start;
  const [targetRow, targetCol] = target;

  if (grid[startRow][startCol] === 0 || grid[targetRow][targetCol] === 0) {
    return -1;
  }

  const queue: Array<[number, number, number]> = [[startRow, startCol, 0]]; // [row, col, distance]
  const visited = new Set<string>();
  visited.add(`${startRow},${startCol}`);

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (queue.length > 0) {
    const [row, col, dist] = queue.shift()!;

    if (row === targetRow && col === targetCol) {
      return dist;
    }

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      const key = `${newRow},${newCol}`;

      if (
        newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[0].length &&
        grid[newRow][newCol] === 1 &&
        !visited.has(key)
      ) {
        visited.add(key);
        queue.push([newRow, newCol, dist + 1]);
      }
    }
  }

  return -1;
}
```

## Backtracking

### Basic Backtracking Template

```typescript
function backtrack(
  candidates: any[],
  current: any[],
  result: any[][],
  startIndex: number
): void {
  // Base case - found valid solution
  if (isValidSolution(current)) {
    result.push([...current]); // Make a copy
    return;
  }

  // Try each candidate starting from startIndex
  for (let i = startIndex; i < candidates.length; i++) {
    // Skip duplicates if needed
    if (i > startIndex && candidates[i] === candidates[i - 1]) {
      continue;
    }

    // Choose
    current.push(candidates[i]);

    // Explore
    backtrack(candidates, current, result, i + 1); // or i for allowing reuse

    // Unchoose (backtrack)
    current.pop();
  }
}

function isValidSolution(current: any[]): boolean {
  // Implementation depends on specific problem
  return true;
}
```

### Permutations Template

```typescript
function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const current: number[] = [];
  const used = new Array(nums.length).fill(false);

  function backtrack(): void {
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      // Choose
      current.push(nums[i]);
      used[i] = true;

      // Explore
      backtrack();

      // Unchoose
      current.pop();
      used[i] = false;
    }
  }

  backtrack();
  return result;
}
```

### Subsets Template

```typescript
function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const current: number[] = [];

  function backtrack(startIndex: number): void {
    // Every state is a valid subset
    result.push([...current]);

    for (let i = startIndex; i < nums.length; i++) {
      // Choose
      current.push(nums[i]);

      // Explore
      backtrack(i + 1);

      // Unchoose
      current.pop();
    }
  }

  backtrack(0);
  return result;
}
```

## Dynamic Programming

### Basic DP Template (1D)

```typescript
function dp1D(n: number): number {
  const dp = new Array(n + 1).fill(0);

  // Base cases
  dp[0] = 1; // or appropriate base value
  if (n > 0) dp[1] = 1; // or appropriate base value

  // Fill the dp array
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // or appropriate recurrence relation
  }

  return dp[n];
}
```

### Basic DP Template (2D)

```typescript
function dp2D(m: number, n: number): number {
  const dp = Array(m)
    .fill(null)
    .map(() => Array(n).fill(0));

  // Base cases
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  // Fill the dp table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; // or appropriate recurrence
    }
  }

  return dp[m - 1][n - 1];
}
```

### DP with Memoization (Top-Down)

```typescript
function dpMemo(n: number, memo = new Map<number, number>()): number {
  if (n <= 1) return n; // Base case

  if (memo.has(n)) {
    return memo.get(n)!;
  }

  const result = dpMemo(n - 1, memo) + dpMemo(n - 2, memo);
  memo.set(n, result);

  return result;
}
```

## Binary Search

### Basic Binary Search

```typescript
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Not found
}
```

### Binary Search (Find First/Last Occurrence)

```typescript
function findFirstOccurrence(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      result = mid;
      right = mid - 1; // Continue searching left for first occurrence
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

function findLastOccurrence(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      result = mid;
      left = mid + 1; // Continue searching right for last occurrence
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}
```

## Stack & Monotonic Stack

### Basic Stack Operations

```typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}
```

### Monotonic Stack (Increasing)

```typescript
function monotonicStack(arr: number[]): number[] {
  const stack: number[] = []; // Store indices
  const result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    // Maintain monotonic increasing property
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      const index = stack.pop()!;
      // Process the popped element
      result[index] = i; // or some other calculation
    }

    stack.push(i);
  }

  // Handle remaining elements in stack
  while (stack.length > 0) {
    const index = stack.pop()!;
    result[index] = -1; // or appropriate default value
  }

  return result;
}
```

## Heap

### Min Heap Implementation

```typescript
class MinHeap {
  private heap: number[] = [];

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChild(index: number): number {
    return 2 * index + 1;
  }

  private rightChild(index: number): number {
    return 2 * index + 2;
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value: number): void {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin(): number | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()!;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
    return min;
  }

  private heapifyUp(index: number): void {
    while (index > 0 && this.heap[this.parent(index)] > this.heap[index]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  private heapifyDown(index: number): void {
    while (this.leftChild(index) < this.heap.length) {
      let smallerChildIndex = this.leftChild(index);

      if (
        this.rightChild(index) < this.heap.length &&
        this.heap[this.rightChild(index)] < this.heap[this.leftChild(index)]
      ) {
        smallerChildIndex = this.rightChild(index);
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      }

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  peek(): number | null {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size(): number {
    return this.heap.length;
  }
}
```

## Trie

### Trie Implementation

```typescript
class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEndOfWord: boolean = false;
}

class Trie {
  private root: TrieNode = new TrieNode();

  insert(word: string): void {
    let current = this.root;

    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char)!;
    }

    current.isEndOfWord = true;
  }

  search(word: string): boolean {
    let current = this.root;

    for (const char of word) {
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char)!;
    }

    return current.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    let current = this.root;

    for (const char of prefix) {
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char)!;
    }

    return true;
  }
}
```

## Prefix and Suffix Arrays

### Prefix Sum

```typescript
function prefixSum(arr: number[]): number[] {
  const prefix: number[] = new Array(arr.length);
  prefix[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  return prefix;
}

// Get sum of subarray from index i to j (inclusive)
function getRangeSum(prefixSum: number[], i: number, j: number): number {
  if (i === 0) {
    return prefixSum[j];
  }
  return prefixSum[j] - prefixSum[i - 1];
}
```

### Prefix Product

```typescript
function prefixProduct(arr: number[]): number[] {
  const prefix: number[] = new Array(arr.length);
  prefix[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] * arr[i];
  }

  return prefix;
}

// Get product of subarray from index i to j (inclusive)
function getRangeProduct(
  prefixProduct: number[],
  i: number,
  j: number
): number {
  if (i === 0) {
    return prefixProduct[j];
  }
  return prefixProduct[j] / prefixProduct[i - 1];
}
```

### Suffix Product

```typescript
function suffixProduct(arr: number[]): number[] {
  const suffix: number[] = new Array(arr.length);
  suffix[arr.length - 1] = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * arr[i];
  }

  return suffix;
}
```

### Product of Array Except Self

```typescript
// Method 1: Using separate prefix and suffix arrays
function productExceptSelf1(nums: number[]): number[] {
  const n = nums.length;
  const prefix = new Array(n);
  const suffix = new Array(n);
  const result = new Array(n);

  // Build prefix products
  prefix[0] = 1;
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  // Build suffix products
  suffix[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  // Combine prefix and suffix
  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  return result;
}

// Method 2: Space optimized (O(1) extra space)
function productExceptSelf2(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n);

  // First pass: store prefix products in result array
  result[0] = 1;
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // Second pass: multiply with suffix products on the fly
  let suffixProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] = result[i] * suffixProduct;
    suffixProduct *= nums[i];
  }

  return result;
}

// Method 3: Handling zeros explicitly
function productExceptSelfWithZeros(nums: number[]): number[] {
  const n = nums.length;
  let zeroCount = 0;
  let productWithoutZeros = 1;

  // Count zeros and calculate product of non-zero elements
  for (const num of nums) {
    if (num === 0) {
      zeroCount++;
    } else {
      productWithoutZeros *= num;
    }
  }

  const result = new Array(n);

  for (let i = 0; i < n; i++) {
    if (zeroCount > 1) {
      // More than one zero means all products are 0
      result[i] = 0;
    } else if (zeroCount === 1) {
      // Exactly one zero
      result[i] = nums[i] === 0 ? productWithoutZeros : 0;
    } else {
      // No zeros
      result[i] = productWithoutZeros / nums[i];
    }
  }

  return result;
}
```

## Union Find

### Union Find Implementation

```typescript
class UnionFind {
  private parent: number[];
  private rank: number[];

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x: number, y: number): boolean {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) {
      return false; // Already connected
    }

    // Union by rank
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }

    return true;
  }

  connected(x: number, y: number): boolean {
    return this.find(x) === this.find(y);
  }
}
```
