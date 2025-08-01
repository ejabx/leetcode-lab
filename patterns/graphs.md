# Graphs Cheatsheet 

## Graph Representations

Let's use this example graph for all representations:
```
    0 ←→ 1
    ↓    ↓
    2 ←→ 3
```
Edges: (0,1), (0,2), (1,0), (1,3), (2,0), (2,3), (3,1), (3,2)

### Adjacency List (most common for LeetCode)

**Map Approach** - Best for sparse graphs
```typescript
// Undirected graph
const graph: Map<number, number[]> = new Map([
    [0, [1, 2]],    // Node 0 connects to 1 and 2
    [1, [0, 3]],    // Node 1 connects to 0 and 3
    [2, [0, 3]],    // Node 2 connects to 0 and 3
    [3, [1, 2]]     // Node 3 connects to 1 and 2
]);

// Object approach (also common)
const graphObj: Record<number, number[]> = {
    0: [1, 2],    // Course 0 enables courses 1,2
    1: [3],       // Course 1 enables course 3
    2: [3],       // Course 2 enables course 3
    3: []         // Course 3 enables nothing
};
```

**Array Approach** - Most common in interviews
```typescript
const n = 4;
const graph: number[][] = Array(n).fill(null).map(() => []);

// Build undirected graph
const edges: [number, number][] = [[0,1], [0,2], [1,3], [2,3]];
for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);  // Add both directions
}

// Result: [[1,2], [0,3], [0,3], [1,2]]
```

**Building from Edge List** (Common LeetCode pattern)
```typescript
function buildGraph(n: number, edges: number[][]): number[][] {
    const graph: number[][] = Array(n).fill(null).map(() => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);  // Remove this line for directed
    }
    return graph;
}

// Usage
const edges = [[0,1], [0,2], [1,3], [2,3]];
const graph = buildGraph(4, edges);
```

**With Weights** (for shortest path problems)
```typescript
// Weighted adjacency list with tuples
type WeightedEdge = [number, number]; // [neighbor, weight]
const graph: Map<number, WeightedEdge[]> = new Map([
    [0, [[1, 5], [2, 10]]],   // Node 0 → Node 1 (weight 5), Node 2 (weight 10)
    [1, [[0, 5], [3, 3]]],    // Tuple format: [neighbor, weight]
    [2, [[0, 10], [3, 2]]],
    [3, [[1, 3], [2, 2]]]
]);

// Alternative: Nested Map
const graphMap: Map<number, Map<number, number>> = new Map([
    [0, new Map([[1, 5], [2, 10]])],
    [1, new Map([[0, 5], [3, 3]])],
    [2, new Map([[0, 10], [3, 2]])],
    [3, new Map([[1, 3], [2, 2]])]
]);
```

### Adjacency Matrix

**Basic Matrix**
```typescript
const n = 4;
const graph: number[][] = Array(n).fill(null).map(() => Array(n).fill(0));

// Add edges
const edges: [number, number][] = [[0,1], [0,2], [1,3], [2,3]];
for (const [u, v] of edges) {
    graph[u][v] = 1;
    graph[v][u] = 1;  // Remove for directed
}

// Result:
// [[0, 1, 1, 0],
//  [1, 0, 0, 1],
//  [1, 0, 0, 1],
//  [0, 1, 1, 0]]
```

**Weighted Matrix**
```typescript
const INF = Number.MAX_SAFE_INTEGER;
const n = 4;
const graph: number[][] = Array(n).fill(null).map(() => Array(n).fill(INF));

// Distance from node to itself is 0
for (let i = 0; i < n; i++) {
    graph[i][i] = 0;
}

// Add weighted edges
const weightedEdges: [number, number, number][] = [[0,1,5], [0,2,10], [1,3,3], [2,3,2]];
for (const [u, v, weight] of weightedEdges) {
    graph[u][v] = weight;
    graph[v][u] = weight;  // Remove for directed
}
```

### Grid as Graph (Very common in LeetCode)

**2D Grid Representation**
```typescript
// Grid problems treat each cell as a node
const grid: number[][] = [
    [1, 1, 0, 1],
    [1, 0, 1, 1],
    [0, 1, 1, 0],
    [1, 1, 0, 1]
];

// Each cell (i,j) connects to its 4 neighbors
function getNeighbors(i: number, j: number, grid: number[][]): [number, number][] {
    const neighbors: [number, number][] = [];
    const directions: [number, number][] = [[0,1], [1,0], [0,-1], [-1,0]]; // right, down, left, up
    
    for (const [di, dj] of directions) {
        const ni = i + di;
        const nj = j + dj;
        if (ni >= 0 && ni < grid.length && nj >= 0 && nj < grid[0].length && 
            grid[ni][nj] === 1) {  // Valid and not blocked
            neighbors.push([ni, nj]);
        }
    }
    
    return neighbors;
}

// Usage in DFS/BFS
const neighbors = getNeighbors(0, 0, grid);  // [[0,1], [1,0]] if valid
```

### When to Use Each Representation

| Representation | Best For | Space | Access Time |
|----------------|----------|-------|-------------|
| **Adjacency List** | Sparse graphs, most LeetCode problems | O(V + E) | O(degree) |
| **Adjacency Matrix** | Dense graphs, shortest path (Floyd-Warshall) | O(V²) | O(1) |
| **Edge List** | Simple iteration, Union-Find problems | O(E) | O(E) |

### Common LeetCode Patterns

**From Prerequisites Array** (Course Schedule)
```typescript
function buildCourseGraph(numCourses: number, prerequisites: number[][]): number[][] {
    const graph: number[][] = Array(numCourses).fill(null).map(() => []);
    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);  // prereq → course
    }
    return graph;
}
```

**From Equations** (Union-Find problems)
```typescript
function buildFromEquations(equations: string[][], values: number[]): Map<string, [string, number][]> {
    const graph = new Map<string, [string, number][]>();
    
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);
        
        graph.get(a)!.push([b, values[i]]);
        graph.get(b)!.push([a, 1.0 / values[i]]);
    }
    return graph;
}
```

**Undirected from Edges**
```typescript
function buildUndirected(n: number, edges: number[][]): number[][] {
    const graph: number[][] = Array(n).fill(null).map(() => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    return graph;
}
```

## Core Traversal Algorithms

### Quick Decision Guide

| Goal | Algorithm | Why |
|------|-----------|-----|
| **Shortest path (unweighted)** | BFS | Explores by distance |
| **Any path exists** | DFS | More memory efficient |
| **Cycle detection** | DFS | Three-color technique |
| **Level-by-level processing** | BFS | Natural level exploration |
| **Minimum steps/operations** | BFS | Guarantees minimum |
| **Tree traversal** | DFS | Natural recursion |
| **Topological sort** | BFS (Kahn's) or DFS | Both work well |
| **Connected components** | Either | Similar performance |

### Memory Considerations

```typescript
// DFS uses O(depth) space (call stack)
// BFS uses O(width) space (queue)

// For wide, shallow graphs: DFS is better
// For narrow, deep graphs: BFS is better
```

### Algorithm Characteristics

#### BFS Characteristics
- **Explores breadth-first** (level by level)
- **Guarantees shortest path** in unweighted graphs
- **Uses more memory** for wide graphs
- **Better for "minimum" problems**

#### DFS Characteristics  
- **Explores depth-first** (path by path)
- **Uses less memory** for wide graphs
- **Natural for recursion**
- **Better for existence/validation problems**

### Common LeetCode Problem Types

#### BFS Problems
- **Word Ladder** - minimum transformations
- **Binary Tree Level Order Traversal** - level-by-level processing
- **Rotting Oranges** - minimum time simulation
- **Shortest Path in Binary Matrix** - shortest path

#### DFS Problems
- **Course Schedule** - cycle detection
- **Number of Islands** - connected components
- **Path Sum** - tree path validation
- **Validate Binary Search Tree** - tree property validation

### Key Takeaway

The fundamental insight is:
- **BFS explores breadth-first (level by level)** - use when you need the "closest/shortest" solution
- **DFS explores depth-first (path by path)** - use when you're exploring possibilities or detecting patterns

Choose BFS for distance-based problems and DFS for path-based or validation problems.

### DFS (Depth-First Search)
```typescript
function dfs(graph: number[][], node: number, visited: Set<number>): void {
    visited.add(node);
    for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}

// Iterative version
function dfsIterative(graph: number[][], start: number): void {
    const visited = new Set<number>();
    const stack: number[] = [start];
    
    while (stack.length > 0) {
        const node = stack.pop()!;
        if (!visited.has(node)) {
            visited.add(node);
            stack.push(...graph[node]);
        }
    }
}
```

#### When to Use DFS

##### 1. Path Finding & Backtracking
DFS naturally explores paths completely before backtracking.

```typescript
// Find if path exists from source to target
function hasPath(graph: number[][], source: number, target: number): boolean {
    const visited = new Set<number>();
    
    function dfs(node: number): boolean {
        if (node === target) return true;
        
        visited.add(node);
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor) && dfs(neighbor)) {
                return true; // Path found!
            }
        }
        return false;
    }
    
    return dfs(source);
}
```

##### 2. Cycle Detection
DFS with coloring is perfect for detecting cycles.

```typescript
// Detect cycle in directed graph
function hasCycle(graph: number[][]): boolean {
    const WHITE = 0, GRAY = 1, BLACK = 2;
    const colors: number[] = new Array(graph.length).fill(WHITE);
    
    function dfs(node: number): boolean {
        colors[node] = GRAY; // Currently processing
        
        for (const neighbor of graph[node]) {
            if (colors[neighbor] === GRAY) return true; // Back edge = cycle!
            if (colors[neighbor] === WHITE && dfs(neighbor)) return true;
        }
        
        colors[node] = BLACK; // Finished processing
        return false;
    }
    
    for (let i = 0; i < graph.length; i++) {
        if (colors[i] === WHITE && dfs(i)) return true;
    }
    return false;
}
```

##### 3. Topological Sorting (DFS-based)
DFS can produce topological order through post-order traversal.

```typescript
function topologicalSortDFS(graph: number[][]): number[] {
    const visited = new Set<number>();
    const result: number[] = [];
    
    function dfs(node: number): void {
        visited.add(node);
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
        result.unshift(node); // Add to front (reverse post-order)
    }
    
    for (let i = 0; i < graph.length; i++) {
        if (!visited.has(i)) dfs(i);
    }
    return result;
}
```

##### 4. Tree Traversals
DFS variants (preorder, inorder, postorder) are natural for trees.

```typescript
// Validate Binary Search Tree
function isValidBST(root: TreeNode, min = -Infinity, max = Infinity): boolean {
    if (!root) return true;
    
    if (root.val <= min || root.val >= max) return false;
    
    return isValidBST(root.left, min, root.val) && 
           isValidBST(root.right, root.val, max);
}
```

### BFS (Breadth-First Search)
```typescript
function bfs(graph: number[][], start: number): void {
    const visited = new Set<number>([start]);
    const queue: number[] = [start];
    
    while (queue.length > 0) {
        const node = queue.shift()!;
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
```

#### When to Use BFS

##### 1. Shortest Path (Unweighted Graphs)
BFS guarantees the shortest path in unweighted graphs because it explores level by level.

```typescript
// Find shortest path from start to target
function shortestPath(graph: number[][], start: number, target: number): number {
    const queue: [number, number][] = [[start, 0]]; // [node, distance]
    const visited = new Set<number>([start]);
    
    while (queue.length > 0) {
        const [node, dist] = queue.shift()!;
        
        if (node === target) return dist; // Guaranteed shortest!
        
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, dist + 1]);
            }
        }
    }
    return -1;
}
```

##### 2. Level-by-Level Processing
When you need to process nodes at the same "distance" together.

```typescript
// Binary tree level order traversal
function levelOrder(root: TreeNode): number[][] {
    if (!root) return [];
    
    const result: number[][] = [];
    const queue: TreeNode[] = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel: number[] = [];
        
        for (let i = 0; i < levelSize; i++) { // Process entire level
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

### 3. Finding "Closest" or "Minimum Steps"
BFS naturally finds the minimum number of operations/steps.

```typescript
// Word Ladder - minimum transformations
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    
    const queue: [string, number][] = [[beginWord, 1]];
    const visited = new Set<string>([beginWord]);
    
    while (queue.length > 0) {
        const [word, steps] = queue.shift()!;
        
        if (word === endWord) return steps; // Minimum steps found!
        
        // Try all possible one-character changes...
    }
    return 0;
}
```

## Key Algorithms

### Topological Sort (for DAGs)
```typescript
function topologicalSort(graph: number[][], n: number): number[] {
    const inDegree: number[] = new Array(n).fill(0);
    
    for (let node = 0; node < n; node++) {
        for (const neighbor of graph[node]) {
            inDegree[neighbor]++;
        }
    }
    
    const queue: number[] = [];
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    const result: number[] = [];
    
    while (queue.length > 0) {
        const node = queue.shift()!;
        result.push(node);
        
        for (const neighbor of graph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    return result.length === n ? result : [];  // cycle detection
}
```

### Union-Find (Disjoint Set)
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
            this.parent[x] = this.find(this.parent[x]);  // path compression
        }
        return this.parent[x];
    }
    
    union(x: number, y: number): boolean {
        const px = this.find(x);
        const py = this.find(y);
        
        if (px === py) return false;
        
        if (this.rank[px] < this.rank[py]) {
            this.parent[px] = py;
        } else if (this.rank[px] > this.rank[py]) {
            this.parent[py] = px;
        } else {
            this.parent[py] = px;
            this.rank[px]++;
        }
        
        return true;
    }
}
```

### Dijkstra's Algorithm (shortest path)
```typescript
function dijkstra(graph: Map<number, [number, number][]>, start: number): Map<number, number> {
    const distances = new Map<number, number>();
    const pq: [number, number][] = [[0, start]];  // [distance, node]
    
    // Initialize distances
    for (const node of graph.keys()) {
        distances.set(node, Number.MAX_SAFE_INTEGER);
    }
    distances.set(start, 0);
    
    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);  // Simple priority queue
        const [currentDist, node] = pq.shift()!;
        
        if (currentDist > distances.get(node)!) continue;
        
        const neighbors = graph.get(node) || [];
        for (const [neighbor, weight] of neighbors) {
            const distance = currentDist + weight;
            if (distance < distances.get(neighbor)!) {
                distances.set(neighbor, distance);
                pq.push([distance, neighbor]);
            }
        }
    }
    
    return distances;
}
```

## Common Patterns & Templates

### Cycle Detection in Directed Graph
```typescript
function hasCycle(graph: number[][], n: number): boolean {
    const WHITE = 0, GRAY = 1, BLACK = 2;
    const colors: number[] = new Array(n).fill(WHITE);
    
    function dfs(node: number): boolean {
        colors[node] = GRAY;
        for (const neighbor of graph[node]) {
            if (colors[neighbor] === GRAY) {  // back edge
                return true;
            }
            if (colors[neighbor] === WHITE && dfs(neighbor)) {
                return true;
            }
        }
        colors[node] = BLACK;
        return false;
    }
    
    for (let i = 0; i < n; i++) {
        if (colors[i] === WHITE && dfs(i)) {
            return true;
        }
    }
    return false;
}
```

### Cycle Detection in Undirected Graph
```typescript
function hasCycleUndirected(graph: number[][], n: number): boolean {
    const visited: boolean[] = new Array(n).fill(false);
    
    function dfs(node: number, parent: number): boolean {
        visited[node] = true;
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                if (dfs(neighbor, node)) {
                    return true;
                }
            } else if (neighbor !== parent) {
                return true;
            }
        }
        return false;
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i] && dfs(i, -1)) {
            return true;
        }
    }
    return false;
}
```

### Connected Components
```typescript
function countComponents(graph: number[][], n: number): number {
    const visited: boolean[] = new Array(n).fill(false);
    let components = 0;
    
    function dfs(node: number): void {
        visited[node] = true;
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            components++;
        }
    }
    
    return components;
}
```

## Grid Problems

### Grid DFS Template
```typescript
function dfsGrid(grid: number[][], i: number, j: number, visited: Set<string>): void {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || 
        visited.has(`${i},${j}`) || grid[i][j] === 0) {
        return;
    }
    
    visited.add(`${i},${j}`);
    const directions: [number, number][] = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    for (const [di, dj] of directions) {
        dfsGrid(grid, i + di, j + dj, visited);
    }
}
```

### Grid BFS Template
```typescript
function bfsGrid(grid: number[][], startI: number, startJ: number): void {
    const queue: [number, number, number][] = [[startI, startJ, 0]];  // i, j, distance
    const visited = new Set<string>([`${startI},${startJ}`]);
    const directions: [number, number][] = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    while (queue.length > 0) {
        const [i, j, dist] = queue.shift()!;
        
        for (const [di, dj] of directions) {
            const ni = i + di;
            const nj = j + dj;
            const key = `${ni},${nj}`;
            
            if (ni >= 0 && ni < grid.length && nj >= 0 && nj < grid[0].length && 
                !visited.has(key) && grid[ni][nj] !== 0) {
                visited.add(key);
                queue.push([ni, nj, dist + 1]);
            }
        }
    }
}
```for di, dj in directions:
        dfs_grid(grid, i + di, j + dj, visited)
```

### Grid BFS Template
```python
def bfs_grid(grid, start_i, start_j):
    queue = deque([(start_i, start_j, 0)])  # i, j, distance
    visited = {(start_i, start_j)}
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    
    while queue:
        i, j, dist = queue.popleft()
        
        for di, dj in directions:
            ni, nj = i + di, j + dj
            if (0 <= ni < len(grid) and 0 <= nj < len(grid[0]) and 
                (ni, nj) not in visited and grid[ni][nj] != 0):
                visited.add((ni, nj))
                queue.append((ni, nj, dist + 1))
```

## Problem Categories & Approaches

| Problem Type | Algorithm Options |
|--------------|------------------|
| **Shortest Path** | BFS (unweighted), Dijkstra (weighted), Floyd-Warshall (all pairs) |
| **Cycle Detection** | DFS with coloring (directed), DFS with parent tracking (undirected), Union-Find |
| **Connected Components** | DFS/BFS, Union-Find |
| **Topological Sort** | Kahn's algorithm (BFS), DFS-based |
| **Minimum Spanning Tree** | Kruskal's (Union-Find), Prim's (similar to Dijkstra) |
| **Bipartite Check** | BFS/DFS with 2-coloring |

## Time Complexities

- **DFS/BFS**: O(V + E)
- **Dijkstra**: O(E log V) with heap
- **Union-Find**: O(α(V)) per operation (nearly constant)
- **Topological Sort**: O(V + E)
- **Floyd-Warshall**: O(V³)

## Common Edge Cases

- Empty graph or single node
- Disconnected components
- Self-loops
- Multiple edges between same nodes
- Negative weights (use Bellman-Ford instead of Dijkstra)
