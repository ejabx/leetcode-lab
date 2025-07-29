# Leetcode Labs

Labwork designed to help experiencde developers consitently solve medium and hard leetcode problems.

## Generating New Problems

Put notebook info in `bin\notebook.yaml` file.

```console
deno task notebook (or notebook:override)
```

## Getting Started

1. **Assess your current level** using problems from the [ROI guide](./coursework/ROI.md)
2. **Choose appropriate study plan** based on [time available and target difficulty](#coursework)
3. **Set up your environment** with preferred IDE and timer
4. **Follow the daily schedule** consistently
5. **Use reference materials** for quick lookup during practice
6. **Track progress** using the success metrics provided

## Coursework

### Study Plans

| Plan                                                                  | Duration | Target Audience     | Coverage         | Description                                                                                                                                 |
| --------------------------------------------------------------------- | -------- | ------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [**2-Day Intensive**](coursework/2day-cheatsheet.md)                  | 2 days   | Beginners to Medium | 75% of patterns  | Rapid introduction to core patterns with 17 essential problems. Focus on two pointers, DP basics, graphs, backtracking, and sliding window. |
| [**3-Day Comprehensive**](coursework/3day-cheatsheet.md)              | 3 days   | Medium level        | 85% of patterns  | Extended foundation building with 28 problems covering arrays, DP, graphs, backtracking, trees, and advanced data structures.               |
| [**21-Day Medium/Hard Progression**](coursework/21day-medium+hard.md) | 21 days  | Medium to Advanced  | 75-80% coverage  | Progressive difficulty increase focusing on deep pattern understanding rather than problem volume. Ideal for the medium→hard transition.    |
| [**21-Day Elite (Hard Focus)**](coursework/21day-hard.md)             | 21 days  | Senior Engineers    | 90%+ of patterns | Advanced preparation for elite companies with 6 hours daily commitment. Includes competitive programming and system design integration.     |

### Reference Materials

| Resource                                                     | Type                   | Purpose          | Description                                                                                                              |
| ------------------------------------------------------------ | ---------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [**ROI Analysis**](coursework/ROI.md)                        | Problem Prioritization | Study Efficiency | Problems categorized by return on investment - which patterns give the highest interview success rate for time invested. |
| [**Algorithm Templates**](coursework/template-cheetsheet.md) | Code Templates         | Implementation   | Ready-to-use code templates for all major patterns including two pointers, sliding window, DFS/BFS, DP, and more.        |

## Resources

### Core Algorithm Patterns

| Pattern                                                        | Key Applications                        | When to Use                                    |
| -------------------------------------------------------------- | --------------------------------------- | ---------------------------------------------- |
| [**Two Pointers**](resources/two-pointer.ipynb)                | Sorted arrays, palindromes, target sums | Problems involving pairs or triplets in arrays |
| [**Sliding Window**](resources/sliding-window.ipynb)           | Substring/subarray optimization         | Contiguous sequence problems with constraints  |
| [**Backtracking**](resources/backtracking.ipynb)               | Permutations, combinations, puzzles     | Generate all possible solutions                |
| [**Dynamic Programming**](resources/dynamic-programming.ipynb) | Optimization problems                   | Optimal substructure + overlapping subproblems |
| [**Graphs**](resources/graphs.ipynb)                           | DFS, BFS, connectivity                  | Node/edge relationship problems                |
| [**Monotonic Stack**](resources/montonic-stack.ipynb)          | Next greater/smaller elements           | Stack-based optimization problems              |

### Data Structure Patterns

| Pattern                                             | Key Applications                | When to Use                       |
| --------------------------------------------------- | ------------------------------- | --------------------------------- |
| [**Binary Trees**](resources/binary-trees.ipynb)    | Tree traversal, path problems   | Hierarchical data structures      |
| [**Linked Lists**](resources/linked-list.ipynb)     | Pointer manipulation, cycles    | Sequential data with dynamic size |
| [**Heap**](resources/heap.ipynb)                    | Priority queues, top-k problems | Need min/max elements efficiently |
| [**Disjoint Sets**](resources/disjoinit-sets.ipynb) | Union-Find, connectivity        | Dynamic connectivity queries      |

### Advanced Techniques

| Pattern                                                         | Key Applications                     | When to Use                             |
| --------------------------------------------------------------- | ------------------------------------ | --------------------------------------- |
| [**Topological Sorting**](resources/topological-sorting.ipynb)  | Dependency resolution, scheduling    | Directed acyclic graph ordering         |
| [**Greedy Algorithm**](resources/greedy-algorithm.ipynb)        | Optimization with local choices      | Optimal substructure with greedy choice |
| [**Recursion**](resources/recursion.ipynb)                      | Divide and conquer, tree problems    | Self-similar subproblems                |
| [**Combinatorics**](resources/combinatorics.ipynb)              | Counting problems, probability       | Mathematical counting and arrangements  |
| [**Prefix/Suffix Arrays**](resources/prefix_suffix_array.ipynb) | Range queries, cumulative operations | Efficient range sum/product queries     |

## Trivia

If you [interested](./coursework/trivia.md) on how these algorithms and data structures developed.
