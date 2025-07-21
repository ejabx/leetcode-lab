# Leetcode Labs

Coursework designed to help all experience levels solve leetcode problems. They are all based on 3-week coursework with 6 hour days of studying. It's intense, but _you can do it_!

- `\coursework` has various guides that correspond to the experience levels of the engineer and increase in difficultly

- `\resources` has general guides for algorithms and data structures.

## Generating New Problems

Put notebook info in `bin\notebook.yaml` file.

```console
deno task notebook (or notebook:override)
```

# Cheatsheet (1-Day Intensive Study Plan)

## Morning Session (3-4 hours): Core Fundamentals

### Two Pointers & Arrays (2 hours)

| Problem                                                                         | Difficulty | Key Technique          | Time Allocation |
| ------------------------------------------------------------------------------- | ---------- | ---------------------- | --------------- |
| [Two Sum](problems/001-two-sum.ipynb)                                           | Easy       | Hash Map               | 20 min          |
| [Container With Most Water](problems/011-container-with-most-water.ipynb)       | Medium     | Two Pointers           | 30 min          |
| [3Sum](problems/015-3sum.ipynb)                                                 | Medium     | Two Pointers + Sorting | 45 min          |
| [Product of Array Except Self](problems/238-product-of-array-except-self.ipynb) | Medium     | Array Manipulation     | 25 min          |

### Sliding Window (1 hour)

| Problem                                                                                | Difficulty | Key Technique  | Time Allocation |
| -------------------------------------------------------------------------------------- | ---------- | -------------- | --------------- |
| [Longest Substring Without Repeating Characters](problems/003-longest-substring.ipynb) | Medium     | Sliding Window | 45 min          |

## Afternoon Session (3-4 hours): Graph & Tree Traversal

### Graph Basics (1.5 hours)

| Problem                                                   | Difficulty | Key Technique | Time Allocation |
| --------------------------------------------------------- | ---------- | ------------- | --------------- |
| [Number of Islands](problems/200-number-of-islands.ipynb) | Medium     | DFS/BFS       | 45 min          |
| [Clone Graph](problems/133-clone-graph.ipynb)             | Medium     | DFS/BFS       | 45 min          |

### Backtracking Essentials (1.5 hours)

| Problem                                                                                           | Difficulty | Key Technique | Time Allocation |
| ------------------------------------------------------------------------------------------------- | ---------- | ------------- | --------------- |
| [Letter Combinations of a Phone Number](problems/017-letter-combinations-of-a-phone-number.ipynb) | Medium     | Backtracking  | 45 min          |
| [Permutations](problems/046-permutations.ipynb)                                                   | Medium     | Backtracking  | 45 min          |

## Evening Session (2-3 hours): Advanced Patterns

### Dynamic Programming Essentials (1.5 hours)

| Problem                                                                               | Difficulty | Key Technique      | Time Allocation |
| ------------------------------------------------------------------------------------- | ---------- | ------------------ | --------------- |
| [Best Time to Buy and Sell Stock](problems/121-best-time-to-buy-and-sell-stock.ipynb) | Easy       | DP - State Machine | 30 min          |
| [Coin Change](problems/322-coin-change.ipynb)                                         | Medium     | DP - Bottom Up     | 60 min          |

### Stack Techniques (1 hour)

| Problem                                                    | Difficulty | Key Technique   | Time Allocation |
| ---------------------------------------------------------- | ---------- | --------------- | --------------- |
| [Daily Temperatures](problems/739-daily-temperature.ipynb) | Medium     | Monotonic Stack | 45 min          |

### Final Challenge (30 min)

| Problem                                               | Difficulty | Key Technique    | Time Allocation |
| ----------------------------------------------------- | ---------- | ---------------- | --------------- |
| [Course Schedule](problems/207-course-schedule.ipynb) | Medium     | Topological Sort | 30 min          |

## Quick Reference: Pattern Recognition

| Pattern                 | When to Use                                    | Example Problems                         |
| ----------------------- | ---------------------------------------------- | ---------------------------------------- |
| **Two Pointers**        | Sorted arrays, finding pairs/triplets          | Two Sum, 3Sum, Container With Most Water |
| **Sliding Window**      | Substring/subarray problems                    | Longest Substring Without Repeating      |
| **DFS/BFS**             | Graph/tree traversal, connected components     | Number of Islands, Clone Graph           |
| **Backtracking**        | Generate all combinations/permutations         | Letter Combinations, Permutations        |
| **Dynamic Programming** | Optimization problems, overlapping subproblems | Best Time to Buy/Sell Stock, Coin Change |
| **Monotonic Stack**     | Next greater/smaller element problems          | Daily Temperatures, Trapping Rain Water  |

## Study Strategy for 1-Day Sprint

### Time Management:

- **Strict time limits**: Don't exceed allocated time per problem
- **15-minute rule**: If stuck for 15+ minutes, look at solution
- **Focus on patterns**: Understanding > memorization
- **Quick review**: 5 minutes between problems to solidify concept

### Priority Order:

1. **Must complete**: Problems 1-7 (core patterns)
2. **High priority**: Problems 8-9 (advanced but common)
3. **If time allows**: Problem 10 (complex but valuable)

### Success Metrics for 1 Day:

By end of day, you should recognize and implement:

- Two pointers technique
- Basic sliding window
- DFS traversal on graphs
- Simple backtracking structure
- Basic dynamic programming (1D DP)
- Monotonic stack concept

## Backup Plan (If Running Behind)

### Minimum Viable Coverage (4-5 hours):

| Priority | Problem                                                                                           | Technique      | Time   |
| -------- | ------------------------------------------------------------------------------------------------- | -------------- | ------ |
| **P1**   | [Two Sum](problems/001-two-sum.ipynb)                                                             | Hash Map       | 20 min |
| **P1**   | [Container With Most Water](problems/011-container-with-most-water.ipynb)                         | Two Pointers   | 30 min |
| **P1**   | [Longest Substring Without Repeating Characters](problems/003-longest-substring.ipynb)            | Sliding Window | 45 min |
| **P1**   | [Number of Islands](problems/200-number-of-islands.ipynb)                                         | DFS            | 45 min |
| **P2**   | [Best Time to Buy and Sell Stock](problems/121-best-time-to-buy-and-sell-stock.ipynb)             | DP             | 30 min |
| **P2**   | [Letter Combinations of a Phone Number](problems/017-letter-combinations-of-a-phone-number.ipynb) | Backtracking   | 45 min |

## Interview Readiness Score

Completing the full 1-day plan gives you **~65% coverage** of common interview patterns with **13 essential problems**. The backup plan still provides **~50%** coverage with **6 core problems**.

# Complete Study List

## High Return on Investment (Easy to Learn, High Interview Frequency)

| Category                 | Problems                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Two Pointers**         | [Two Sum](problems/001-two-sum.ipynb), [Container With Most Water](problems/011-container-with-most-water.ipynb), [3Sum](problems/015-3sum.ipynb), [4Sum](problems/018-4sum.ipynb), [Two Sum II](problems/167-two-sum-ii.ipynb), [Product of Array Except Self](problems/238-product-of-array-except-self.ipynb), [Trapping Rain Water](problems/042-trapping-rain-water.ipynb)                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Sliding Window**       | [Longest Substring Without Repeating Characters](problems/003-longest-substring.ipynb), [Minimum Window Substring](problems/076-minimum-window-substring.ipynb), [Sliding Window Maximum](problems/239-sliding-window-maximum.ipynb), [Maximum Average Subarray](problems/643-maximum-average-subarray.ipynb)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Breadth-First Search** | [Word Ladder](problems/127-word-ladder.ipynb), [Clone Graph](problems/133-clone-graph.ipynb), [Number of Islands](problems/200-number-of-islands.ipynb), [Course Schedule](problems/207-course-schedule.ipynb), [Course Schedule II](problems/210-course-schedule-ii.ipynb), [Max Area of Island](problems/695-max-area-of-island.ipynb)                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Depth-First Search**   | [Number of Islands](problems/200-number-of-islands.ipynb), [Clone Graph](problems/133-clone-graph.ipynb), [Max Area of Island](problems/695-max-area-of-island.ipynb), [Number of Islands II](problems/305-number-of-islands-ii.ipynb), [Word Search](problems/079-word-search.ipynb), [Word Search II](problems/212-word-search-ii.ipynb)                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Backtracking**         | [Letter Combinations of a Phone Number](problems/017-letter-combinations-of-a-phone-number.ipynb), [Sudoku Solver](problems/037-sudoku-solver.ipynb), [Combination Sum](problems/039-combination-sum.ipynb), [Combination Sum II](problems/040-combination-sum-ii.ipynb), [Permutations](problems/046-permutations.ipynb), [Permutations II](problems/047-permutations-ii.ipynb), [N-Queens](problems/051-n-queens.ipynb), [Combinations](problems/077-combinations.ipynb), [Word Search](problems/079-word-search.ipynb), [Subsets](problems/078-subsets.ipynb), [Subsets II](problems/090-subsets-ii.ipynb), [Palindrome Partitioning](problems/131-palindrome-partitioning.ipynb), [Word Break II](problems/140-word-break-ii.ipynb), [Word Search II](problems/212-word-search-ii.ipynb) |
| **Stack**                | [Longest Valid Parentheses](problems/032-longest-valid-parentheses.ipynb), [Add Numbers II](problems/455-add-numbers-ii.ipynb)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Monotonic Stack**      | [Largest Rectangle in Histogram](problems/084-largest-rectangle-in-histogram.ipynb), [Maximal Rectangle](problems/085-maximal-rectangle.ipynb), [Daily Temperatures](problems/739-daily-temperature.ipynb)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Medium Return on Investment

| Category                | Problems                                                                                                                                                                                                                                                                                                                          |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Heap**                | [Meeting Rooms II](problems/253-meeting-rooms-ii.ipynb), [Task Scheduler](problems/621-task-scheduler.ipynb), [Cheapest Flights Within K Stops](problems/787-cheapest-flights-within-k-stops.ipynb)                                                                                                                               |
| **Binary Search**       | [Search in Rotated Sorted Array](problems/033-search-in-rotated-sorted-array.ipynb), [Find Minimum in Rotated Sorted Array II](problems/154-find-minimum-in-rotated-sorted-array-ii.ipynb), [Search a 2D Matrix II](problems/240-search-a-2d-matrix-ii.ipynb)                                                                     |
| **Dynamic Programming** | [Edit Distance](problems/072-edit-distance.ipynb), [Best Time to Buy and Sell Stock](problems/121-best-time-to-buy-and-sell-stock.ipynb), [Longest Increasing Subsequence](problems/300-longest-increasing-subsequence.ipynb), [Burst Balloons](problems/312-burst-balloons.ipynb), [Coin Change](problems/322-coin-change.ipynb) |

## Lower Return on Investment

| Category               | Problems                                                                                                                                                                                                                                                              |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Divide and Conquer** | [Sort List](problems/148-sort-list.ipynb), [Construct Binary Tree from Preorder and Inorder Traversal](problems/105-construct-binary-tree-from-preorder-and-inorder-traversal.ipynb), [Binary Tree Maximum Path Sum](problems/124-binary-tree-maximum-path-sum.ipynb) |
| **Trie**               | [Implement Trie (Prefix Tree)](problems/208-implement-trie-prefix-tree.ipynb), [Word Search II](problems/212-word-search-ii.ipynb), [Alien Dictionary](problems/269-alien-dictionary.ipynb)                                                                           |
| **Union Find**         | [Number of Islands II](problems/305-number-of-islands-ii.ipynb)                                                                                                                                                                                                       |
| **Greedy**             | [Meeting Rooms](problems/252-meeting-rooms.ipynb), [Remove Duplicate Letters](problems/316-remove-duplicate-letters.ipynb)                                                                                                                                            |

## Additional Categories

| Category               | Problems                                                                                                                                                                                                                   |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Linked Lists**       | [Reverse Nodes in k-Group](problems/025-reverse-nodes-in-k-group.ipynb), [Copy List with Random Pointer](problems/138-copy-list-with-random-pointer.ipynb), [Reverse Linked List](problems/206-reverse-linked-list.ipynb)( |
| **Design**             | [LRU Cache](problems/146-lru-cache.ipynb), [Design Twitter](problems/355-design-twitter.ipynb)                                                                                                                             |
| **Tree Serialization** | [Serialize and Deserialize Binary Tree](problems/297-serialize-and-deserialize-binary-tree.ipynb)                                                                                                                          |
