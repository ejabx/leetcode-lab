# Topological Sorting

## What is Topological Sorting?

Topological sorting is a **linear ordering** of vertices in a directed acyclic graph (DAG) such that for every directed edge `u → v`, vertex `u` comes before vertex `v` in the ordering.

Think of it as: **"What order should I do things when some things depend on others?"**

## Real-World Examples

### Course Prerequisites
```
Calculus I → Calculus II → Differential Equations
     ↓
Statistics → Data Science
```
Valid topological order: `[Calculus I, Statistics, Calculus II, Data Science, Differential Equations]`

### Build Dependencies
```
compile.c → link.o → executable
     ↓
tests.c → run_tests
```

### Getting Dressed
```
underwear → pants → shoes
socks → shoes
shirt → jacket
```

## Key Properties

1. **Only works on DAGs** (Directed Acyclic Graphs)
2. **Multiple valid orderings** may exist
3. **If cycle exists**, no topological ordering is possible
4. **Every DAG** has at least one topological ordering

## Visual Example

```
Graph with dependencies:
A → C → B → D
    ↓   ↑
    └───┘

Dependencies:
- B depends on A and C: edges [A, B], [C, B] 
- C depends on A: edge [A, C]
- D depends on B and C: edges [B, D], [C, D]

Topological order: [A, C, B, D]

Why this order works:
1. A comes first (no dependencies)
2. C comes after A (C depends on A) 
3. B comes after both A and C (B depends on both)
4. D comes last (D depends on both B and C)
```

## Algorithm 1: Kahn's Algorithm (BFS-based)

### Concept
1. Find nodes with **no incoming edges** (in-degree = 0)
2. Remove them and all their outgoing edges
3. Repeat until no nodes left

### Implementation
```typescript
function topologicalSortKahn(graph: number[][], n: number): number[] {
    // Calculate in-degrees
    const inDegree: number[] = new Array(n).fill(0);
    for (let u = 0; u < n; u++) {
        for (const v of graph[u]) {
            inDegree[v]++;
        }
    }
    
    // Find all nodes with no incoming edges
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
        
        // Remove this node and update in-degrees
        for (const neighbor of graph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    // Check for cycles
    return result.length === n ? result : []; // Empty array if cycle detected
}
```

### Step-by-Step Example
```
Graph: 5→0, 5→2, 2→3, 3→1, 4→0, 4→1

Initial in-degrees: [2, 2, 1, 1, 0, 0]
Queue: [4, 5] (nodes with in-degree 0)

Step 1: Process 4
- Add 4 to result: [4]
- Update in-degrees: [1, 1, 1, 1, 0, 0]
- Queue: [5]

Step 2: Process 5  
- Add 5 to result: [4, 5]
- Update in-degrees: [0, 1, 0, 1, 0, 0]
- Queue: [0, 2]

Step 3: Process 0
- Add 0 to result: [4, 5, 0]
- No outgoing edges
- Queue: [2]

Step 4: Process 2
- Add 2 to result: [4, 5, 0, 2]  
- Update in-degrees: [0, 1, 0, 0, 0, 0]
- Queue: [3]

Step 5: Process 3
- Add 3 to result: [4, 5, 0, 2, 3]
- Update in-degrees: [0, 0, 0, 0, 0, 0]
- Queue: [1]

Step 6: Process 1
- Add 1 to result: [4, 5, 0, 2, 3, 1]
- Queue: []

Final result: [4, 5, 0, 2, 3, 1]
```

## Algorithm 2: DFS-based

### Concept
1. Perform DFS from each unvisited node
2. Add nodes to result in **post-order** (after visiting all descendants)
3. Reverse the result

### Implementation
```typescript
function topologicalSortDFS(graph: number[][], n: number): number[] {
    const visited: boolean[] = new Array(n).fill(false);
    const result: number[] = [];
    
    function dfs(node: number): void {
        visited[node] = true;
        
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
        
        result.push(node); // Add in post-order
    }
    
    // Visit all unvisited nodes
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }
    
    return result.reverse(); // Reverse to get correct order
}
```

### Why Reverse?
```
DFS post-order gives: [dependencies first, then dependents]
We want: [nodes with no dependencies first]

Example:
DFS order: [3, 2, 1, 0, 5, 4] (deepest first)
Reversed:  [4, 5, 0, 1, 2, 3] (topological order)
```

## Cycle Detection with Topological Sort

### Using Kahn's Algorithm
```typescript
function hasCycleKahn(graph: number[][], n: number): boolean {
    const result = topologicalSortKahn(graph, n);
    return result.length !== n; // If not all nodes processed, cycle exists
}
```

### Using DFS with Colors
```typescript
function hasCycleDFS(graph: number[][], n: number): boolean {
    const WHITE = 0, GRAY = 1, BLACK = 2;
    const colors: number[] = new Array(n).fill(WHITE);
    
    function dfs(node: number): boolean {
        colors[node] = GRAY;
        
        for (const neighbor of graph[node]) {
            if (colors[neighbor] === GRAY) return true; // Back edge = cycle
            if (colors[neighbor] === WHITE && dfs(neighbor)) return true;
        }
        
        colors[node] = BLACK;
        return false;
    }
    
    for (let i = 0; i < n; i++) {
        if (colors[i] === WHITE && dfs(i)) return true;
    }
    return false;
}
```

## Common LeetCode Problems

### 1. Course Schedule
```typescript
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph: number[][] = Array(numCourses).fill(null).map(() => []);
    
    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
    }
    
    const result = topologicalSortKahn(graph, numCourses);
    return result.length === numCourses;
}
```

### 2. Course Schedule II
```typescript
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const graph: number[][] = Array(numCourses).fill(null).map(() => []);
    
    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
    }
    
    return topologicalSortKahn(graph, numCourses);
}
```

### 3. Alien Dictionary
```typescript
function alienOrder(words: string[]): string {
    // Build graph from word comparisons
    const graph = new Map<string, Set<string>>();
    const inDegree = new Map<string, number>();
    
    // Initialize all characters
    for (const word of words) {
        for (const char of word) {
            if (!graph.has(char)) {
                graph.set(char, new Set());
                inDegree.set(char, 0);
            }
        }
    }
    
    // Build edges from adjacent word comparisons
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];
        
        // Find first differing character
        let j = 0;
        while (j < Math.min(word1.length, word2.length) && word1[j] === word2[j]) {
            j++;
        }
        
        // Invalid case: word1 is prefix of word2 but longer
        if (j === word2.length && word1.length > word2.length) {
            return "";
        }
        
        // Add edge if characters differ
        if (j < Math.min(word1.length, word2.length)) {
            const from = word1[j];
            const to = word2[j];
            
            if (!graph.get(from)!.has(to)) {
                graph.get(from)!.add(to);
                inDegree.set(to, inDegree.get(to)! + 1);
            }
        }
    }
    
    // Topological sort
    const queue: string[] = [];
    for (const [char, degree] of inDegree) {
        if (degree === 0) queue.push(char);
    }
    
    const result: string[] = [];
    while (queue.length > 0) {
        const char = queue.shift()!;
        result.push(char);
        
        for (const neighbor of graph.get(char)!) {
            inDegree.set(neighbor, inDegree.get(neighbor)! - 1);
            if (inDegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    return result.length === graph.size ? result.join('') : "";
}
```

## Algorithm Comparison

| Aspect | Kahn's (BFS) | DFS-based |
|--------|--------------|-----------|
| **Intuition** | Remove sources iteratively | Post-order traversal |
| **Implementation** | Queue + in-degree tracking | Recursion + stack |
| **Cycle Detection** | Count processed nodes | Three-color technique |
| **Memory** | O(V) for queue | O(V) for recursion stack |
| **When to Use** | Course scheduling, dependencies | Tree-like structures |

## Time & Space Complexity

- **Time**: O(V + E) for both algorithms
- **Space**: O(V + E) for adjacency list + O(V) for auxiliary structures

## Key Takeaways

1. **Topological sort only works on DAGs**
2. **Kahn's algorithm** is more intuitive for dependency problems
3. **DFS-based** is more natural for tree-like structures
4. **Multiple valid orderings** can exist
5. **Cycle detection** is built into both algorithms
6. **Essential for scheduling and dependency resolution** problems


