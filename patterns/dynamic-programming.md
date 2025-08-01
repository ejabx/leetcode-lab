# Dynamic Programming LeetCode Templates

## What is Dynamic Programming?

Dynamic Programming (DP) is an algorithmic paradigm that solves complex problems by breaking them down into simpler subproblems. It stores the results of subproblems to avoid computing the same results again - a technique called **memoization** or **tabulation**.

### Two Key Properties for DP:

1. **Optimal Substructure**: An optimal solution to the problem contains optimal solutions to subproblems
2. **Overlapping Subproblems**: The space of subproblems must be "small" - a recursive algorithm for the problem solves the same subproblems over and over

### When to Recognize DP is Applicable:

**🔍 Problem Characteristics to Look For:**

- **Optimization problems**: "Find the maximum/minimum/longest/shortest..."
- **Counting problems**: "How many ways to..." or "Count the number of..."
- **Decision problems**: "Is it possible to..." (often can be solved with DP)
- **Recursive structure**: The problem can be broken into similar, smaller subproblems
- **Choices at each step**: At each step, you make a decision that affects future steps

**📝 Key Phrases That Signal DP:**

- "Find the optimal way to..."
- "Maximum/minimum profit/cost/length"
- "How many different ways"
- "Longest increasing/decreasing subsequence"
- "Minimum number of operations"
- "Can you partition/divide..."
- "Best strategy to..."

**⚡ When NOT to Use DP:**

- The subproblems don't overlap (use divide and conquer instead)
- Greedy approach gives optimal solution
- Problem requires exploring all possibilities without optimization
- Simple mathematical formula exists

**🎯 Quick DP Check:**
Ask yourself: "Can I solve this by making a choice at each step, where each choice depends on solutions to smaller versions of the same problem?" If yes, it's likely DP!

## Common Pattern Templates

### 1. Linear DP (1D Array)

**Pattern**: Problems where the current state depends on previous states in a sequence.

**Template**:

```python
def linear_dp(nums):
    n = len(nums)
    if n == 0:
        return 0

    # dp[i] represents the optimal solution up to index i
    dp = [0] * n
    dp[0] = nums[0]  # base case

    for i in range(1, n):
        dp[i] = max(dp[i-1], nums[i])  # recurrence relation

    return dp[n-1]
```

**Examples**: House Robber, Maximum Subarray, Climbing Stairs

### 2. Grid DP (2D Array)

**Pattern**: Problems on a 2D grid where you can move in certain directions.

**Template**:

```python
def grid_dp(grid):
    if not grid or not grid[0]:
        return 0

    m, n = len(grid), len(grid[0])
    dp = [[0] * n for _ in range(m)]

    # Initialize base cases
    dp[0][0] = grid[0][0]

    # Fill first row and column
    for i in range(1, m):
        dp[i][0] = dp[i-1][0] + grid[i][0]
    for j in range(1, n):
        dp[0][j] = dp[0][j-1] + grid[0][j]

    # Fill the rest
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]

    return dp[m-1][n-1]
```

**Examples**: Unique Paths, Minimum Path Sum, Dungeon Game

### 3. Knapsack DP

**Pattern**: Choose items with weights/values to optimize some objective.

#### 0/1 Knapsack Template:

```python
def knapsack_01(weights, values, capacity):
    n = len(weights)
    # dp[i][w] = max value using first i items with capacity w
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(capacity + 1):
            # Don't take item i-1
            dp[i][w] = dp[i-1][w]

            # Take item i-1 if possible
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w], dp[i-1][w - weights[i-1]] + values[i-1])

    return dp[n][capacity]
```

#### Unbounded Knapsack Template:

```python
def knapsack_unbounded(weights, values, capacity):
    dp = [0] * (capacity + 1)

    for w in range(1, capacity + 1):
        for i in range(len(weights)):
            if weights[i] <= w:
                dp[w] = max(dp[w], dp[w - weights[i]] + values[i])

    return dp[capacity]
```

**Examples**: Partition Equal Subset Sum, Coin Change, Target Sum

### 4. Longest Common Subsequence (LCS) Pattern

**Pattern**: Compare two sequences to find optimal alignment/matching.

**Template**:

```python
def lcs_dp(text1, text2):
    m, n = len(text1), len(text2)
    # dp[i][j] = LCS length of text1[:i] and text2[:j]
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    return dp[m][n]
```

**Examples**: Longest Common Subsequence, Edit Distance, Distinct Subsequences

### 5. Palindrome DP

**Pattern**: Problems involving palindromic substrings/subsequences.

**Template**:

```python
def palindrome_dp(s):
    n = len(s)
    # dp[i][j] = True if s[i:j+1] is palindrome
    dp = [[False] * n for _ in range(n)]

    # Every single character is a palindrome
    for i in range(n):
        dp[i][i] = True

    # Check for palindromes of length 2
    for i in range(n - 1):
        dp[i][i + 1] = (s[i] == s[i + 1])

    # Check for palindromes of length 3 and more
    for length in range(3, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = (s[i] == s[j]) and dp[i + 1][j - 1]

    return dp
```

**Examples**: Longest Palindromic Substring, Palindromic Substrings, Longest Palindromic Subsequence

### 6. Interval DP

**Pattern**: Problems on intervals where you merge/split optimally.

**Template**:

```python
def interval_dp(arr):
    n = len(arr)
    # dp[i][j] = minimum cost to merge interval [i, j]
    dp = [[0] * n for _ in range(n)]

    # For all interval lengths
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')

            # Try all possible split points
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + merge_cost(arr, i, k, j)
                dp[i][j] = min(dp[i][j], cost)

    return dp[0][n - 1]
```

**Examples**: Matrix Chain Multiplication, Burst Balloons, Minimum Cost to Cut a Stick

### 7. State Machine DP

**Pattern**: Problems with different states and transitions between them.

**Template**:

```python
def state_machine_dp(prices):
    n = len(prices)
    # Multiple states: hold, sold, rest, etc.
    hold = [0] * n
    sold = [0] * n
    rest = [0] * n

    hold[0] = -prices[0]  # Buy on day 0
    sold[0] = 0
    rest[0] = 0

    for i in range(1, n):
        hold[i] = max(hold[i-1], rest[i-1] - prices[i])  # Keep holding or buy
        sold[i] = hold[i-1] + prices[i]  # Sell
        rest[i] = max(rest[i-1], sold[i-1])  # Rest

    return max(sold[n-1], rest[n-1])
```

**Examples**: Best Time to Buy and Sell Stock (with variations), House Robber II

### 8. Digit DP

**Pattern**: Count numbers with certain digit properties.

**Template**:

```python
def digit_dp(num_str):
    n = len(num_str)
    memo = {}

    def dp(pos, tight, started, state):
        if pos == n:
            return 1 if started else 0

        if (pos, tight, started, state) in memo:
            return memo[(pos, tight, started, state)]

        limit = int(num_str[pos]) if tight else 9
        result = 0

        for digit in range(0, limit + 1):
            new_tight = tight and (digit == limit)
            new_started = started or (digit > 0)
            new_state = update_state(state, digit, new_started)

            result += dp(pos + 1, new_tight, new_started, new_state)

        memo[(pos, tight, started, state)] = result
        return result

    return dp(0, True, False, initial_state)
```

**Examples**: Count Numbers with Unique Digits, Numbers with Repeated Digits

## General Problem-Solving Steps

1. **Identify if it's a DP problem**: Look for overlapping subproblems and optimal substructure
2. **Define the state**: What parameters uniquely identify a subproblem?
3. **Write the recurrence relation**: How does the current state relate to previous states?
4. **Determine base cases**: What are the simplest subproblems?
5. **Decide approach**: Top-down (memoization) or bottom-up (tabulation)
6. **Optimize space**: Can you reduce the space complexity?

## Space Optimization Techniques

- **Rolling Array**: If dp[i] only depends on dp[i-1], use two variables instead of an array
- **1D to 2D**: Sometimes you can reduce a 2D DP to 1D by processing in the right order

```python
# Original 2D DP
dp = [[0] * (target + 1) for _ in range(n + 1)]

# Optimized to 1D (process backwards to avoid overwriting needed values)
dp = [0] * (target + 1)
for i in range(n):
    for j in range(target, nums[i] - 1, -1):  # Backwards
        dp[j] = max(dp[j], dp[j - nums[i]] + nums[i])
```

## Common Mistakes to Avoid

- Forgetting to handle base cases
- Off-by-one errors in array indexing
- Not considering the order of iteration (especially in space-optimized solutions)
- Incorrect state definition leading to wrong recurrence relations
- Not checking if the problem actually needs DP (sometimes greedy works better)
