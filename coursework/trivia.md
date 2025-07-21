# Origins of Common Algorithm Techniques

These algorithmic techniques have fascinating origins that span decades of computer science research:

## **Two Pointers**

> Used for reducing O(n²) or O(n³) solutions by intelligently moving pointers based on conditions

The two pointers technique doesn't have a single "inventor" but emerged from fundamental algorithmic thinking in the 1960s-70s. It's rooted in basic array traversal optimizations that were developed as programmers sought to reduce nested loops. The technique became formalized through:

- Early sorting algorithms (like the partitioning step in QuickSort)
- Academic algorithms courses teaching optimization strategies
- Competitive programming communities that codified these patterns

## **Sliding Window**

> Maintains a window of elements and expands/contracts based on validity conditions

The sliding window technique originated from early signal processing and data transmission and has dual origins:

**Signal Processing (1940s-50s)**: Originally used in electrical engineering for analyzing continuous signals by examining fixed-size "windows" of data

**Computer Networks (1970s)**: Used in computer networks where the sender maintains a window size to control the number of unacknowledged frames it can transmit - this was crucial for TCP protocol development

**Algorithmic Applications**: Later adapted for array/string problems as computer scientists recognized the pattern's broader applicability

## [**Monotonic Stack/Deque**](./resources/montonic-stack.ipynb)

> Maintains elements in sorted order to efficiently find next greater/smaller elements or optimize lookups

These emerged from:

- **Stack-based parsing** (1950s-60s): Developed for compiler design and expression evaluation
  > Uses LIFO structure to track pending elements and resolve them when conditions are met
- **Deque optimization** (1970s): Academic research on efficient data structures, particularly at universities studying amortized analysis
- **Competitive programming** (1990s-2000s): Communities like ACM ICPC formalized these patterns for contest problems

## [**Greedy Algorithms**](./resources/greedy-algorithm.ipynb)

> Makes locally optimal choices that lead to globally optimal solutions

Founded in formal computer science theory:

- **1950s-60s**: Developed by researchers like Dijkstra, Kruskal, and Prim for graph algorithms
- **Academic formalization**: Universities like MIT, Stanford, and CMU developed the theoretical framework
- **Optimization theory**: Rooted in operations research and mathematical optimization

## **Prefix/Suffix Processing**

> Precomputes values from left-to-right and right-to-left to avoid redundant calculations

This technique emerged from:

- [**Dynamic programming research**](./resources/dynamic-programming.ipynb) (1950s-60s): Richard Bellman's work on optimal decision sequences
- **Parallel computing** (1960s-70s): Need for efficient preprocessing in parallel algorithms
- **Database systems** (1970s-80s): Query optimization requiring precomputed aggregations

## **Evolution and Spread**

Most of these techniques were refined and popularized through **academic computer science programs** at major universities, then spread through **competitive programming** communities and eventually became standard in technical interviews. The patterns you see in LeetCode problems represent decades of algorithmic evolution distilled into teachable, recognizable forms.
