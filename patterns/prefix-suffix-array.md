# Prefix/Suffix Arrays

## What Are Prefix and Suffix Arrays?

**Prefix arrays** and **suffix arrays** are powerful preprocessing techniques that allow us to answer range queries and solve array-based problems efficiently. Instead of recalculating values repeatedly, we precompute cumulative results to achieve optimal time complexity.

### Prefix Arrays
A **prefix array** stores cumulative values from the beginning of the array up to each index:
- `prefix[i] = arr[0] + arr[1] + ... + arr[i]` (for prefix sum)
- `prefix[i] = arr[0] * arr[1] * ... * arr[i]` (for prefix product)

### Suffix Arrays
A **suffix array** stores cumulative values from each index to the end of the array:
- `suffix[i] = arr[i] + arr[i+1] + ... + arr[n-1]` (for suffix sum)
- `suffix[i] = arr[i] * arr[i+1] * ... * arr[n-1]` (for suffix product)

## Why Use Prefix/Suffix Arrays?

**Time Complexity Benefits:**
- Range queries: O(n) → O(1)
- Multiple subarray calculations: O(n²) → O(n)
- Eliminates nested loops in many problems

**Common Use Cases:**
- Range sum/product queries
- Subarray problems with specific constraints
- Finding elements that satisfy relative conditions
- Matrix operations (2D prefix sums)
- Problems requiring "all except current element" calculations

## Core Patterns and Applications

### 1. Range Query Problems

**Pattern:** When you need to calculate sums/products for multiple ranges efficiently.

**Key Problems:**
- [Range Sum Query - Immutable (303)](https://leetcode.com/problems/range-sum-query-immutable/)
- [Range Sum Query 2D - Immutable (304)](https://leetcode.com/problems/range-sum-query-2d-immutable/)

**Template:**
```typescript
// Build prefix sum
const prefix = [0];
for (let i = 0; i < arr.length; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
}

// Get range sum [left, right] in O(1)
const rangeSum = prefix[right + 1] - prefix[left];
```

### 2. Product of Array Except Self

**Pattern:** Calculate products/sums excluding the current element.

**Key Problem:** [Product of Array Except Self (238)](https://leetcode.com/problems/product-of-array-except-self/)

This is the **most famous** prefix/suffix product problem and appears frequently in FAANG interviews.

**Approach:** For each index `i`, the result is `leftProduct[i] * rightProduct[i]` where:
- `leftProduct[i]` = product of all elements to the left of index `i`
- `rightProduct[i]` = product of all elements to the right of index `i`

### 3. Subarray Sum Problems

**Pattern:** Find subarrays with specific sum properties using prefix sums + hash maps.

**Key Problems:**
- [Subarray Sum Equals K (560)](https://leetcode.com/problems/subarray-sum-equals-k/)
- [Continuous Subarray Sum (523)](https://leetcode.com/problems/continuous-subarray-sum/)
- [Contiguous Array (525)](https://leetcode.com/problems/contiguous-array/)

**Core Insight:** If `prefixSum[j] - prefixSum[i] = k`, then the subarray from `i+1` to `j` has sum `k`.

### 4. Running Calculations

**Pattern:** Maintain cumulative values while traversing the array.

**Key Problems:**
- [Running Sum of 1D Array (1480)](https://leetcode.com/problems/running-sum-of-1d-array/)
- [Find Pivot Index (724)](https://leetcode.com/problems/find-pivot-index/)
- [Find the Highest Altitude (1732)](https://leetcode.com/problems/find-the-highest-altitude/)

### 5. 2D Matrix Problems

**Pattern:** Extend prefix sums to 2D for efficient submatrix calculations.

**Key Problems:**
- [Matrix Block Sum (1314)](https://leetcode.com/problems/matrix-block-sum/)
- [Number of Submatrices That Sum to Target (1074)](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/)

## Complete Problem Categories

### **Beginner Level (Easy)**
1. [Running Sum of 1D Array (1480)](https://leetcode.com/problems/running-sum-of-1d-array/) - Introduction to prefix sums
2. [Find Pivot Index (724)](https://leetcode.com/problems/find-pivot-index/) - Left sum equals right sum
3. [Find the Middle Index in Array (1991)](https://leetcode.com/problems/find-the-middle-index-in-array/) - Similar to pivot index
4. [Find the Highest Altitude (1732)](https://leetcode.com/problems/find-the-highest-altitude/) - Running sum application

### **Intermediate Level (Medium)**
5. [Range Sum Query - Immutable (303)](https://leetcode.com/problems/range-sum-query-immutable/) - Classic prefix sum
6. [Product of Array Except Self (238)](https://leetcode.com/problems/product-of-array-except-self/) - **Must know for interviews**
7. [Subarray Sum Equals K (560)](https://leetcode.com/problems/subarray-sum-equals-k/) - Prefix sum + HashMap
8. [Contiguous Array (525)](https://leetcode.com/problems/contiguous-array/) - Balance problems
9. [Continuous Subarray Sum (523)](https://leetcode.com/problems/continuous-subarray-sum/) - Modular arithmetic
10. [Number of Ways to Split Array (2270)](https://leetcode.com/problems/number-of-ways-to-split-array/) - Left vs right sum comparison
11. [Corporate Flight Bookings (1109)](https://leetcode.com/problems/corporate-flight-bookings/) - Difference array technique
12. [Range Sum Query 2D - Immutable (304)](https://leetcode.com/problems/range-sum-query-2d-immutable/) - 2D prefix sums
13. [Matrix Block Sum (1314)](https://leetcode.com/problems/matrix-block-sum/) - 2D applications

### **Advanced Level (Hard)**
14. [Number of Submatrices That Sum to Target (1074)](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/) - 2D + HashMap
15. [Max Sum of Rectangle No Larger Than K (363)](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/) - Complex 2D optimization
16. [Count of Range Sum (327)](https://leetcode.com/problems/count-of-range-sum/) - Advanced prefix sum with merge sort

### **Special Variations**
17. [Maximum Product Subarray (152)](https://leetcode.com/problems/maximum-product-subarray/) - Prefix/suffix products with sign handling
18. [Number of Sub-arrays With Odd Sum (1524)](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/) - Counting problems
19. [Car Pooling (1094)](https://leetcode.com/problems/car-pooling/) - Difference array
20. [Range Addition (370)](https://leetcode.com/problems/range-addition/) - Premium problem, difference array

## Interview Patterns and Tips

### **Recognition Signals**
Look for prefix/suffix patterns when you see:
- "Sum of elements in range [i, j]" 
- "Product of all elements except current"
- "Find subarray with sum equals K"
- "Multiple queries on the same array"
- "Cumulative calculations"
- "Left vs right comparisons"

### **Common Interview Questions**
**FAANG companies frequently ask:**
- Product of Array Except Self (238) - **Most popular**
- Subarray Sum Equals K (560) - Tests HashMap skills
- Range Sum Query problems - Tests preprocessing understanding
- 2D matrix problems - Tests 2D thinking

### **Implementation Tips**
1. **Handle edge cases:** Empty arrays, single elements
2. **0-indexed vs 1-indexed:** Choose consistent indexing for prefix arrays
3. **Integer overflow:** Consider using long for products
4. **Space optimization:** Sometimes you can compute results in-place
5. **HashMap optimization:** Use `map.getOrDefault()` for cleaner code

### **Time/Space Complexity**
- **Preprocessing:** O(n) time, O(n) space
- **Range queries:** O(1) time per query
- **Space optimization:** Often possible to reduce to O(1) extra space

## Advanced Techniques

### **Difference Arrays**
Used for range update problems:
```typescript
// Multiple range updates [l, r] += val
const diff = [0];
for (let i = 0; i < n; i++) {
    diff[i + 1] = arr[i + 1] - arr[i];
}
// Update range [l, r]
diff[l] += val;
diff[r + 1] -= val;
```

### **2D Prefix Sums**
```typescript
// Build 2D prefix sum
for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
        prefix[i][j] = matrix[i-1][j-1] + 
                      prefix[i-1][j] + 
                      prefix[i][j-1] - 
                      prefix[i-1][j-1];
    }
}
```

### **Prefix Sum with HashMap**
```typescript
// Count subarrays with sum K
const prefixCount = new Map([[0, 1]]);
let prefixSum = 0, count = 0;
for (const num of arr) {
    prefixSum += num;
    count += prefixCount.get(prefixSum - k) || 0;
    prefixCount.set(prefixSum, (prefixCount.get(prefixSum) || 0) + 1);
}
```

## Practice Strategy

### **Learning Path**
1. **Start with basics:** Running Sum (1480), Find Pivot Index (724)
2. **Master the classic:** Product of Array Except Self (238)
3. **Add HashMap:** Subarray Sum Equals K (560)
4. **Expand to 2D:** Range Sum Query 2D (304)
5. **Advanced patterns:** Count of Range Sum (327)

### **Interview Preparation**
- Practice explaining the preprocessing step clearly
- Be ready to optimize space complexity
- Know when to use difference arrays vs prefix sums
- Understand the trade-off between preprocessing time and query time

## Conclusion

Prefix and suffix arrays are fundamental techniques that appear in **15-20% of all array problems** on LeetCode. Mastering these patterns will significantly improve your problem-solving speed and help you recognize optimization opportunities in coding interviews.

The key insight is that by investing O(n) time upfront in preprocessing, we can answer complex queries in O(1) time, transforming many O(n²) solutions into elegant O(n) algorithms.

**Most Important Problems to Master:**
1. Product of Array Except Self (238)
2. Subarray Sum Equals K (560) 
3. Range Sum Query - Immutable (303)
4. Contiguous Array (525)

These four problems cover 80% of the prefix/suffix patterns you'll encounter in technical interviews!


