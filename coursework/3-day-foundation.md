# Essential LeetCode Problems: 3-Day Study Plan

## Day 1: Arrays, Two Pointers & Sliding Window (7-8 hours)

### Morning Session (2.5-3 hours): Array Fundamentals & Two Pointers

**Focus**: Master array manipulation and the two-pointer technique that appears in 40%+ of array problems.

| Problem                                                                                | Difficulty | Time   | Key Technique          | Notes                                            |
| -------------------------------------------------------------------------------------- | ---------- | ------ | ---------------------- | ------------------------------------------------ |
| [**Two Sum**](../problems/001-two-sum.ipynb)                                           | Easy       | 25 min | Hash Map               | The classic starter - understand both approaches |
| [**Two Sum II**](../problems/167-two-sum-ii.ipynb)                                     | Easy       | 20 min | Two Pointers           | Pure two-pointer technique on sorted array       |
| [**3Sum**](../problems/015-3sum.ipynb)                                                 | Medium     | 50 min | Two Pointers + Sorting | Essential for understanding pointer manipulation |
| [**Container With Most Water**](../problems/011-container-with-most-water.ipynb)       | Medium     | 40 min | Two Pointers           | Greedy two-pointer optimization                  |
| [**Product of Array Except Self**](../problems/238-product-of-array-except-self.ipynb) | Medium     | 35 min | Array Manipulation     | Important array processing pattern               |

**Key Learning Goals**:

- When to use hash maps vs two pointers
- Handling duplicates in sorted arrays
- Array prefix/suffix techniques

### Afternoon Session (2.5-3 hours): Sliding Window

**Focus**: Master the sliding window technique for substring/subarray problems.

| Problem                                                                                       | Difficulty | Time   | Key Technique           | Notes                                |
| --------------------------------------------------------------------------------------------- | ---------- | ------ | ----------------------- | ------------------------------------ |
| [**Longest Substring Without Repeating Characters**](../problems/003-longest-substring.ipynb) | Medium     | 45 min | Sliding Window          | Classic variable-size window         |
| [**Minimum Window Substring**](../problems/076-minimum-window-substring.ipynb)                | Hard       | 75 min | Advanced Sliding Window | Complex window expansion/contraction |
| [**Best Time to Buy and Sell Stock**](../problems/121-best-time-to-buy-and-sell-stock.ipynb)  | Easy       | 25 min | Simple Tracking         | Introduction to tracking patterns    |

**Key Learning Goals**:

- Variable vs fixed window sizes
- Character frequency tracking
- Window expansion/contraction logic

### Evening Session (2 hours): Stack Fundamentals

**Focus**: Learn stack-based problem solving patterns.

| Problem                                                              | Difficulty | Time   | Key Technique       | Notes                                   |
| -------------------------------------------------------------------- | ---------- | ------ | ------------------- | --------------------------------------- |
| [**Daily Temperatures**](../problems/739-daily-temperature.ipynb)    | Medium     | 40 min | Monotonic Stack     | Foundation of monotonic stack technique |
| [**Trapping Rain Water**](../problems/042-trapping-rain-water.ipynb) | Hard       | 80 min | Multiple Approaches | Stack, two pointers, and DP approaches  |

**Key Learning Goals**:

- Monotonic stack properties
- When to use stack vs other techniques

---

## Day 2: Dynamic Programming & Graph Algorithms (7-8 hours)

### Morning Session (3-3.5 hours): Dynamic Programming Fundamentals

**Focus**: Build intuition for the most common DP patterns.

| Problem                                                                                    | Difficulty | Time   | Key Technique | Notes                                     |
| ------------------------------------------------------------------------------------------ | ---------- | ------ | ------------- | ----------------------------------------- |
| [**House Robber**](../problems/198-house-robber.ipynb)                                     | Medium     | 35 min | Linear DP     | Classic DP pattern introduction           |
| [**House Robber II**](../problems/213-house-robber-ii.ipynb)                               | Medium     | 40 min | Circular DP   | Extension of linear DP to circular arrays |
| [**Coin Change**](../problems/322-coin-change.ipynb)                                       | Medium     | 50 min | Bottom-up DP  | Optimization DP with target               |
| [**Longest Increasing Subsequence**](../problems/300-longest-increasing-subsequence.ipynb) | Medium     | 60 min | DP Sequences  | Advanced DP - both O(n²) and O(n log n)   |
| [**Edit Distance**](../problems/072-edit-distance.ipynb)                                   | Hard       | 75 min | 2D DP         | String DP fundamentals                    |

**Key Learning Goals**:

- Identifying optimal substructure
- Building recurrence relations
- 1D vs 2D DP approaches

### Afternoon Session (2.5-3 hours): Graph Algorithms

**Focus**: Master DFS, BFS, and basic graph algorithms.

| Problem                                                          | Difficulty | Time   | Key Technique        | Notes                             |
| ---------------------------------------------------------------- | ---------- | ------ | -------------------- | --------------------------------- |
| [**Number of Islands**](../problems/200-number-of-islands.ipynb) | Medium     | 40 min | DFS/BFS              | Practice both approaches          |
| [**Clone Graph**](../problems/133-clone-graph.ipynb)             | Medium     | 45 min | DFS/BFS + HashMap    | Graph traversal with copying      |
| [**Course Schedule**](../problems/207-course-schedule.ipynb)     | Medium     | 50 min | Topological Sort/DFS | Cycle detection fundamentals      |
| [**Word Ladder**](../problems/127-word-ladder.ipynb)             | Hard       | 70 min | BFS                  | Shortest path in unweighted graph |

**Key Learning Goals**:

- DFS vs BFS selection criteria
- Cycle detection techniques
- Graph representation and traversal

### Evening Session (1.5 hours): Linked Lists

**Focus**: Essential linked list manipulation techniques.

| Problem                                                                                  | Difficulty | Time   | Key Technique         | Notes                           |
| ---------------------------------------------------------------------------------------- | ---------- | ------ | --------------------- | ------------------------------- |
| [**Reverse Linked List**](../problems/206-reverse-linked-list.ipynb)                     | Easy       | 25 min | Linked List           | Fundamental reversal technique  |
| [**Copy List with Random Pointer**](../problems/138-copy-list-with-random-pointer.ipynb) | Medium     | 50 min | HashMap + Linked List | Complex copying with references |

**Key Learning Goals**:

- Pointer manipulation
- Deep copying techniques

---

## Day 3: Backtracking, Trees & Advanced Patterns (7-8 hours)

### Morning Session (3-3.5 hours): Backtracking

**Focus**: Master the decision tree approach for all combination/permutation problems.

| Problem                                                      | Difficulty | Time   | Key Technique             | Notes                                      |
| ------------------------------------------------------------ | ---------- | ------ | ------------------------- | ------------------------------------------ |
| [**Permutations**](../problems/046-permutations.ipynb)       | Medium     | 40 min | Basic Backtracking        | Foundation - build solutions incrementally |
| [**Permutations II**](../problems/047-permutations-ii.ipynb) | Medium     | 45 min | Backtracking + Duplicates | Handle duplicate elements                  |
| [**Subsets**](../problems/078-subsets.ipynb)                 | Medium     | 35 min | Subset Generation         | Include/exclude decision pattern           |
| [**Subsets II**](../problems/090-subsets-ii.ipynb)           | Medium     | 40 min | Subsets + Duplicates      | Subset generation with duplicates          |
| [**Combination Sum**](../problems/039-combination-sum.ipynb) | Medium     | 50 min | Backtracking with Choices | Unlimited choices with target              |
| [**Word Search**](../problems/079-word-search.ipynb)         | Medium     | 60 min | 2D Backtracking           | Grid backtracking with path marking        |

**Key Learning Goals**:

- Decision tree construction
- Duplicate handling strategies
- State restoration patterns

### Afternoon Session (2.5-3 hours): Tree Algorithms

**Focus**: Essential tree patterns and advanced tree operations.

| Problem                                                                                                                                | Difficulty | Time   | Key Technique      | Notes                                     |
| -------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------ | ------------------ | ----------------------------------------- |
| [**Binary Tree Maximum Path Sum**](../problems/124-binary-tree-maximum-path-sum.ipynb)                                                 | Hard       | 70 min | Tree DP            | Advanced tree recursion with global state |
| [**Serialize and Deserialize Binary Tree**](../problems/297-serialize-and-deserialize-binary-tree.ipynb)                               | Hard       | 70 min | Tree Serialization | Critical for system design                |
| [**Construct Binary Tree from Preorder and Inorder**](../problems/105-construct-binary-tree-from-preorder-and-inorder-traversal.ipynb) | Medium     | 50 min | Tree Construction  | Tree building from traversals             |

**Key Learning Goals**:

- Tree DP with global optimization
- Tree serialization techniques
- Tree construction algorithms

### Evening Session (1.5-2 hours): Advanced Data Structures

**Focus**: Design problems and specialized data structures.

| Problem                                                                | Difficulty | Time   | Key Technique       | Notes                        |
| ---------------------------------------------------------------------- | ---------- | ------ | ------------------- | ---------------------------- |
| [**LRU Cache**](../problems/146-lru-cache.ipynb)                       | Medium     | 50 min | Design Problem      | HashMap + Doubly Linked List |
| [**Implement Trie**](../problems/208-implement-trie-prefix-tree.ipynb) | Medium     | 40 min | Trie Data Structure | String processing foundation |

**Key Learning Goals**:

- Data structure design principles
- API design considerations

---

## Bonus Problems (If Extra Time Available)

### High-Impact Problems for Additional Practice

| Problem                                                                                    | Difficulty | Time   | Key Technique        | Notes                             |
| ------------------------------------------------------------------------------------------ | ---------- | ------ | -------------------- | --------------------------------- |
| [**Largest Rectangle in Histogram**](../problems/084-largest-rectangle-in-histogram.ipynb) | Hard       | 60 min | Monotonic Stack      | Advanced stack application        |
| [**Sliding Window Maximum**](../problems/239-sliding-window-maximum.ipynb)                 | Hard       | 55 min | Deque                | Monotonic deque for range queries |
| [**N-Queens**](../problems/051-n-queens.ipynb)                                             | Hard       | 75 min | Complex Backtracking | Advanced constraint satisfaction  |
| [**Word Search II**](../problems/212-word-search-ii.ipynb)                                 | Hard       | 90 min | Trie + Backtracking  | Combined advanced techniques      |

---

## Study Strategy & Time Management

### Time Allocation Framework

- **Easy problems**: 20-30 minutes

  - 5 min: Read and understand
  - 10-15 min: Implement
  - 5-10 min: Test and optimize

- **Medium problems**: 35-60 minutes

  - 8 min: Read, understand, plan approach
  - 20-35 min: Implement
  - 7-15 min: Test, debug, optimize

- **Hard problems**: 60-90 minutes
  - 15 min: Read, understand, research if needed
  - 35-60 min: Implement (may need multiple attempts)
  - 10-15 min: Test, optimize, understand edge cases

### 4-Step Problem-Solving Process

1. **Solo Attempt** (Time-boxed based on difficulty)

   - Read problem carefully
   - Identify pattern/technique needed
   - Attempt implementation
   - Don't get stuck - move to next step if blocked

2. **Solution Study** (10-15 min)

   - If stuck, study optimal solution
   - Understand the approach completely
   - Note any techniques you missed

3. **Independent Implementation** (20-40 min)

   - Close the solution
   - Implement from scratch based on understanding
   - This step is crucial for retention

4. **Review & Pattern Recognition** (5-10 min)
   - Test with edge cases
   - Note the key technique/pattern
   - Connect to similar problems

---

## Key Patterns to Master

### 1. [Two Pointers](../resources/two-pointer.ipynb)

- **When to use**: Sorted arrays, palindromes, target sum problems
- **Variations**: Same direction, opposite direction, fast/slow
- **Template**: Start with pointers, move based on comparison logic

### 2. [Sliding Window](../resources/sliding-window.ipynb)

- **When to use**: Substring/subarray problems with constraints
- **Variations**: Fixed size, variable size, character frequency
- **Template**: Expand until invalid, then contract until valid

### 3. [Dynamic Programming](../resources/dynamic-programming.ipynb)

- **Identify**: Optimal substructure + overlapping subproblems
- **Approach**: Define state → find recurrence → implement
- **Common patterns**: Linear DP, 2D DP, sequence DP

### 4. [Graph Algorithms](../resources/graphs.ipynb)

- **DFS**: Path finding, backtracking, connected components
- **BFS**: Shortest path, level-order traversal
- **Key**: Choose based on problem requirements

### 5. [Backtracking](../resources/backtracking.ipynb)

- **When to use**: Generate all combinations/permutations
- **Template**: Make choice → recurse → undo choice
- **Optimization**: Early pruning for efficiency

### 6. [Tree Algorithms](../resources/binary-trees.ipynb)

- **Patterns**: Tree DP, serialization, construction
- **Key techniques**: Global vs local optimization
- **Applications**: Path problems, structure problems

---

## Daily Success Metrics

### After Day 1, you should be able to:

- [ ] Apply two pointers technique confidently
- [ ] Implement sliding window for substring problems
- [ ] Use monotonic stack for next greater/smaller problems
- [ ] Recognize array manipulation patterns

### After Day 2, you should be able to:

- [ ] Solve basic to intermediate DP problems
- [ ] Implement DFS and BFS from memory
- [ ] Detect cycles in graphs
- [ ] Handle linked list manipulation

### After Day 3, you should be able to:

- [ ] Design and implement backtracking solutions
- [ ] Solve complex tree traversal problems
- [ ] Design basic data structures (Cache, Trie)
- [ ] Recognize 85%+ of common interview patterns

### Overall Interview Readiness Assessment

**Completing this 3-day plan provides:**

- **~85% coverage** of common interview patterns
- **Deep understanding** of the top 8 most frequent techniques
- **Strong pattern recognition** for similar problems
- **Implementation confidence** for medium-difficulty problems
- **Exposure to hard problems** that demonstrate advanced thinking

### Problem Distribution Summary

- **Total Problems**: 24 core + 4 bonus = 28 problems
- **Easy**: 4 problems (17%)
- **Medium**: 16 problems (67%)
- **Hard**: 8 problems (33%)

### Next Steps for Continued Growth

1. **Week 2**: Advanced DP patterns (palindromes, intervals)
2. **Week 3**: Advanced graph algorithms (Union Find, Dijkstra)
3. **Week 4**: System design and optimization techniques
4. **Week 5**: Mock interviews and timed practice

---

## Final Tips for Maximum Success

1. **Maintain consistent pace** - Don't rush through problems
2. **Focus on understanding over speed** - Patterns transfer to new problems
3. **Code solutions by hand first** - Builds implementation confidence
4. **Explain your approach aloud** - Simulates interview conditions
5. **Track your progress** - Note which patterns you struggle with
6. **Review mistakes thoroughly** - Most learning happens during debugging
7. **Take breaks between sessions** - Prevents mental fatigue
8. **Practice drawing solutions** - Helps with communication in interviews
