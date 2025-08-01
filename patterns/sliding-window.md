# 🪟 Sliding Window Pattern - LeetCode Summary

## Table of Contents
1. [What is Sliding Window?](#what-is-sliding-window)
2. [Core Concept](#core-concept)
3. [Types of Sliding Window](#types-of-sliding-window)
4. [Template Patterns](#template-patterns)
5. [Common Problem Categories](#common-problem-categories)
6. [When to Use Sliding Window](#when-to-use-sliding-window)
7. [Most Important LeetCode Problems](#most-important-leetcode-problems)
8. [Key Implementation Tips](#key-implementation-tips)
9. [Time & Space Complexity](#time--space-complexity)
10. [Interview Strategy](#interview-strategy)
11. [Common Mistakes to Avoid](#common-mistakes-to-avoid)

---

## What is Sliding Window?

**Sliding Window** is an algorithmic technique that maintains a "window" (subarray/substring) that slides through the data structure to find optimal solutions. It's used to convert nested loops (O(n²)) into single loops (O(n)).

## Core Concept

Instead of checking every possible subarray, maintain a window that:
- **Expands** by moving the right pointer
- **Contracts** by moving the left pointer
- **Maintains** a valid state throughout

```
Example: Finding max sum subarray of size 3 in [1,2,3,4,5]

Step 1: [1,2,3] 4,5     → sum = 6
Step 2: 1,[2,3,4] 5     → sum = 9  
Step 3: 1,2,[3,4,5]     → sum = 12 (max)
```

## Types of Sliding Window

### 1. **Fixed Size Window**
- Window size remains constant (k)
- Slide one position at a time
- **Use case:** Maximum sum of subarray of size k

### 2. **Variable Size Window** 
- Window size changes based on conditions
- Expand when condition not met, contract when violated
- **Use case:** Longest substring with at most k distinct characters

## Template Patterns

### Fixed Size Template
```typescript
function fixedWindow(arr: number[], k: number): number {
    if (arr.length < k) return 0;
    
    let windowSum = 0;
    let maxSum = 0;
    
    // Build first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide window
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k]; // Remove left, add right
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}
```

### Variable Size Template (Simple)
```typescript
function variableWindowSimple(arr: number[], target: number): number {
    let left = 0;
    let windowSum = 0;
    let result = 0;
    
    for (let right = 0; right < arr.length; right++) {
        // Expand window
        windowSum += arr[right];
        
        // Contract window while condition is violated
        while (windowSum >= target) {
            result = Math.max(result, right - left + 1);
            windowSum -= arr[left];
            left++;
        }
    }
    
    return result;
}
```

### Variable Size Template (with HashMap)
```typescript
function variableWindowHashMap(s: string, k: number): number {
    let left = 0;
    let result = 0;
    const charCount = new Map<string, number>();
    
    for (let right = 0; right < s.length; right++) {
        // Expand window
        const rightChar = s[right];
        charCount.set(rightChar, (charCount.get(rightChar) || 0) + 1);
        
        // Contract window while invalid
        while (charCount.size > k) {
            const leftChar = s[left];
            charCount.set(leftChar, charCount.get(leftChar)! - 1);
            if (charCount.get(leftChar) === 0) {
                charCount.delete(leftChar);
            }
            left++;
        }
        
        // Update result
        result = Math.max(result, right - left + 1);
    }
    
    return result;
}
```

## Common Problem Categories

### 1. **Subarray Sum Problems**
- Fixed/Variable sum targets
- Maximum/Minimum length constraints

**Examples:**
- [Maximum Average Subarray I (643)](https://leetcode.com/problems/maximum-average-subarray-i/)
- [Subarray Sum Equals K (560)](https://leetcode.com/problems/subarray-sum-equals-k/)
- [Minimum Size Subarray Sum (209)](https://leetcode.com/problems/minimum-size-subarray-sum/)

### 2. **String Pattern Matching**
- Character frequency tracking
- Anagram/permutation detection

**Examples:**
- [Longest Substring Without Repeating Characters (3)](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- [Find All Anagrams in a String (438)](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
- [Permutation in String (567)](https://leetcode.com/problems/permutation-in-string/)

### 3. **Distinct Element Counting**
- At most/exactly K distinct elements
- Character frequency constraints

**Examples:**
- [Longest Substring with At Most K Distinct Characters (340)](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/)
- [Subarrays with K Different Integers (992)](https://leetcode.com/problems/subarrays-with-k-different-integers/)
- [Fruit Into Baskets (904)](https://leetcode.com/problems/fruit-into-baskets/)

### 4. **Binary/Replacement Problems**
- 0s and 1s problems
- Replace/flip limited elements

**Examples:**
- [Max Consecutive Ones III (1004)](https://leetcode.com/problems/max-consecutive-ones-iii/)
- [Longest Repeating Character Replacement (424)](https://leetcode.com/problems/longest-repeating-character-replacement/)
- [Replace the Substring for Balanced String (1234)](https://leetcode.com/problems/replace-the-substring-for-balanced-string/)

## When to Use Sliding Window

### Recognition Signals ✅
- **"Subarray" or "substring"** in problem statement
- **"Contiguous elements"** requirement
- **"Maximum/minimum length"** optimization
- **"At most/exactly K"** constraints
- **"Find all/count"** with contiguous requirement
- Current solution has **nested loops** that can be optimized

### Not Suitable For ❌
- Non-contiguous elements needed
- Need all possible combinations
- Dynamic programming states
- Complex backtracking scenarios
- Global optimization across entire array

## Most Important LeetCode Problems

### **Beginner (Easy)**
1. [Maximum Average Subarray I (643)](https://leetcode.com/problems/maximum-average-subarray-i/) - Fixed window basics
2. [Contains Duplicate II (219)](https://leetcode.com/problems/contains-duplicate-ii/) - Hash + sliding window
3. [Find All Numbers Disappeared in an Array (448)](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/) - Window concept

### **Intermediate (Medium) - Must Know**
4. [Longest Substring Without Repeating Characters (3)](https://leetcode.com/problems/longest-substring-without-repeating-characters/) - **Classic interview question**
5. [Longest Repeating Character Replacement (424)](https://leetcode.com/problems/longest-repeating-character-replacement/) - Character replacement
6. [Max Consecutive Ones III (1004)](https://leetcode.com/problems/max-consecutive-ones-iii/) - Binary replacement
7. [Find All Anagrams in a String (438)](https://leetcode.com/problems/find-all-anagrams-in-a-string/) - Pattern matching
8. [Permutation in String (567)](https://leetcode.com/problems/permutation-in-string/) - Permutation detection
9. [Fruit Into Baskets (904)](https://leetcode.com/problems/fruit-into-baskets/) - At most K distinct
10. [Minimum Size Subarray Sum (209)](https://leetcode.com/problems/minimum-size-subarray-sum/) - Minimum window

### **Advanced (Hard) - Interview Gold**
11. [Minimum Window Substring (76)](https://leetcode.com/problems/minimum-window-substring/) - **Most important hard problem**
12. [Sliding Window Maximum (239)](https://leetcode.com/problems/sliding-window-maximum/) - Deque optimization
13. [Subarrays with K Different Integers (992)](https://leetcode.com/problems/subarrays-with-k-different-integers/) - Complex counting

## Key Implementation Tips

### 1. **HashMap Usage Patterns**
```typescript
// Expanding window (add element)
charCount.set(char, (charCount.get(char) || 0) + 1);

// Contracting window (remove element)
charCount.set(char, charCount.get(char)! - 1);
if (charCount.get(char) === 0) {
    charCount.delete(char); // Important: remove 0 counts
}

// Check if maps are equal (for anagrams)
function mapsEqual(map1: Map<string, number>, map2: Map<string, number>): boolean {
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) {
        if (map2.get(key) !== val) return false;
    }
    return true;
}
```

### 2. **Common Window Validation Functions**
```typescript
// At most K distinct elements
function atMostKDistinct(map: Map<string, number>, k: number): boolean {
    return map.size <= k;
}

// Exactly K distinct elements
function exactlyKDistinct(map: Map<string, number>, k: number): boolean {
    return map.size === k;
}

// No duplicate characters
function noDuplicates(map: Map<string, number>): boolean {
    return Array.from(map.values()).every(count => count <= 1);
}

// Valid anagram window
function isValidAnagram(windowMap: Map<string, number>, targetMap: Map<string, number>): boolean {
    return mapsEqual(windowMap, targetMap);
}
```

### 3. **Result Update Patterns**
```typescript
// Maximum length problems
result = Math.max(result, right - left + 1);

// Minimum length problems
if (isValidWindow()) {
    result = Math.min(result, right - left + 1);
}

// Count all valid subarrays ending at current position
if (isValidWindow()) {
    count += (right - left + 1);
}

// Collect all valid windows
if (isValidWindow()) {
    results.push(left); // or store the actual substring
}
```

## Time & Space Complexity

### **Time Complexity: O(n)**
- Each element is visited at most twice (once by right pointer, once by left pointer)
- HashMap operations are O(1) average case
- **Total:** O(2n) = O(n)

### **Space Complexity: O(k)**
- Where k is the size of the character set or constraint
- HashMap stores at most k distinct elements
- For ASCII: O(128), for lowercase letters: O(26)
- **Worst case:** O(min(n, k))

### **Example Analysis**
```typescript
// For string of length n with at most k distinct characters:
// Time: O(n) - each character processed twice maximum
// Space: O(k) - HashMap stores at most k characters
```

## Interview Strategy

### **Recognition Process**
1. **Read problem** - Look for subarray/substring keywords
2. **Identify type** - Fixed vs variable window
3. **Choose template** - Simple vs HashMap approach
4. **Implement validation** - Window condition logic
5. **Test edge cases** - Empty arrays, single elements

### **Common Interview Questions**
- "Find the longest substring with at most 2 distinct characters"
- "Find all anagrams of a pattern in a string" 
- "What's the minimum window that contains all characters of a target?"
- "Find the maximum sum subarray of size k"

### **Optimization Discussion Points**
- Why O(n) instead of O(n²)?
- When would you use HashSet vs HashMap?
- How to handle edge cases (empty inputs, k=0)?
- Space optimization possibilities?

## Common Mistakes to Avoid

### ❌ **Implementation Mistakes**
```typescript
// WRONG: Not removing zero counts
charCount.set(char, charCount.get(char)! - 1);
// Should also check and delete if count becomes 0

// WRONG: Forgetting to update result inside the loop
while (condition) {
    // Contract window
    left++;
    // Missing: result = Math.min(result, right - left + 1);
}

// WRONG: Off-by-one in window size calculation
windowSize = right - left; // Should be: right - left + 1
```

### ❌ **Logic Mistakes**
- Updating result at wrong time (before vs after validation)
- Using wrong loop structure (nested loops instead of two pointers)
- Not handling empty window cases
- Incorrect HashMap key deletion logic

### ❌ **Edge Cases Often Missed**
- Empty input arrays/strings
- Single element arrays  
- k = 0 or k > array length
- All elements are the same
- No valid window exists
