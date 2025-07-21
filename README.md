# Leetcode Labs

Coursework designed to help all experience levels solve leetcode problems. They are all based on 3-week coursework with 6 hour days of studying. It's intense, but _you can do it_!

The project has various jupyter notebook folders that correspond to the experience levels of the engineer and increase in difficultly:

- [Foundational](./coursework/foundational.md)

  > This 3-week guide provides a realistic path to strong medium problem proficiency and introductory hard problem capability. The key is consistent daily practice with deep focus on pattern mastery rather than problem volume.

- [Senior](./coursework/senior.md)

  > This intensive 3-week program is designed for senior engineers who want to rapidly master algorithmic problem-solving.

- [Elite](./coursework/elite.md)
  > With this elite preparation level, you'll be ready for the most challenging technical interviews at any company, including quantitative trading firms, advanced AI research positions, and senior+ roles at top tech companies. Your preparation will rival computer science PhD candidates and competitive programming experts.

Also, here's [guide](./resources/patterns-and-techniques.ipynb) for general patterns and techiques for solving problems.

## Generating New Problems

```console
deno task notebook:yaml
```

## Cheatsheet (1-2 days Study Plan)

### Day 1: Core Fundamentals (8-10 hours)

#### Morning Session (3-4 hours): Array & Two Pointers

**Must-do problems:**

1. **[Two Sum](problems/001-two-sum.ipynb)** - The classic starter problem
2. **[Container With Most Water](problems/011-container-with-most-water.ipynb)** - Core two-pointer technique
3. **[3Sum](problems/015-3sum.ipynb)** - Essential for understanding pointer manipulation
4. **[Product of Array Except Self](problems/238-product-of-array-except-self.ipynb)** - Common array manipulation pattern

**Why these?** Two pointers is the highest ROI technique - easy to learn, appears frequently in interviews.

#### Afternoon Session (3-4 hours): Sliding Window & String Processing

**Must-do problems:** 5. **[Longest Substring Without Repeating Characters](problems/003-longest-substring.ipynb)** - Classic sliding window 6. **[Minimum Window Substring](problems/076-minimum-window-substring.ipynb)** - Advanced sliding window (if time permits)

#### Evening Session (2 hours): Graph Basics

**Must-do problems:** 7. **[Number of Islands](problems/200-number-of-islands.ipynb)** - Can be solved with both BFS and DFS 8. **[Clone Graph](problems/133-clone-graph.ipynb)** - Graph traversal fundamentals

### Day 2: Advanced Patterns (8-10 hours)

#### Morning Session (3-4 hours): Backtracking

**Must-do problems:** 9. **[Letter Combinations of a Phone Number](problems/017-letter-combinations-of-a-phone-number.ipynb)** - Backtracking introduction 10. **[Permutations](problems/046-permutations.ipynb)** - Classic backtracking pattern 11. **[Combination Sum](problems/039-combination-sum.ipynb)** - Decision tree backtracking

#### Afternoon Session (3-4 hours): Stack & Advanced Techniques

**Must-do problems:** 12. **[Daily Temperatures](problems/739-daily-temperature.ipynb)** - Monotonic stack pattern 13. **[Largest Rectangle in Histogram](problems/084-largest-rectangle-in-histogram.ipynb)** - Advanced stack usage

#### Evening Session (2 hours): Graph Algorithms

**Must-do problems:** 14. **[Course Schedule](problems/207-course-schedule.ipynb)** - Topological sort/cycle detection 15. **[Word Ladder](problems/127-word-ladder.ipynb)** - BFS application

### Bonus Problems (If you have extra time)

16. **[Trapping Rain Water](problems/042-trapping-rain-water.ipynb)** - Multiple solution approaches
17. **[N-Queens](problems/051-n-queens.ipynb)** - Complex backtracking
18. **[Reverse Linked List](problems/206-reverse-linked-list.ipynb)** - Linked list fundamental

### Study Strategy

#### Time Allocation per Problem:

- **Easy problems**: 20-30 minutes
- **Medium problems**: 45-60 minutes
- **Hard problems**: 60-90 minutes

#### Approach:

1. **Attempt solo first** (15-20 min max)
2. **Review solution** if stuck
3. **Code it yourself** after understanding
4. **Review edge cases**
5. **Note the pattern/technique**

#### Key Patterns to Master:

- **Two Pointers**: Left/right pointer movement
- **Sliding Window**: Expand/contract window technique
- **DFS/BFS**: Recursive vs iterative traversal
- **Backtracking**: Build solution incrementally with pruning
- **Monotonic Stack**: Maintain stack property for next greater/smaller

### Success Metrics

By the end of 2 days, you should be able to:

- Identify when to use two pointers vs sliding window
- Implement basic DFS and BFS from scratch
- Recognize backtracking problems and solution structure
- Use stack for monotonic sequences
- Solve similar problems in each category independently

### Interview Readiness Score

Completing these 15-18 problems gives you **~70% coverage** of common interview patterns. Focus on understanding the underlying techniques rather than memorizing solutions.

## Complete Study List

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

---

## Origins of Common Algorithm Techniques

These algorithmic techniques have fascinating origins that span decades of computer science research:

### **Two Pointers**

> Used for reducing O(n²) or O(n³) solutions by intelligently moving pointers based on conditions

The two pointers technique doesn't have a single "inventor" but emerged from fundamental algorithmic thinking in the 1960s-70s. It's rooted in basic array traversal optimizations that were developed as programmers sought to reduce nested loops. The technique became formalized through:

- Early sorting algorithms (like the partitioning step in QuickSort)
- Academic algorithms courses teaching optimization strategies
- Competitive programming communities that codified these patterns

### **Sliding Window**

> Maintains a window of elements and expands/contracts based on validity conditions

The sliding window technique originated from early signal processing and data transmission and has dual origins:

**Signal Processing (1940s-50s)**: Originally used in electrical engineering for analyzing continuous signals by examining fixed-size "windows" of data

**Computer Networks (1970s)**: Used in computer networks where the sender maintains a window size to control the number of unacknowledged frames it can transmit - this was crucial for TCP protocol development

**Algorithmic Applications**: Later adapted for array/string problems as computer scientists recognized the pattern's broader applicability

### [**Monotonic Stack/Deque**](./resources/montonic-stack.ipynb)

> Maintains elements in sorted order to efficiently find next greater/smaller elements or optimize lookups

These emerged from:

- **Stack-based parsing** (1950s-60s): Developed for compiler design and expression evaluation
  > Uses LIFO structure to track pending elements and resolve them when conditions are met
- **Deque optimization** (1970s): Academic research on efficient data structures, particularly at universities studying amortized analysis
- **Competitive programming** (1990s-2000s): Communities like ACM ICPC formalized these patterns for contest problems

### [**Greedy Algorithms**](./resources/greedy-algorithm.ipynb)

> Makes locally optimal choices that lead to globally optimal solutions

Founded in formal computer science theory:

- **1950s-60s**: Developed by researchers like Dijkstra, Kruskal, and Prim for graph algorithms
- **Academic formalization**: Universities like MIT, Stanford, and CMU developed the theoretical framework
- **Optimization theory**: Rooted in operations research and mathematical optimization

### **Prefix/Suffix Processing**

> Precomputes values from left-to-right and right-to-left to avoid redundant calculations

This technique emerged from:

- [**Dynamic programming research**](./resources/dynamic-programming.ipynb) (1950s-60s): Richard Bellman's work on optimal decision sequences
- **Parallel computing** (1960s-70s): Need for efficient preprocessing in parallel algorithms
- **Database systems** (1970s-80s): Query optimization requiring precomputed aggregations

### **Evolution and Spread**

Most of these techniques were refined and popularized through **academic computer science programs** at major universities, then spread through **competitive programming** communities and eventually became standard in technical interviews. The patterns you see in LeetCode problems represent decades of algorithmic evolution distilled into teachable, recognizable forms.
