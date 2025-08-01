# Disjoint Sets (Union-Find)

## What are Disjoint Sets?

Disjoint Sets (also called Union-Find or Disjoint Set Union) is a data structure that efficiently tracks **partitions of elements into non-overlapping groups**.

Think of it as answering two fundamental questions:
- **"Are these two elements in the same group?"** (Find)
- **"Merge these two groups together!"** (Union)

## Real-World Examples

### Social Networks
```
Groups: {Alice, Bob}, {Carol, Dave}, {Eve}

Alice friends Carol → Union(Alice, Carol)
Result: {Alice, Bob, Carol, Dave}, {Eve}

Question: Are Bob and Dave connected? → Find(Bob) == Find(Dave) → Yes!
```

### Network Connectivity
```
Computers: A, B, C, D, E
Connections: A-B, C-D

Add connection B-C → Now {A,B,C,D}, {E}
Question: Can A reach D? → Yes, through A→B→C→D
```

### Islands and Land
```
Grid cells forming islands
Add land → potentially merge existing islands
Query: How many separate islands exist?
```

## Core Operations

### 1. **MakeSet(x)** - Initialize
Create a new set containing only element x

### 2. **Find(x)** - Which group?
Return the representative (root) of the set containing x

### 3. **Union(x, y)** - Merge groups
Merge the sets containing x and y

### 4. **Connected(x, y)** - Same group?
Check if x and y are in the same set

## Basic Implementation

```typescript
class DisjointSet {
    private parent: number[];
    
    constructor(n: number) {
        // Each element is initially its own parent (separate sets)
        this.parent = Array.from({ length: n }, (_, i) => i);
    }
    
    // Find: Which set does x belong to?
    find(x: number): number {
        if (this.parent[x] !== x) {
            // Follow the parent chain to the root
            return this.find(this.parent[x]);
        }
        return x; // x is the root of its set
    }
    
    // Union: Merge sets containing x and y
    union(x: number, y: number): boolean {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX === rootY) {
            return false; // Already in same set
        }
        
        // Make one root point to the other
        this.parent[rootX] = rootY;
        return true; // Successfully merged
    }
    
    // Connected: Are x and y in the same set?
    connected(x: number, y: number): boolean {
        return this.find(x) === this.find(y);
    }
}
```

## Visualization Example

```typescript
// Initial state: [0, 1, 2, 3, 4]
// Each element points to itself

//  0   1   2   3   4
//  ↑   ↑   ↑   ↑   ↑

// Union(1, 2): Connect 1 and 2
// parent[1] = 2

//  0      2   3   4
//         ↑   ↑   ↑
//         |
//         1

// Union(3, 4): Connect 3 and 4  
// parent[3] = 4

//  0      2      4
//         ↑      ↑
//         |      |
//         1      3

// Union(2, 4): Connect groups {1,2} and {3,4}
// parent[2] = 4

//  0         4
//            ↑
//         /  |  \
//        2   3  (root)
//        |
//        1

// Now find(1) = find(3) = 4 (same group!)
```

## Problem: Basic Implementation is Slow

The basic implementation can degrade to **O(n)** per operation in the worst case:

```typescript
// Worst case: linear chain
// 1 → 2 → 3 → 4 → 5 → ... → n
// find(1) requires traversing the entire chain!
```

## Optimization 1: Union by Rank

**Idea**: Always attach the shorter tree under the taller tree to keep trees balanced.

```typescript
class OptimizedDisjointSet {
    private parent: number[];
    private rank: number[]; // Height of tree rooted at i
    
    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0); // All trees start with height 0
    }
    
    find(x: number): number {
        if (this.parent[x] !== x) {
            return this.find(this.parent[x]);
        }
        return x;
    }
    
    union(x: number, y: number): boolean {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX === rootY) return false;
        
        // Union by rank: attach shorter tree under taller tree
        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else {
            // Equal ranks: choose arbitrarily and increment rank
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        
        return true;
    }
}
```

### Why Union by Rank Works
```typescript
// Without rank: trees can become unbalanced
//     1           vs        1
//     |                    / \
//     2                   2   3
//     |                  /|   |\
//     3                 4 5   6 7
//     |
//     4

// With rank: trees stay roughly balanced
// Height ≤ log(n) → find operations are O(log n)
```

## Optimization 2: Path Compression

**Idea**: During `find`, make all nodes point directly to the root for faster future lookups.

```typescript
find(x: number): number {
    if (this.parent[x] !== x) {
        // Path compression: make x point directly to root
        this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
}
```

### Path Compression Visualization
```typescript
// Before find(1): 1 → 2 → 3 → 4 (root)
// After find(1):  1 → 4, 2 → 4, 3 → 4

// Original tree:     After compression:
//       4                   4
//       |                 / | \
//       3                1  2  3
//       |
//       2
//       |
//       1
```

## Complete Optimized Implementation

```typescript
class UnionFind {
    private parent: number[];
    private rank: number[];
    public componentCount: number;
    
    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
        this.componentCount = n; // Initially n separate components
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
        
        if (rootX === rootY) return false;
        
        // Union by rank
        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        
        this.componentCount--; // Two components merged into one
        return true;
    }
    
    connected(x: number, y: number): boolean {
        return this.find(x) === this.find(y);
    }
    
    getComponentCount(): number {
        return this.componentCount;
    }
}
```

## Time Complexity

| Operation | Basic | Union by Rank | + Path Compression |
|-----------|-------|---------------|-------------------|
| **Find** | O(n) | O(log n) | O(α(n)) |
| **Union** | O(n) | O(log n) | O(α(n)) |
| **Connected** | O(n) | O(log n) | O(α(n)) |

**α(n)** is the inverse Ackermann function, which is ≤ 4 for all practical values of n.

## Common LeetCode Problems

### 1. Number of Connected Components
```typescript
function countComponents(n: number, edges: number[][]): number {
    const uf = new UnionFind(n);
    
    for (const [u, v] of edges) {
        uf.union(u, v);
    }
    
    return uf.getComponentCount();
}
```

### 2. Friend Circles
```typescript
function findCircleNum(isConnected: number[][]): number {
    const n = isConnected.length;
    const uf = new UnionFind(n);
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isConnected[i][j] === 1) {
                uf.union(i, j);
            }
        }
    }
    
    return uf.getComponentCount();
}
```

### 3. Redundant Connection
```typescript
function findRedundantConnection(edges: number[][]): number[] {
    const uf = new UnionFind(edges.length + 1);
    
    for (const [u, v] of edges) {
        if (!uf.union(u, v)) {
            return [u, v]; // This edge creates a cycle
        }
    }
    
    return [];
}
```

### 4. Accounts Merge
```typescript
function accountsMerge(accounts: string[][]): string[][] {
    const uf = new UnionFind(accounts.length);
    const emailToIndex = new Map<string, number>();
    
    // Map emails to account indices
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 1; j < accounts[i].length; j++) {
            const email = accounts[i][j];
            if (emailToIndex.has(email)) {
                uf.union(i, emailToIndex.get(email)!);
            } else {
                emailToIndex.set(email, i);
            }
        }
    }
    
    // Group emails by root
    const groups = new Map<number, string[]>();
    for (const [email, index] of emailToIndex) {
        const root = uf.find(index);
        if (!groups.has(root)) groups.set(root, []);
        groups.get(root)!.push(email);
    }
    
    // Format result
    const result: string[][] = [];
    for (const [root, emails] of groups) {
        emails.sort();
        result.push([accounts[root][0], ...emails]);
    }
    
    return result;
}
```

## When to Use Union-Find

### ✅ Perfect For:
- **Dynamic connectivity** - elements being connected over time
- **Cycle detection** - in undirected graphs
- **Connected components** - finding groups in graphs
- **Equivalence relations** - grouping equivalent items
- **Minimum spanning trees** - Kruskal's algorithm

### ❌ Not Suitable For:
- **Disconnecting elements** - Union-Find doesn't support "split" operations
- **Shortest paths** - use BFS/Dijkstra instead
- **Directed graphs** - Union-Find works on undirected relationships

## Key Insights

1. **Union-Find tracks partitions** - divides elements into disjoint groups
2. **Two optimizations are crucial** - union by rank + path compression
3. **Nearly constant time** - α(n) is effectively constant for practical purposes
4. **Count components easily** - track componentCount during unions
5. **Perfect for dynamic problems** - handle connections as they're added

## Practice Strategy

1. **Start with basic implementation** - understand the core concept
2. **Add optimizations** - see the performance improvement
3. **Solve classic problems** - Number of Islands II, Friend Circles
4. **Recognize patterns** - "merge groups", "connected components", "cycle detection"

Union-Find is one of the most elegant and useful data structures in competitive programming! 🎯


