# 👆👆 Two Pointer Method - LeetCode Complete Guide

## Table of Contents
1. [What is Two Pointer Method?](#what-is-two-pointer-method)
2. [Types of Two Pointer Patterns](#types-of-two-pointer-patterns)
3. [Template Patterns](#template-patterns)
4. [Common Problem Categories](#common-problem-categories)
5. [When to Use Two Pointers](#when-to-use-two-pointers)
6. [Most Important LeetCode Problems](#most-important-leetcode-problems)
7. [Key Implementation Tips](#key-implementation-tips)
8. [Time & Space Complexity](#time--space-complexity)
9. [Two Pointers vs Other Patterns](#two-pointers-vs-other-patterns)
10. [Interview Strategy](#interview-strategy)
11. [Common Mistakes to Avoid](#common-mistakes-to-avoid)

---

## What is Two Pointer Method?

The **Two Pointer Method** is an algorithmic technique that uses two pointers to traverse a data structure, typically an array or string. It's used to solve problems efficiently by reducing time complexity from O(n²) to O(n).

## Core Concept

Instead of using nested loops, use two pointers that move based on certain conditions:
- **Reduce search space** systematically
- **Avoid redundant comparisons**
- **Maintain sorted order properties** when applicable

```
Example: Finding pair sum in sorted array [1,2,3,4,6,7] with target 9

left = 0, right = 5
[1,2,3,4,6,7]
 ↑         ↑
left     right

1 + 7 = 8 < 9, move left++
2 + 7 = 9 = 9, found pair!
```

## Types of Two Pointer Patterns

### 1. **Opposite Direction (Converging)**
- Start from both ends, move towards center
- Used when array is sorted or we need to check pairs
- **Classic use:** Two Sum in sorted array, Palindrome checking

### 2. **Same Direction (Chasing)**
- Both pointers start from beginning, move at different speeds
- Fast/slow pointer technique
- **Classic use:** Remove duplicates, cycle detection

### 3. **Fixed Distance**
- Pointers maintain constant distance
- One pointer leads, other follows
- **Classic use:** Sliding window with specific gap

## Template Patterns

### Opposite Direction Template
```typescript
function twoPointerOpposite<T>(arr: T[], condition: (left: T, right: T) => number): T[] {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        const result = condition(arr[left], arr[right]);
        
        if (result === 0) {
            return [arr[left], arr[right]]; // Found solution
        } else if (result < 0) {
            left++; // Need larger sum/value
        } else {
            right--; // Need smaller sum/value
        }
    }
    
    return []; // No solution found
}

// Example: Two Sum in sorted array
function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            return [left + 1, right + 1]; // 1-indexed
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return [];
}
```

### Same Direction Template
```typescript
function twoPointerSameDirection<T>(arr: T[], condition: (item: T) => boolean): T[] {
    let slow = 0; // Write pointer
    let fast = 0; // Read pointer
    
    while (fast < arr.length) {
        if (condition(arr[fast])) {
            arr[slow] = arr[fast]; // Keep this element
            slow++;
        }
        fast++;
    }
    
    return arr.slice(0, slow); // Return valid portion
}

// Example: Remove duplicates
function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    
    let slow = 0;
    
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    
    return slow + 1; // Length of unique elements
}
```

### Fast/Slow Pointer Template (Cycle Detection)
```typescript
function hasCycle<T>(head: ListNode<T> | null): boolean {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head;
    
    // Move until fast reaches end or they meet
    while (fast && fast.next) {
        slow = slow.next!;        // Move 1 step
        fast = fast.next.next!;   // Move 2 steps
        
        if (slow === fast) {
            return true; // Cycle detected
        }
    }
    
    return false; // No cycle
}
```

## Common Problem Categories

### 1. **Array Pair Problems**
Finding pairs/triplets with specific sum or difference

**Examples:**
- [Two Sum II - Input Array is Sorted (167)](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
- [3Sum (15)](https://leetcode.com/problems/3sum/)
- [4Sum (18)](https://leetcode.com/problems/4sum/)
- [Two Sum Less Than K (1099)](https://leetcode.com/problems/two-sum-less-than-k/)

### 2. **String/Palindrome Problems**
Checking palindromes or string manipulations

**Examples:**
- [Valid Palindrome (125)](https://leetcode.com/problems/valid-palindrome/)
- [Reverse String (344)](https://leetcode.com/problems/reverse-string/)
- [Reverse Words in a String (151)](https://leetcode.com/problems/reverse-words-in-a-string/)

### 3. **Array Modification In-Place**
Removing elements, duplicates, or rearranging

**Examples:**
- [Remove Duplicates from Sorted Array (26)](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
- [Remove Element (27)](https://leetcode.com/problems/remove-element/)
- [Move Zeroes (283)](https://leetcode.com/problems/move-zeroes/)
- [Sort Colors (75)](https://leetcode.com/problems/sort-colors/)

### 4. **Linked List Problems**
Cycle detection, finding middle, removing elements

**Examples:**
- [Linked List Cycle (141)](https://leetcode.com/problems/linked-list-cycle/)
- [Remove Nth Node From End (19)](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
- [Middle of the Linked List (876)](https://leetcode.com/problems/middle-of-the-linked-list/)

### 5. **Subarray Problems**
Finding subarrays with specific properties

**Examples:**
- [Container With Most Water (11)](https://leetcode.com/problems/container-with-most-water/)
- [Trapping Rain Water (42)](https://leetcode.com/problems/trapping-rain-water/)
- [Squares of a Sorted Array (977)](https://leetcode.com/problems/squares-of-a-sorted-array/)

## When to Use Two Pointers

### Recognition Signals ✅
- **Sorted array** or can be sorted
- **Finding pairs/triplets** with target sum
- **Palindrome** checking or string reversal
- **In-place array modification** (remove duplicates, etc.)
- **Linked list traversal** (cycle, middle, etc.)
- **Optimization from O(n²) to O(n)** is possible
- **"Two Sum" variants** in problem statement

### Not Suitable For ❌
- Unsorted data where sorting changes the problem
- Need to preserve original indices (unless using value-index pairs)
- Complex state tracking between elements
- Problems requiring backtracking or dynamic programming
- Non-linear data structures (trees, graphs)

## Most Important LeetCode Problems

### **Beginner (Easy) - Foundation**
1. [Two Sum II - Input Array is Sorted (167)](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) - **Perfect introduction**
2. [Valid Palindrome (125)](https://leetcode.com/problems/valid-palindrome/) - String two pointers
3. [Remove Duplicates from Sorted Array (26)](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) - Same direction
4. [Reverse String (344)](https://leetcode.com/problems/reverse-string/) - Simple opposite direction
5. [Squares of a Sorted Array (977)](https://leetcode.com/problems/squares-of-a-sorted-array/) - Merge-like technique

### **Intermediate (Medium) - Must Master**
6. [3Sum (15)](https://leetcode.com/problems/3sum/) - **Most important medium problem**
7. [Container With Most Water (11)](https://leetcode.com/problems/container-with-most-water/) - Greedy two pointers
8. [Sort Colors (75)](https://leetcode.com/problems/sort-colors/) - Three-way partitioning
9. [Remove Nth Node From End (19)](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) - Fixed distance
10. [Move Zeroes (283)](https://leetcode.com/problems/move-zeroes/) - Partitioning
11. [Find the Duplicate Number (287)](https://leetcode.com/problems/find-the-duplicate-number/) - Floyd's cycle detection

### **Advanced (Hard) - Interview Excellence**
12. [Trapping Rain Water (42)](https://leetcode.com/problems/trapping-rain-water/) - **Classic hard problem**
13. [4Sum (18)](https://leetcode.com/problems/4sum/) - Extended 3Sum
14. [Minimum Window Substring (76)](https://leetcode.com/problems/minimum-window-substring/) - Advanced two pointers

### **Linked List Specific**
15. [Linked List Cycle (141)](https://leetcode.com/problems/linked-list-cycle/) - Floyd's algorithm
16. [Middle of the Linked List (876)](https://leetcode.com/problems/middle-of-the-linked-list/) - Fast/slow
17. [Palindrome Linked List (234)](https://leetcode.com/problems/palindrome-linked-list/) - Multiple techniques

## Key Implementation Tips

### 1. **Initialization Patterns**
```typescript
// Opposite direction - start from ends
let left = 0, right = arr.length - 1;

// Same direction - both start from beginning
let slow = 0, fast = 0;

// Fixed distance - maintain gap
let first = 0, second = k; // k distance apart

// Cycle detection - both start from head
let slow = head, fast = head;
```

### 2. **Movement Patterns**
```typescript
// Standard opposite movement
if (condition) {
    left++;
} else {
    right--;
}

// Same direction with filtering
if (shouldKeep(arr[fast])) {
    arr[slow] = arr[fast];
    slow++;
}
fast++;

// Fast/slow for cycle detection
slow = slow.next;
fast = fast.next?.next; // Check for null
```

### 3. **Boundary Conditions**
```typescript
// Always check bounds
while (left < right) { /* opposite direction */ }
while (fast < arr.length) { /* same direction */ }
while (fast && fast.next) { /* linked list */ }

// Handle empty arrays
if (!arr || arr.length === 0) return defaultValue;

// Single element arrays
if (arr.length === 1) return handleSingleElement();
```

### 4. **Common Optimizations**
```typescript
// Skip duplicates in 3Sum
while (left < right && nums[left] === nums[left + 1]) left++;
while (left < right && nums[right] === nums[right - 1]) right--;

// Early termination
if (currentSum > target && nums[i] > 0) break; // All positive remaining

// Sorting for two pointers
nums.sort((a, b) => a - b); // Enable two-pointer technique
```

## Time & Space Complexity

### **Time Complexity: O(n)**
- Each element is visited at most once by each pointer
- Total operations: O(2n) = O(n)
- **Exception:** Problems requiring sorting first: O(n log n)

### **Space Complexity: O(1)**
- Only using constant extra space for pointers
- In-place modifications preserve space efficiency
- **Exception:** When creating result arrays: O(k) where k is result size

### **Complexity Comparison**
```typescript
// Brute force approach
function twoSumBrute(nums: number[], target: number): number[] {
    // Time: O(n²), Space: O(1)
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
    return [];
}

// Two pointer approach (sorted array)
function twoSumTwoPointer(nums: number[], target: number): number[] {
    // Time: O(n), Space: O(1)
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) return [left, right];
        else if (sum < target) left++;
        else right--;
    }
    return [];
}
```

## Two Pointers vs Other Patterns

### **Two Pointers vs Hash Map**
```typescript
// Hash Map: Better for unsorted arrays, preserves indices
// Time: O(n), Space: O(n)
function twoSumHashMap(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// Two Pointers: Better for sorted arrays, constant space
// Time: O(n), Space: O(1)
```

### **Two Pointers vs Sliding Window**
```typescript
// Sliding Window: Variable window size, typically substring problems
function longestSubstring(s: string): number {
    let left = 0, maxLen = 0;
    const seen = new Set<string>();
    
    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

// Two Pointers: Fixed logic, typically array problems
function removeDuplicates(nums: number[]): number {
    let slow = 0;
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
}
```

## Interview Strategy

### **Problem Recognition Process**
1. **Identify data structure** - Array, string, or linked list?
2. **Check if sorted** - Can we use opposite direction pointers?
3. **Look for pairs/triplets** - Sum problems are classic two pointers
4. **In-place modification** - Same direction pointers often work
5. **Cycle detection** - Fast/slow pointer technique

### **Common Interview Scenarios**
```typescript
// Scenario 1: "Find two numbers that sum to target in sorted array"
// → Use opposite direction pointers

// Scenario 2: "Remove duplicates from sorted array in-place"
// → Use same direction pointers (slow/fast)

// Scenario 3: "Check if linked list has cycle"
// → Use fast/slow pointers (Floyd's algorithm)

// Scenario 4: "Find all triplets that sum to zero"
// → Sort array + two pointers for each element
```

### **Explaining Your Approach**
1. **State the pattern** - "I'll use two pointers..."
2. **Explain initialization** - "Start from opposite ends because..."
3. **Describe movement logic** - "If sum is too small, move left pointer..."
4. **Discuss termination** - "Stop when pointers meet..."
5. **Analyze complexity** - "Time O(n), Space O(1)..."

## Common Mistakes to Avoid

### ❌ **Boundary Mistakes**
```typescript
// WRONG: Can cause infinite loop
while (left <= right) { // Should be left < right for opposite direction
    // ...
}

// WRONG: Array out of bounds
while (fast < arr.length) {
    if (fast + 1 < arr.length && arr[fast] === arr[fast + 1]) {
        // Always check bounds before accessing
    }
}

// CORRECT: Proper bounds checking
while (left < right && fast < arr.length - 1) {
    // Safe to access arr[fast + 1]
}
```

### ❌ **Logic Mistakes**
```typescript
// WRONG: Not handling duplicates in 3Sum
for (let i = 0; i < nums.length - 2; i++) {
    // Missing: Skip duplicate i values
    let left = i + 1, right = nums.length - 1;
}

// CORRECT: Skip duplicates
for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates
    let left = i + 1, right = nums.length - 1;
}
```

### ❌ **Initialization Errors**
```typescript
// WRONG: Fast/slow pointers in cycle detection
let slow = head;
let fast = head.next; // Starting at different positions

// CORRECT: Both start at head
let slow = head;
let fast = head; // Floyd's algorithm requires same start
```

### ❌ **Missing Edge Cases**
```typescript
// Common edge cases to handle:
if (!arr || arr.length === 0) return [];        // Empty array
if (!head) return false;                         // Empty linked list
if (arr.length === 1) return handleSingle();    // Single element
if (target < arr[0] + arr[1]) return [];        // Impossible target
```

## Advanced Techniques

### **Three-Way Partitioning (Dutch National Flag)**
```typescript
function sortColors(nums: number[]): void {
    let low = 0, mid = 0, high = nums.length - 1;
    
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else { // nums[mid] === 2
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
            // Don't increment mid here!
        }
    }
}
```

### **Floyd's Cycle Detection with Cycle Start**
```typescript
function detectCycleStart(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return null;
    
    // Phase 1: Detect cycle
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next!;
        if (slow === fast) break;
    }
    
    if (!fast || !fast.next) return null; // No cycle
    
    // Phase 2: Find cycle start
    slow = head;
    while (slow !== fast) {
        slow = slow.next!;
        fast = fast.next!;
    }
    
    return slow; // Start of cycle
}
```

