# Binary Trees Primer

# Binary Trees Primer - Table of Contents

- [What is a Binary Tree?](#what-is-a-binary-tree)
- [Basic Structure](#basic-structure)
  - [Node Definition](#node-definition)
- [Key Terminology](#key-terminology)
- [Types of Binary Trees](#types-of-binary-trees)
  - [Full Binary Tree](#1-full-binary-tree)
  - [Complete Binary Tree](#2-complete-binary-tree)
  - [Perfect Binary Tree](#3-perfect-binary-tree)
  - [Binary Search Tree (BST)](#4-binary-search-tree-bst)
- [Complete Binary Tree Benefits](#complete-binary-tree-benefits)
  - [Efficient Array Representation](#1-efficient-array-representation)
  - [Optimal for Heaps](#2-optimal-for-heaps)
  - [Predictable Height](#3-predictable-height)
- [Perfect Binary Tree Benefits](#perfect-binary-tree-benefits)
  - [Maximum Efficiency](#1-maximum-efficiency)
  - [Optimal Memory Usage](#2-optimal-memory-usage)
  - [Excellent for Divide & Conquer](#3-excellent-for-divide--conquer)
- [Real-World Applications](#real-world-applications)
  - [Complete Binary Trees](#complete-binary-trees)
  - [Perfect Binary Trees](#perfect-binary-trees)
- [Comparison with Other Tree Types](#comparison-with-other-tree-types)
- [Code Example: Why Complete Trees Matter](#code-example-why-complete-trees-matter)
- [DFS Tree Traversal Methods](#dfs-tree-traversal-methods)
  - [Pre-order Traversal (Root → Left → Right)](#pre-order-traversal-root--left--right)
    - [Visual Step-by-Step](#visual-step-by-step)
    - [Code](#code)
  - [In-order Traversal (Left → Root → Right)](#in-order-traversal-left--root--right)
    - [Visual Step-by-Step](#visual-step-by-step-1)
    - [Code](#code-1)
  - [Post-order Traversal (Left → Right → Root)](#post-order-traversal-left--right--root)
    - [Visual Step-by-Step](#visual-step-by-step-2)
    - [Code](#code-2)
  - [Summary Table](#summary-table)
- [Implementation Concepts](#implementation-concepts)
  - [Recursive Pattern](#recursive-pattern)
  - [Memory Usage](#memory-usage)
- [Breadth-First Search (BFS) / Level-Order](#2-breadth-first-search-bfs--level-order)
- [Common Patterns and Techniques](#common-patterns-and-techniques)
  - [Bottom-Up Approach](#1-bottom-up-approach)
  - [Top-Down Approach](#2-top-down-approach)
  - [Two-Pointer Technique](#3-two-pointer-technique)
  - [Path Tracking](#4-path-tracking)
- [Key Problem-Solving Strategies](#key-problem-solving-strategies)
  - [Identify the Base Case](#1-identify-the-base-case)
  - [Choose the Right Traversal](#2-choose-the-right-traversal)
  - [Decide Return Value](#3-decide-return-value)
  - [Global vs Local State](#4-global-vs-local-state)
- [Time and Space Complexity](#time-and-space-complexity)
  - [Time Complexity](#time-complexity)
  - [Space Complexity](#space-complexity)
- [Common Pitfalls](#common-pitfalls)
- [Practice Problems by Category](#practice-problems-by-category)
  - [Basic Operations](#basic-operations)
  - [Tree Construction](#tree-construction)
  - [Path Problems](#path-problems)
  - [Tree Modification](#tree-modification)
  - [Advanced](#advanced)

## What is a Binary Tree?

A binary tree is a hierarchical data structure where each node has at most two children, typically called the "left" and "right" child.

```
    1
   / \
  2   3
 / \
4   5
```

## Basic Structure

### Node Definition

```typescript
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
```

## Key Terminology

- **Root**: The topmost node (has no parent)
- **Leaf**: A node with no children
- **Height**: The longest path from root to a leaf
- **Depth**: The distance from root to a specific node
- **Subtree**: A tree formed by any node and all its descendants

## Types of Binary Trees

### 1. Full Binary Tree

Every node has either 0 or 2 children (no nodes with exactly 1 child)

```
    1
   / \
  2   3
 / \
4   5
```

### 2. Complete Binary Tree

All levels are filled except possibly the last, which is filled left to right

```
    1
   / \
  2   3
 / \ /
4  5 6
```

### 3. Perfect Binary Tree

All internal nodes have two children and all leaves are at the same level

```
    1
   / \
  2   3
 / \ / \
4  5 6  7
```

### 4. Binary Search Tree (BST)

For each node: left subtree < node < right subtree

```
    5
   / \
  3   7
 / \ / \
1  4 6  8
```

## Complete Binary Tree Benefits

### 1. **Efficient Array Representation**

Complete binary trees can be stored in arrays without wasting space:

```
Array: [1, 2, 3, 4, 5, 6]
Tree:     1
        /   \
       2     3
      / \   /
     4   5 6
```

**Index relationships:**

- Parent of node at index `i`: `(i-1)/2`
- Left child of node at index `i`: `2*i + 1`
- Right child of node at index `i`: `2*i + 2`

### 2. **Optimal for Heaps**

Complete binary trees are perfect for implementing heaps because:

- No "holes" in the middle levels
- Easy to maintain heap property during insertion/deletion
- All operations remain O(log n)

### 3. **Predictable Height**

- Height is always ⌊log₂(n)⌋
- Guarantees O(log n) operations
- No risk of degenerating into a linked list

## Perfect Binary Tree Benefits

### 1. **Maximum Efficiency**

- **Balanced**: Every path from root to leaf has same length
- **Dense**: Maximum number of nodes for given height
- **Predictable**: Exactly 2ʰ⁺¹ - 1 nodes for height h

### 2. **Optimal Memory Usage**

```typescript
// Perfect tree with height 3 has exactly 15 nodes
// No wasted array slots when using array representation
const perfectTree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
```

### 3. **Excellent for Divide & Conquer**

Perfect trees naturally split into equal halves, making them ideal for:

- Binary search algorithms
- Parallel processing
- Cache-friendly operations

## Real-World Applications

### Complete Binary Trees:

- **Binary Heaps** (priority queues)
- **Heap Sort** algorithm
- **Tree-based data structures** in databases

### Perfect Binary Trees:

- **Segment Trees** for range queries
- **Binary Indexed Trees** (Fenwick trees)
- **Complete binary search trees** for optimal search

## Comparison with Other Tree Types

| Tree Type | Height   | Array Storage | Search Time | Insertion   |
| --------- | -------- | ------------- | ----------- | ----------- |
| Complete  | O(log n) | Efficient     | O(log n)\*  | O(log n)    |
| Perfect   | O(log n) | Optimal       | O(log n)\*  | Complex\*\* |
| Skewed    | O(n)     | Wasteful      | O(n)        | O(n)        |

\*For BST property  
\*\*Maintaining perfect structure is expensive

## Code Example: Why Complete Trees Matter

```typescript
// Heap implementation using complete binary tree
class MinHeap {
  private heap: number[] = [];

  insert(val: number): void {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin(): number {
    if (this.heap.length === 0) throw new Error("Empty heap");

    const min = this.heap[0];
    const last = this.heap.pop()!;

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }

    return min;
  }

  private bubbleUp(index: number): void {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  private bubbleDown(index: number): void {
    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let smallest = index;

      if (
        leftChild < this.heap.length &&
        this.heap[leftChild] < this.heap[smallest]
      ) {
        smallest = leftChild;
      }

      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] < this.heap[smallest]
      ) {
        smallest = rightChild;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}
```

### Bottom Line

**Complete binary trees** are practical workhorses that:

- Guarantee efficient operations
- Use memory optimally
- Are easy to implement and maintain

**Perfect binary trees** are theoretical ideals that:

- Provide absolute optimal performance
- Are excellent for specific algorithms
- Are harder to maintain in practice

The key insight is that **structure matters** - a well-balanced tree can mean the difference between O(log n) and O(n) operations!

## DFS Tree Traversal Methods

Note: Multiple Trees can have the same traversal. That's why transversals alone aren't enough information to give the full tree structure.

**Preorder alone:**

> "What to do first" (top-down)
> Tells us the order of roots but not the structure

- Tree construction
- Copying/cloning trees
- Prefix expression evaluation
- Directory listing (show folder before contents)

**Inorder alone:**

> "What order to visit" (left-to-right for BST)
> Tells us relative positions but not the root hierarchy

- Getting sorted values from BST
- Determining tree structure
- Finding relationships between nodes

**Postorder alone:**

> "What to do last" (bottom-up)
> Gives you the reverse hierarchy - it tells you the order in which nodes would be "processed" if you were tearing down the tree from leaves to root.

- Memory cleanup: Delete children before parent
- Directory traversal: Process files before deleting folders
- Expression evaluation: Evaluate operands before operators
- Tree destruction: Safe deletion order

### Sample Binary Tree

```
        A
       / \
      B   C
     / \   \
    D   E   F
```

### Pre-order Traversal (Root → Left → Right)

**Visit order: Root first, then left subtree, then right subtree**

```
Visit A (root)
├── Visit B (left subtree root)
│   ├── Visit D (left leaf)
│   └── Visit E (right leaf)
└── Visit C (right subtree root)
    └── Visit F (right leaf)
```

**Result: A → B → D → E → C → F**

### Visual Step-by-Step:

```
Step 1: A*        Step 2: A         Step 3: A
       / \               / \               / \
      B   C             B*  C             B   C
     / \   \           / \   \           / \   \
    D   E   F         D   E   F         D*  E   F

Step 4: A         Step 5: A         Step 6: A
       / \               / \               / \
      B   C             B   C             B   C
     / \   \           / \   \           / \   \
    D   E*  F         D   E   C*        D   E   C
                                           \
                                            F*
```

#### Code

```typescript
function preorder(root: TreeNode | null): number[] {
  const result: number[] = [];

  function dfs(node: TreeNode | null) {
    if (!node) return;

    result.push(node.val); // Visit root
    dfs(node.left); // Visit left
    dfs(node.right); // Visit right
  }

  dfs(root);
  return result;
}
```

### In-order Traversal (Left → Root → Right)

**Visit order: Left subtree first, then root, then right subtree**

```
Visit left subtree of A
├── Visit D (leftmost)
├── Visit B (root of left subtree)
└── Visit E (right of left subtree)
Visit A (root)
Visit right subtree of A
├── Visit C (root of right subtree)
└── Visit F (rightmost)
```

**Result: D → B → E → A → C → F**

### Visual Step-by-Step:

```
Step 1: A         Step 2: A         Step 3: A
       / \               / \               / \
      B   C             B*  C             B   C
     / \   \           / \   \           / \   \
    D*  E   F         D   E   F         D   E*  F

Step 4: A*        Step 5: A         Step 6: A
       / \               / \               / \
      B   C             B   C*            B   C
     / \   \           / \   \           / \   \
    D   E   F         D   E   F         D   E   F*
```

### Code

```typescript
function inorder(root: TreeNode | null): number[] {
  const result: number[] = [];

  function dfs(node: TreeNode | null) {
    if (!node) return;

    dfs(node.left); // Visit left
    result.push(node.val); // Visit root
    dfs(node.right); // Visit right
  }

  dfs(root);
  return result;
}
```

### Post-order Traversal (Left → Right → Root)

**Visit order: Left subtree first, then right subtree, then root**

```
Visit left subtree of A
├── Visit D (left leaf)
├── Visit E (right leaf)
└── Visit B (root of left subtree)
Visit right subtree of A
├── Visit F (leaf)
└── Visit C (root of right subtree)
Visit A (root)
```

**Result: D → E → B → F → C → A**

### Visual Step-by-Step:

```
Step 1: A         Step 2: A         Step 3: A
       / \               / \               / \
      B   C             B*  C             B   C
     / \   \           / \   \           / \   \
    D*  E   F         D   E*  F         D   E   F

Step 4: A         Step 5: A         Step 6: A*
       / \               / \               / \
      B   C             B   C*            B   C
     / \   \           / \   \           / \   \
    D   E   F*        D   E   F         D   E   F
```

### Code

```typescript
function postorder(root: TreeNode | null): number[] {
  const result: number[] = [];

  function dfs(node: TreeNode | null) {
    if (!node) return;

    dfs(node.left); // Visit left
    dfs(node.right); // Visit right
    result.push(node.val); // Visit root
  }

  dfs(root);
  return result;
}
```

### Summary Table

| Traversal Type | Order               | Result                | Use Case                                  |
| -------------- | ------------------- | --------------------- | ----------------------------------------- |
| **Pre-order**  | Root → Left → Right | A → B → D → E → C → F | Copying/cloning trees, prefix expressions |
| **In-order**   | Left → Root → Right | D → B → E → A → C → F | Binary search trees (gives sorted order)  |
| **Post-order** | Left → Right → Root | D → E → B → F → C → A | Deleting trees, postfix expressions       |

### Implementation Concepts

### Recursive Pattern:

```
Pre-order:  process(node) → traverse(left) → traverse(right)
In-order:   traverse(left) → process(node) → traverse(right)
Post-order: traverse(left) → traverse(right) → process(node)
```

### Memory Usage:

- **Stack depth**: O(h) where h is the height of the tree
- **Time complexity**: O(n) for all traversals
- **Space complexity**: O(h) for recursion stack

---

_Note: The asterisk (_) in the visual steps indicates which node is currently being visited.\*

### 2. Breadth-First Search (BFS) / Level-Order

```typescript
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

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

## Common Patterns and Techniques

### 1. Bottom-Up Approach

Process children first, then use their results for current node

```typescript
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}
```

### 2. Top-Down Approach

Process current node first, then pass information to children

```typescript
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  // If leaf node, check if we've reached target
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  // Continue with reduced target
  const newTarget = targetSum - root.val;
  return hasPathSum(root.left, newTarget) || hasPathSum(root.right, newTarget);
}
```

### 3. Two-Pointer Technique

```typescript
function isSymmetric(root: TreeNode | null): boolean {
  function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  }

  return !root || isMirror(root.left, root.right);
}
```

### 4. Path Tracking

```typescript
function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = [];

  function dfs(node: TreeNode | null, path: string) {
    if (!node) return;

    const newPath = path + (path ? "->" : "") + node.val;

    // If leaf, add path to result
    if (!node.left && !node.right) {
      result.push(newPath);
      return;
    }

    dfs(node.left, newPath);
    dfs(node.right, newPath);
  }

  dfs(root, "");
  return result;
}
```

## Key Problem-Solving Strategies

### 1. Identify the Base Case

- What happens when `node` is `null`?
- What happens at leaf nodes?

### 2. Choose the Right Traversal

- **Pre-order**: When you need to process node before its children
- **In-order**: For BST problems (gives sorted order)
- **Post-order**: When you need children's results before processing current node
- **Level-order**: For level-by-level processing

### 3. Decide Return Value

- What information does the parent need?
- Do you need to return multiple values? (Use tuple/object)

### 4. Global vs Local State

- Use global variables for tree-wide information (like maximum path sum)
- Use return values for information flowing upward

## Time and Space Complexity

### Time Complexity

- Most tree operations: **O(n)** where n is number of nodes
- BST operations (average): **O(log n)**
- BST operations (worst): **O(n)** for skewed trees

### Space Complexity

- Recursive calls: **O(h)** where h is height
- Balanced tree: **O(log n)**
- Skewed tree: **O(n)**

## Common Pitfalls

1. **Forgetting null checks**: Always check if node exists before accessing properties
2. **Mixing up traversal orders**: Remember the order matters for the result
3. **Not handling edge cases**: Empty tree, single node, etc.
4. **Stack overflow**: Very deep trees can cause stack overflow with recursion
5. **Modifying tree during traversal**: Be careful about changing the tree structure while iterating

## Practice Problems by Category

### Basic Operations

- Maximum Depth of Binary Tree
- Minimum Depth of Binary Tree
- Same Tree
- Symmetric Tree

### Tree Construction

- Construct Binary Tree from Preorder and Inorder
- Construct Binary Tree from Postorder and Inorder

### Path Problems

- Binary Tree Maximum Path Sum
- Path Sum
- Path Sum II
- Sum Root to Leaf Numbers

### Tree Modification

- Invert Binary Tree
- Flatten Binary Tree to Linked List
- Convert Sorted Array to Binary Search Tree

### Advanced

- Serialize and Deserialize Binary Tree
- Lowest Common Ancestor
- Binary Tree Right Side View
- Validate Binary Search Tree
