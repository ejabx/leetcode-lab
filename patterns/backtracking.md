# Backtracking Strategy Guide

## What is Backtracking?

Backtracking is a systematic method for solving problems by exploring all possible solutions and "backing out" when a path doesn't lead to a valid solution. It's essentially a refined brute force approach that prunes invalid paths early.

**Core Concept**: Try a choice → If it leads nowhere, undo it and try the next choice.

## The Backtracking Template

```typescript
function backtrack(path: any[], choices: any[]): void {
    // Base case: found a complete solution
    if (isValidSolution(path)) {
        result.push([...path]); // Important: make a copy!
        return;
    }
    
    // Try each available choice
    for (const choice of choices) {
        if (isValidChoice(choice, path)) {
            // Make the choice
            path.push(choice);
            
            // Recurse with updated state
            backtrack(path, getRemainingChoices(choice, choices));
            
            // Undo the choice (backtrack)
            path.pop();
        }
    }
}
```

## Key Components

### 1. State Representation
- **Path/Current Solution**: What you've built so far
- **Choices**: What options are available at each step
- **Constraints**: Rules that determine valid choices

### 2. Three Essential Functions
- **Is Valid**: Check if current path satisfies constraints
- **Is Complete**: Check if we've found a complete solution
- **Get Choices**: Determine available options for next step

## Common Backtracking Patterns

### Pattern 1: Permutations
**Problem**: Generate all arrangements of elements
```typescript
function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    
    function backtrack(path: number[]): void {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        
        for (const num of nums) {
            if (!path.includes(num)) { // Choice constraint
                path.push(num);
                backtrack(path);
                path.pop();
            }
        }
    }
    
    backtrack([]);
    return result;
}
```

### Pattern 2: Combinations
**Problem**: Choose k elements from n elements
```typescript
function combine(n: number, k: number): number[][] {
    const result: number[][] = [];
    
    function backtrack(start: number, path: number[]): void {
        if (path.length === k) {
            result.push([...path]);
            return;
        }
        
        for (let i = start; i <= n; i++) {
            path.push(i);
            backtrack(i + 1, path); // Prevent duplicates
            path.pop();
        }
    }
    
    backtrack(1, []);
    return result;
}
```

### Pattern 3: Subsets
**Problem**: Generate all possible subsets
```typescript
function subsets(nums: number[]): number[][] {
    const result: number[][] = [];

    function backtrack(start: number, path: number[]): void {
        result.push([...path]);  // Record solution
        
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);     // 1. Make choice (DFS goes deeper)
            backtrack(i + 1, path); // 2. Explore (DFS recursive call)
            path.pop();             // 3. Undo choice (backtrack)
        }
    }
    
    backtrack(0, []);
    return result;
}
```

### Pattern 4: Constraint Satisfaction
**Problem**: N-Queens, Sudoku, etc.
```typescript
function solveNQueens(n: number): string[][] {
    const result: string[][] = [];
    const board: string[][] = Array(n).fill(null).map(() => Array(n).fill('.'));
    
    function backtrack(row: number): void {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }
    
    backtrack(0);
    return result;
}
```

## Problem Recognition Signals

**Use backtracking when you see these keywords:**
- "Find all solutions"
- "Generate all combinations/permutations"
- "Count number of ways"
- "Place items with constraints"
- Multiple valid solutions exist
- Need to explore all possibilities

## Optimization Techniques

### 1. Early Pruning
Stop exploring paths that can't lead to valid solutions:
```typescript
if (currentSum > target) {
    return; // No point continuing
}
```

### 2. Constraint Propagation
Use problem-specific knowledge to eliminate choices:
```typescript
// In N-Queens, check diagonals before placing
if (!isSafe(board, row, col)) {
    continue;
}
```

### 3. Ordering Heuristics
Choose the most constrained variables first:
```typescript
// Try smaller numbers first in combination sum
candidates.sort((a, b) => a - b);
```

## Common Pitfalls and Solutions

### Pitfall 1: Forgetting to Copy Results
```typescript
// Wrong
result.push(path); // All results will be the same!

// Correct
result.push([...path]); // Make a copy using spread operator
result.push(Array.from(path)); // Alternative
```

### Pitfall 2: Not Properly Undoing Changes
```typescript
// Ensure every modification is undone
path.push(choice);
// ... recursive call ...
path.pop(); // Must undo!
```

### Pitfall 3: Inefficient Duplicate Detection
```typescript
// Slow for large paths
if (!path.includes(num)) {
    // ...
}

// Better: use a Set for O(1) lookup
const used = new Set<number>();
if (!used.has(num)) {
    used.add(num);
    // ... recursive call ...
    used.delete(num);
}
```

## Essential LeetCode Problems by Difficulty

### Easy/Medium Foundation
1. **[Subsets](https://leetcode.com/problems/subsets/)** (78) - Basic subset generation
2. **[Permutations](https://leetcode.com/problems/permutations/)** (46) - Basic permutation generation
3. **[Combinations](https://leetcode.com/problems/combinations/)** (77) - Basic combination generation
4. **[Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)** (17) - Multiple choice sets

### Medium Practice
5. **[Subsets II](https://leetcode.com/problems/subsets-ii/)** (90) - Handling duplicates
6. **[Permutations II](https://leetcode.com/problems/permutations-ii/)** (47) - Permutations with duplicates
7. **[Combination Sum](https://leetcode.com/problems/combination-sum/)** (39) - Unlimited reuse
8. **[Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)** (40) - Limited reuse with duplicates
9. **[Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)** (131) - String partitioning
10. **[Word Search](https://leetcode.com/problems/word-search/)** (79) - 2D grid exploration

### Advanced Applications
11. **[N-Queens](https://leetcode.com/problems/n-queens/)** (51) - Classic constraint satisfaction
12. **[Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)** (37) - Complex constraint satisfaction
13. **[Expression Add Operators](https://leetcode.com/problems/expression-add-operators/)** (282) - Complex state management
14. **[Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/)** (301) - Pruning optimization

## Time Complexity Analysis

Most backtracking problems have exponential time complexity:
- **Permutations**: O(n! × n) - n! permutations, each taking O(n) to build
- **Subsets**: O(2^n × n) - 2^n subsets, each taking O(n) to copy
- **Combinations**: O(C(n,k) × k) - C(n,k) combinations, each taking O(k) to build

## Debugging Tips

1. **Add Print Statements**: Track the path and choices at each step
2. **Start Small**: Test with minimal input sizes first
3. **Visualize the Tree**: Draw out the recursion tree for small examples
4. **Check Base Cases**: Ensure termination conditions are correct
5. **Verify Backtracking**: Confirm state is properly restored

## Practice Strategy

1. **Master the Template**: Understand the basic structure first
2. **Solve by Pattern**: Group similar problems together
3. **Focus on Constraints**: Each problem has unique validity rules
4. **Optimize Gradually**: Get a working solution first, then optimize
5. **Practice Edge Cases**: Empty inputs, single elements, maximum constraints

Remember: Backtracking is about systematic exploration. Focus on correctly implementing the three core components (state, choices, constraints) and the rest will follow naturally.


