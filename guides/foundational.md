# **3-Week LeetCode Medium/Hard Progression Guide**

## **Overview**

This guide takes you from struggling with medium problems to confidently solving most mediums and tackling introductory hard problems. The focus is on deep pattern understanding rather than problem volume.

Expected Outcome: Solve 70-80% of medium problems and 30-40% of hard problems in covered patterns within reasonable time limits.

## **Week 1: Core Pattern Mastery**

### **Day 1: Two Pointers Foundation**

Morning (2.5 hours): Technique Mastery

* Master opposite-end two pointers: finding pairs, palindromes  
* Same-direction two pointers: fast/slow, different speeds  
* When to use two pointers vs other approaches

Practice Problems:

* [Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) (167) \- Warm up  
* [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) (125) \- Basic pattern  
* [3Sum](https://leetcode.com/problems/3sum/) (15) \- Medium: Classic application  
* [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) (11) \- Medium: Optimization thinking

Afternoon (2 hours): Advanced Applications

* [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) (42) \- Hard: Complex two pointers  
* [3Sum Closest](https://leetcode.com/problems/3sum-closest/) (16) \- Medium: Variation practice

Evening (1 hour): Pattern Documentation

* Create template for two-pointer problems  
* Note when two pointers is optimal vs suboptimal  
* Document common edge cases and gotchas

### **Day 2: Sliding Window Mastery**

Morning (2.5 hours): Window Techniques

* Fixed-size sliding window implementation  
* Variable-size window with expansion/contraction  
* Using hash maps with sliding window

Practice Problems:

* [Maximum Average Subarray](https://leetcode.com/problems/maximum-average-subarray-i/) (643) \- Fixed window warm-up  
* [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) (3) \- Medium: Variable window  
* [Permutation in String](https://leetcode.com/problems/permutation-in-string/) (567) \- Medium: Hash map \+ window  
* [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) (76) \- Hard: Complex window logic

Afternoon (2 hours): Window Variations

* [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) (424) \- Medium  
* [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/) (904) \- Medium: Disguised sliding window

Evening (1 hour): Window Pattern Analysis

* Decision tree: when to expand vs contract window  
* Hash map patterns within sliding window  
* Template for variable-size windows

### **Day 3: Binary Search Deep Dive**

Morning (2.5 hours): Beyond Basic Search

* Search space reduction mindset  
* Finding boundaries: first/last occurrence  
* Binary search on answer spaces

Practice Problems:

* [Search Insert Position](https://leetcode.com/problems/search-insert-position/) (35) \- Template practice  
* [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) (33) \- Medium: Modified search space  
* [Find First and Last Position](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) (34) \- Medium: Boundary finding  
* [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) (240) \- Medium: 2D search space

Afternoon (2 hours): Advanced Binary Search

* [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) (875) \- Medium: Search on answer  
* [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) (410) \- Hard: Complex answer space

Evening (1 hour): Search Strategy

* How to identify binary search opportunities  
* Template for different binary search variants  
* Common implementation pitfalls

### **Day 4: Tree Traversal & Properties**

Morning (2.5 hours): Tree Fundamentals

* DFS: preorder, inorder, postorder (recursive & iterative)  
* BFS level-order traversal  
* Tree validation and property checking

Practice Problems:

* [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) (94) \- Template building  
* [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) (102) \- Medium: BFS application  
* [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) (98) \- Medium: Property validation  
* [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) (104) \- Recursion practice

Afternoon (2 hours): Advanced Tree Problems

* [Lowest Common Ancestor of Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) (236) \- Medium  
* [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) (199) \- Medium: Modified BFS  
* [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) (297) \- Hard: Complex tree operations

Evening (1 hour): Tree Pattern Recognition

* When to use each traversal method  
* Recursive vs iterative trade-offs  
* Parent-child relationship problem patterns

### **Day 5: Dynamic Programming Introduction**

Morning (2.5 hours): DP Fundamentals

* Recognizing optimal substructure  
* Memoization (top-down) vs tabulation (bottom-up)  
* State definition and transition identification

Practice Problems:

* [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) (509) \- Basic memoization  
* [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) (70) \- Medium: 1D DP  
* [House Robber](https://leetcode.com/problems/house-robber/) (198) \- Medium: State transitions  
* [Coin Change](https://leetcode.com/problems/coin-change/) (322) \- Medium: Unbounded knapsack

Afternoon (2 hours): 2D DP Introduction

* [Unique Paths](https://leetcode.com/problems/unique-paths/) (62) \- Medium: 2D grid DP  
* [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) (64) \- Medium: Path problems  
* [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) (1143) \- Medium: String DP

Evening (1 hour): DP Strategy Development

* Framework for approaching DP problems  
* How to identify state and transitions  
* Space optimization techniques

### **Day 6: Graph Fundamentals**

Morning (2.5 hours): Graph Representations & Traversals

* Adjacency list vs adjacency matrix  
* DFS and BFS implementation from scratch  
* Cycle detection in directed and undirected graphs

Practice Problems:

* [Number of Islands](https://leetcode.com/problems/number-of-islands/) (200) \- Medium: DFS/BFS on grid  
* [Clone Graph](https://leetcode.com/problems/clone-graph/) (133) \- Medium: Graph traversal with reconstruction  
* [Course Schedule](https://leetcode.com/problems/course-schedule/) (207) \- Medium: Cycle detection/topological sort

Afternoon (2 hours): Advanced Graph Concepts

* [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) (417) \- Medium: Multiple source BFS/DFS  
* [Word Ladder](https://leetcode.com/problems/word-ladder/) (127) \- Hard: BFS shortest path

Evening (1 hour): Graph Algorithm Selection

* DFS vs BFS decision framework  
* When to use adjacency list vs matrix  
* Graph problem pattern recognition

### **Day 7: Week 1 Integration & Assessment**

Morning (2 hours): Speed Practice

* Solve one problem from each pattern (6 total)  
* Time limit: 30 minutes per medium, 45 minutes per hard  
* Focus on implementation speed and accuracy

Afternoon (2 hours): Mixed Pattern Problems

* [Combination Sum](https://leetcode.com/problems/combination-sum/) (39) \- Medium: Backtracking \+ recursion  
* [Group Anagrams](https://leetcode.com/problems/group-anagrams/) (49) \- Medium: Hash map \+ string manipulation  
* [Merge Intervals](https://leetcode.com/problems/merge-intervals/) (56) \- Medium: Sorting \+ greedy

Evening (2 hours): Week Assessment

* Review all patterns and templates  
* Identify weakest areas for Week 2 focus  
* Speed and accuracy self-evaluation

## **Week 2: Advanced Patterns & Pattern Combinations**

### **Day 8: Stack & Monotonic Stack**

Morning (2.5 hours): Stack Applications

* Basic stack operations and use cases  
* Monotonic stack: increasing and decreasing  
* Next greater/smaller element problems

Practice Problems:

* [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) (20) \- Stack basics  
* [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) (739) \- Medium: Monotonic stack  
* [Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/) (503) \- Medium: Circular array \+ stack  
* [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) (84) \- Hard: Complex monotonic stack

Afternoon (2 hours): Advanced Stack Problems

* [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) (42) \- Hard: Stack alternative approach  
* [Basic Calculator](https://leetcode.com/problems/basic-calculator/) (224) \- Hard: Expression evaluation

Evening (1 hour): Stack Pattern Mastery

* When to use stack vs other data structures  
* Monotonic stack template and variations  
* Expression parsing strategies

### **Day 9: Heap & Priority Queue**

Morning (2.5 hours): Heap Operations

* Min-heap and max-heap implementations  
* Custom comparators for complex objects  
* Heap-based algorithm patterns

Practice Problems:

* [Kth Largest Element in Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) (215) \- Medium: Basic heap usage  
* [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) (347) \- Medium: Heap \+ hash map  
* [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) (23) \- Hard: Heap for merging  
* [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) (295) \- Hard: Two-heap technique

Afternoon (2 hours): Advanced Heap Applications

* [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) (253) \- Medium: Heap for scheduling  
* [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) (239) \- Hard: Deque alternative to heap

Evening (1 hour): Heap Strategy

* When to use min-heap vs max-heap  
* Heap \+ hash map combination patterns  
* Time complexity analysis for heap operations

### **Day 10: Advanced Dynamic Programming**

Morning (2.5 hours): Complex DP Patterns

* 2D DP with multiple states  
* DP on intervals and ranges  
* String DP patterns (edit distance family)

Practice Problems:

* [Edit Distance](https://leetcode.com/problems/edit-distance/) (72) \- Hard: Classic string DP  
* [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) (647) \- Medium: DP on strings  
* [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) (152) \- Medium: DP with state tracking  
* [Burst Balloons](https://leetcode.com/problems/burst-balloons/) (312) \- Hard: Interval DP

Afternoon (2 hours): DP Optimization

* Space complexity reduction techniques  
* Rolling array optimizations  
* When to use bottom-up vs top-down

Evening (1 hour): Advanced DP Strategy

* Complex state definition techniques  
* Multi-dimensional DP approach  
* DP problem variation recognition

### **Day 11: Backtracking & Recursion**

Morning (2.5 hours): Backtracking Framework

* Choice-Constraint-Goal methodology  
* Pruning techniques for optimization  
* Converting backtracking to iteration

Practice Problems:

* [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) (22) \- Medium: Basic backtracking  
* [Combination Sum](https://leetcode.com/problems/combination-sum/) (39) \- Medium: Backtracking with repetition  
* [Permutations](https://leetcode.com/problems/permutations/) (46) \- Medium: Backtracking fundamentals  
* [N-Queens](https://leetcode.com/problems/n-queens/) (51) \- Hard: Complex constraint backtracking

Afternoon (2 hours): Advanced Backtracking

* [Word Search](https://leetcode.com/problems/word-search/) (79) \- Medium: 2D backtracking  
* [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) (37) \- Hard: Multiple constraint backtracking

Evening (1 hour): Recursion Mastery

* Tail recursion optimization  
* Converting recursion to iteration  
* When backtracking is optimal approach

### **Day 12: Advanced Graph Algorithms**

Morning (2.5 hours): Shortest Path & Union-Find

* Dijkstra's algorithm implementation  
* Union-Find (Disjoint Set Union) with path compression  
* Minimum spanning tree concepts

Practice Problems:

* [Network Delay Time](https://leetcode.com/problems/network-delay-time/) (743) \- Medium: Dijkstra's algorithm  
* [Redundant Connection](https://leetcode.com/problems/redundant-connection/) (684) \- Medium: Union-Find  
* [Number of Connected Components](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) (323) \- Medium: Union-Find or DFS  
* [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) (787) \- Medium: Modified shortest path

Afternoon (2 hours): Advanced Graph Problems

* [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) (210) \- Medium: Topological sorting  
* [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/) (269) \- Hard: Topological sort on strings

Evening (1 hour): Graph Algorithm Selection

* When to use Dijkstra vs BFS vs DFS  
* Union-Find vs DFS for connectivity  
* Weighted vs unweighted graph strategies

### **Day 13: String Algorithms & Advanced Techniques**

Morning (2.5 hours): Advanced String Processing

* Rolling hash for substring problems  
* Two-pointer techniques on strings  
* String DP patterns

Practice Problems:

* [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) (5) \- Medium: Multiple approaches  
* [Group Shifted Strings](https://leetcode.com/problems/group-shifted-strings/) (249) \- Medium: String pattern recognition  
* [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) (76) \- Hard: Complex sliding window  
* [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) (10) \- Hard: String DP

Afternoon (2 hours): String Algorithm Integration

* Valid Anagram variations and optimizations  
* Palindrome detection optimizations  
* String matching algorithm comparison

Evening (1 hour): String Pattern Mastery

* When to use hash map vs array for counting  
* String sliding window vs two pointers decision  
* Unicode and edge case handling

### **Day 14: Week 2 Integration & Hard Problem Introduction**

Morning (2 hours): Pattern Combination Practice

* Problems requiring 2+ patterns simultaneously  
* Strategy for breaking down complex problems  
* Code organization for multi-pattern solutions

Afternoon (3 hours): Challenging Integration Problems

* [LRU Cache](https://leetcode.com/problems/lru-cache/) (146) \- Medium: Hash map \+ doubly linked list  
* [Design Twitter](https://leetcode.com/problems/design-twitter/) (355) \- Medium: Multiple data structures  
* [Word Break II](https://leetcode.com/problems/word-break-ii/) (140) \- Hard: DP \+ backtracking  
* [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) (4) \- Hard: Binary search \+ math

Evening (1 hour): Problem-Solving Strategy Refinement

* How to approach completely unfamiliar problems  
* Breaking down complex requirements systematically  
* Testing and debugging complex solutions

## **Week 3: Hard Problem Mastery & Interview Preparation**

### **Day 15: Hard DP & Optimization**

Morning (3 hours): Complex DP Patterns

* Multi-state DP problems  
* DP with optimization (sliding window maximum, etc.)  
* Interval DP and range DP

Practice Problems:

* [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) (309) \- Medium: State machine DP  
* [Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/) (354) \- Hard: 2D DP \+ binary search  
* [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) (115) \- Hard: String DP  
* [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/) (85) \- Hard: DP \+ stack

Afternoon (2 hours): DP Optimization Mastery

* Space optimization techniques  
* Time complexity improvements  
* When to use iterative vs recursive DP

Evening (1 hour): Advanced DP Strategy

* State space design for complex problems  
* Transition optimization techniques  
* DP problem pattern library completion

### **Day 16: Hard Graph & Tree Problems**

Morning (3 hours): Complex Graph Algorithms

* Advanced shortest path problems  
* Graph coloring and partitioning  
* Tree algorithms on general graphs

Practice Problems:

* [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/) (126) \- Hard: BFS \+ backtracking  
* [Critical Connections in Network](https://leetcode.com/problems/critical-connections-in-a-network/) (1192) \- Hard: Tarjan's algorithm  
* [Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/) (310) \- Medium: Topological sort variant  
* [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) (124) \- Hard: Tree DP

Afternoon (2 hours): Tree Algorithm Mastery

* Complex tree DP problems  
* Tree reconstruction problems  
* Multi-tree algorithms

Evening (1 hour): Graph/Tree Algorithm Integration

* When to model problems as graphs vs trees  
* Algorithm selection for complex scenarios  
* Implementation optimization techniques

### **Day 17: System Design & Complex Data Structures**

Morning (3 hours): Advanced Data Structure Design

* Custom data structure implementation  
* Multiple data structure integration  
* Time/space trade-off optimization

Practice Problems:

* [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) (211) \- Medium: Trie \+ DFS  
* [Implement Trie](https://leetcode.com/problems/implement-trie-prefix-tree/) (208) \- Medium: Trie implementation  
* [LFU Cache](https://leetcode.com/problems/lfu-cache/) (460) \- Hard: Multiple data structures  
* [Design In-Memory File System](https://leetcode.com/problems/design-in-memory-file-system/) (588) \- Hard: Complex system design

Afternoon (2 hours): System Design Principles

* Scalability considerations in algorithm design  
* Memory management in complex structures  
* API design for data structure problems

Evening (1 hour): Integration Strategy

* Combining multiple complex patterns  
* Code organization for system design problems  
* Testing strategies for complex systems

### **Day 18: Hard Mixed Problems & Optimization**

Morning (3 hours): Algorithm Integration Challenges

* Problems requiring multiple advanced techniques  
* Optimization beyond basic solutions  
* Pattern recognition in disguised problems

Practice Problems:

* [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) (239) \- Hard: Multiple solution approaches  
* [Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/) (32) \- Hard: DP \+ stack alternatives  
* [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/) (44) \- Hard: Advanced string DP  
* [Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/) (301) \- Hard: BFS \+ pruning

Afternoon (2 hours): Solution Optimization

* Converting brute force to optimal solutions  
* Space-time trade-off analysis  
* Alternative approach development

Evening (1 hour): Advanced Problem-Solving Strategy

* How to optimize seemingly optimal solutions  
* Recognizing when to try different approaches  
* Building intuition for complex optimizations

### **Day 19: Mock Interview Intensive**

Morning (3 hours): Timed Problem Solving

* Solve 3 hard problems under time pressure  
* Practice explaining approach before coding  
* Handle interviewer questions and optimizations

Target Problems:

* [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) (23) \- Hard: Multiple approaches  
* [Word Search II](https://leetcode.com/problems/word-search-ii/) (212) \- Hard: Trie \+ backtracking  
* [Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/) (336) \- Hard: String \+ hash map

Afternoon (2 hours): Interview Communication Practice

* Explaining complex algorithms clearly  
* Handling follow-up optimization requests  
* Code walkthrough and debugging

Evening (1 hour): Interview Strategy Refinement

* Time management under pressure  
* How to recover from getting stuck  
* Clarifying question techniques

### **Day 20: Weak Area Reinforcement**

Morning (3 hours): Targeted Practice

* Focus on 2-3 weakest pattern areas  
* Solve additional problems in weak areas  
* Speed improvement for known patterns

Afternoon (2 hours): Edge Case Mastery

* Common edge cases across all patterns  
* Boundary condition handling  
* Input validation strategies

Evening (2 hours): Pattern Integration Review

* Final review of all major patterns  
* Template and cheatsheet finalization  
* Problem-solving checklist creation

### **Day 21: Final Assessment & Strategy**

Morning (3 hours): Comprehensive Assessment

* Solve 2 medium \+ 2 hard problems  
* Mix of different patterns  
* Time tracking and analysis

Afternoon (2 hours): Performance Analysis

* Identify remaining weak areas  
* Speed benchmarking against targets  
* Accuracy assessment

Evening (2 hours): Long-term Learning Plan

* Create maintenance practice schedule  
* Identify next-level topics to study  
* Build personal problem-solving framework

## **Daily Structure & Guidelines**

### **Time Allocation (5-6 hours daily)**

* Morning (3 hours): New concept learning \+ medium/hard problems  
* Afternoon (2 hours): Application and advanced problems  
* Evening (1 hour): Review, documentation, and planning

### **Problem-Solving Framework**

1. Understand (5-10 minutes): Clarify requirements, identify constraints  
2. Plan (10-15 minutes): Choose approach, consider alternatives  
3. Implement (25-40 minutes): Clean, efficient implementation  
4. Test (5-10 minutes): Verify correctness, edge cases  
5. Optimize (10-15 minutes): Improve time/space complexity  
6. Reflect (5 minutes): Document learnings and patterns

### **Success Metrics**

#### **Week 1 Goals**

* Solve 80% of covered medium problems within 45 minutes  
* Recognize correct pattern within 15 minutes  
* Implement solutions with minimal debugging

#### **Week 2 Goals**

* Solve 70% of medium problems within 30 minutes  
* Successfully attempt 50% of covered hard problems  
* Combine multiple patterns effectively

#### **Week 3 Goals**

* Solve 90% of medium problems within 25 minutes  
* Solve 40% of hard problems within 60 minutes  
* Handle interview-style questions and optimizations

## **Key Success Strategies**

### **Pattern Mastery Over Problem Count**

* Focus on deeply understanding each pattern  
* Practice variations within each pattern  
* Build templates for quick implementation

### **Progressive Difficulty**

* Don't rush to hard problems prematurely  
* Ensure medium problem fluency before advancing  
* Use hard problems to deepen pattern understanding

### **Active Learning**

* Always ask "why this approach?"  
* Compare multiple solutions to same problem  
* Document insights and pattern connections

### **Spaced Repetition**

* Review previous day's patterns before new content  
* Weekly review of all covered patterns  
* Return to challenging problems after few days

This 3-week guide provides a realistic path to strong medium problem proficiency and introductory hard problem capability. The key is consistent daily practice with deep focus on pattern mastery rather than problem volume.