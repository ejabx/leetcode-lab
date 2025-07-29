# 2-Day Study Plan

## Day 1: Core Foundations (8-10 hours)

### Morning Session (3-4 hours): Arrays & Two Pointers

**Focus**: Master the fundamental two-pointer technique and array manipulation patterns that appear in 40%+ of array problems.

| Problem                                                                          | Difficulty | Time   | Key Technique          | Notes                                                                     |
| -------------------------------------------------------------------------------- | ---------- | ------ | ---------------------- | ------------------------------------------------------------------------- |
| [**Two Sum**](../problems/001-two-sum.ipynb)                                     | Easy       | 30 min | Hash Map               | The classic starter - understand both hash map and two-pointer approaches |
| [**Two Sum II**](../problems/167-two-sum-ii.ipynb)                               | Easy       | 25 min | Two Pointers           | Pure two-pointer technique on sorted array                                |
| [**3Sum**](../problems/015-3sum.ipynb)                                           | Medium     | 60 min | Two Pointers + Sorting | Essential for understanding pointer manipulation and duplicate handling   |
| [**Container With Most Water**](../problems/011-container-with-most-water.ipynb) | Medium     | 45 min | Two Pointers           | Core optimization problem using greedy two-pointer approach               |

**Key Learning Goals**:

- When to use hash maps vs two pointers
- Handling duplicates in sorted arrays
- Greedy decision making with pointers

### Afternoon Session (3-4 hours): Dynamic Programming Basics

**Focus**: Build intuition for the most common DP patterns that solve 60% of DP interview questions.

| Problem                                                                                      | Difficulty | Time   | Key Technique   | Notes                                                        |
| -------------------------------------------------------------------------------------------- | ---------- | ------ | --------------- | ------------------------------------------------------------ |
| [**Best Time to Buy and Sell Stock**](../problems/121-best-time-to-buy-and-sell-stock.ipynb) | Easy       | 30 min | Simple DP       | Introduction to DP thinking - track minimum and maximum      |
| [**House Robber**](../problems/198-house-robber.ipynb)                                       | Medium     | 45 min | Linear DP       | Classic DP pattern - optimal substructure                    |
| [**Coin Change**](../problems/322-coin-change.ipynb)                                         | Medium     | 60 min | DP Optimization | Bottom-up DP with optimization goal                          |
| [**Longest Increasing Subsequence**](../problems/300-longest-increasing-subsequence.ipynb)   | Medium     | 60 min | DP Sequences    | Advanced DP - understand both O(n²) and O(n log n) solutions |

**Key Learning Goals**:

- Identify optimal substructure
- Build recurrence relations
- Space optimization techniques

### Evening Session (2 hours): Graph Fundamentals

**Focus**: Master DFS and BFS - the foundation for all graph problems.

| Problem                                                          | Difficulty | Time   | Key Technique     | Notes                                                      |
| ---------------------------------------------------------------- | ---------- | ------ | ----------------- | ---------------------------------------------------------- |
| [**Number of Islands**](../problems/200-number-of-islands.ipynb) | Medium     | 45 min | DFS/BFS           | Can solve with both DFS and BFS - practice both approaches |
| [**Clone Graph**](../problems/133-clone-graph.ipynb)             | Medium     | 45 min | DFS/BFS + HashMap | Graph traversal with node copying and cycle handling       |

**Key Learning Goals**:

- Recursive vs iterative graph traversal
- Visited set management
- Node copying patterns

---

## Day 2: Advanced Patterns (8-10 hours)

### Morning Session (3-4 hours): Backtracking

**Focus**: Master the decision tree approach that solves all combination/permutation problems.

| Problem                                                      | Difficulty | Time   | Key Technique             | Notes                                                     |
| ------------------------------------------------------------ | ---------- | ------ | ------------------------- | --------------------------------------------------------- |
| [**Permutations**](../problems/046-permutations.ipynb)       | Medium     | 45 min | Basic Backtracking        | Foundation of backtracking - build solution incrementally |
| [**Subsets**](../problems/078-subsets.ipynb)                 | Medium     | 45 min | Subset Generation         | Include/exclude decision pattern                          |
| [**Combination Sum**](../problems/039-combination-sum.ipynb) | Medium     | 60 min | Backtracking with Choices | Unlimited choices with target optimization                |
| [**Word Search**](../problems/079-word-search.ipynb)         | Medium     | 60 min | 2D Backtracking           | Grid backtracking with path marking                       |

**Key Learning Goals**:

- Decision tree construction
- Pruning strategies
- State restoration (backtrack step)

### Afternoon Session (3-4 hours): Trees & Advanced Structures

**Focus**: Essential tree patterns and system design fundamentals.

| Problem                                                                                                  | Difficulty | Time   | Key Technique       | Notes                                       |
| -------------------------------------------------------------------------------------------------------- | ---------- | ------ | ------------------- | ------------------------------------------- |
| [**Binary Tree Maximum Path Sum**](../problems/124-binary-tree-maximum-path-sum.ipynb)                   | Hard       | 75 min | Tree DP             | Advanced tree recursion with global state   |
| [**Serialize and Deserialize Binary Tree**](../problems/297-serialize-and-deserialize-binary-tree.ipynb) | Hard       | 75 min | Tree Serialization  | Critical for system design interviews       |
| [**LRU Cache**](../problems/146-lru-cache.ipynb)                                                         | Medium     | 60 min | Design Problem      | HashMap + Doubly Linked List design pattern |
| [**Implement Trie**](../problems/208-implement-trie-prefix-tree.ipynb)                                   | Medium     | 45 min | Trie Data Structure | Fundamental for string processing problems  |

**Key Learning Goals**:

- Tree DP with global optimization
- Data structure design patterns
- API design considerations

### Evening Session (2-3 hours): Sliding Window & Advanced Array

**Focus**: Master the sliding window technique that solves most substring/subarray problems.

| Problem                                                                                       | Difficulty | Time   | Key Technique           | Notes                                           |
| --------------------------------------------------------------------------------------------- | ---------- | ------ | ----------------------- | ----------------------------------------------- |
| [**Longest Substring Without Repeating Characters**](../problems/003-longest-substring.ipynb) | Medium     | 45 min | Sliding Window          | Classic sliding window with character frequency |
| [**Minimum Window Substring**](../problems/076-minimum-window-substring.ipynb)                | Hard       | 75 min | Advanced Sliding Window | Complex window expansion/contraction logic      |
| [**Sliding Window Maximum**](../problems/239-sliding-window-maximum.ipynb)                    | Hard       | 60 min | Deque Optimization      | Monotonic deque for range queries               |

**Key Learning Goals**:

- Window expansion/contraction logic
- Character frequency tracking
- Deque for sliding window optimization

---

## Bonus Problems (If Extra Time Available)

### High-Impact Problems Worth the Extra Effort

| Problem                                                              | Difficulty | Time   | Key Technique      | Notes                                               |
| -------------------------------------------------------------------- | ---------- | ------ | ------------------ | --------------------------------------------------- |
| [**Trapping Rain Water**](../problems/042-trapping-rain-water.ipynb) | Hard       | 60 min | Two Pointers/Stack | Multiple approaches - great for showing versatility |
| [**Course Schedule**](../problems/207-course-schedule.ipynb)         | Medium     | 45 min | Topological Sort   | Cycle detection in directed graphs                  |
| [**Reverse Linked List**](../problems/206-reverse-linked-list.ipynb) | Easy       | 20 min | Linked List        | Fundamental linked list manipulation                |

---

## Study Strategy & Time Management

### Time Allocation Framework

- **Easy problems**: 20-30 minutes

  - 5 min: Read and understand
  - 10-15 min: Implement
  - 5-10 min: Test and optimize

- **Medium problems**: 45-60 minutes

  - 10 min: Read, understand, plan approach
  - 25-35 min: Implement
  - 10-15 min: Test, debug, optimize

- **Hard problems**: 60-90 minutes
  - 15 min: Read, understand, research if needed
  - 40-60 min: Implement (may need multiple attempts)
  - 15 min: Test, optimize, understand edge cases

### 4-Step Problem-Solving Process

1. **Solo Attempt** (15-20 min max)

   - Read problem carefully
   - Identify pattern/technique needed
   - Attempt implementation
   - Don't get stuck - time box this

2. **Solution Study** (10-15 min)

   - If stuck, read optimal solution
   - Understand the approach completely
   - Note any techniques you missed

3. **Independent Implementation** (20-30 min)

   - Close the solution
   - Implement from scratch based on your understanding
   - This step is crucial for retention

4. **Review & Pattern Recognition** (5-10 min)
   - Test with edge cases
   - Note the key technique/pattern
   - Add to your mental pattern library

---

## Key Patterns to Master

### 1. [Two Pointers](../resources/two-pointer.ipynb)

- **When to use**: Sorted arrays, palindromes, target sum problems
- **Variations**: Same direction, opposite direction, fast/slow
- **Template**: Start with pointers at ends, move based on comparison

### 2. [Sliding Window](../resources/sliding-window.ipynb)

- **When to use**: Substring/subarray problems with constraints
- **Variations**: Fixed size, variable size
- **Template**: Expand window until condition violated, then contract

### 3. [DFS/BFS](../resources/graphs.ipynb)

- **DFS**: Use for path finding, backtracking, tree problems
- **BFS**: Use for shortest path, level-order traversal
- **Key**: Choose based on whether you need all paths or shortest path

### 4. [Backtracking](../resources/backtracking.ipynb)

- **When to use**: Generate all combinations/permutations
- **Template**: Make choice → recurse → undo choice
- **Optimization**: Prune early when possible

### 5. [Dynamic Programming](../resources/dynamic-programming.ipynb)

- **Identify**: Optimal substructure + overlapping subproblems
- **Approach**: Define state → find recurrence → implement (memoization or tabulation)
- **Space optimization**: Often can reduce from 2D to 1D

---

## Success Metrics & Interview Readiness

### After Day 1, you should be able to:

- [ ] Implement two pointers technique confidently
- [ ] Recognize when to use hash maps vs arrays
- [ ] Write basic DFS and BFS from memory
- [ ] Solve simple DP problems by identifying patterns

### After Day 2, you should be able to:

- [ ] Design and implement backtracking solutions
- [ ] Handle complex tree traversal problems
- [ ] Apply sliding window to string/array problems
- [ ] Recognize 80%+ of common interview patterns

### Interview Readiness Assessment

**Completing this 2-day plan provides:**

- **~75% coverage** of common interview patterns
- **Solid foundation** in the top 6 most frequent techniques
- **Pattern recognition** skills for similar problems
- **Implementation confidence** for medium-difficulty problems

### Next Steps for Further Improvement

1. **Week 2**: Focus on advanced DP (edit distance, palindromes)
2. **Week 3**: Advanced graph algorithms (Union Find, shortest paths)
3. **Week 4**: System design problems and optimization techniques

---

## Final Tips for Maximum Retention

1. **Code by hand first** - builds muscle memory
2. **Explain your approach out loud** - simulates interview conditions
3. **Time yourself** - builds speed and pressure handling
4. **Focus on understanding, not memorizing** - patterns transfer to new problems
5. **Review your mistakes** - most learning happens from debugging

**Remember**: The goal isn't to memorize solutions, but to recognize patterns and build problem-solving intuition that applies to new problems you haven't seen before.
