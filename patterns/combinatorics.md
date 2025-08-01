# Combinations & Permutations Cheat Sheet for LeetCode

## Core Concepts

**Permutation**: Order matters (ABC ≠ BAC)
**Combination**: Order doesn't matter (ABC = BAC = CAB)

_"Combination" lock should be called a Permutation lock._

## Mathematical Formulas

```
Permutations: P(n,r) = n! / (n-r)!
Combinations: C(n,r) = n! / (r! × (n-r)!)
```

## Concrete Examples

### Permutations Example
```
Input: [1, 2, 3]
Output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
Explanation: All possible arrangements where order matters
```

### Combinations Example
```
Input: [1, 2, 3, 4], k = 2
Output: [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]
Explanation: All possible selections of 2 elements where order doesn't matter
```

## Common Code Patterns

### 1. Generate All Permutations
```typescript
function permutations(nums: number[]): number[][] {
    const result: number[][] = [];
    
    function backtrack(current: number[]): void {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (!current.includes(nums[i])) {  // or use visited array
                current.push(nums[i]);
                backtrack(current);
                current.pop();
            }
        }
    }
    
    backtrack([]);
    return result;
}
```

### 2. Generate All Combinations
```typescript
function combinations(nums: number[], k: number): number[][] {
    const result: number[][] = [];
    
    function backtrack(start: number, current: number[]): void {
        if (current.length === k) {
            result.push([...current]);
            return;
        }
        
        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(i + 1, current);  // i+1 prevents reuse
            current.pop();
        }
    }
    
    backtrack(0, []);
    return result;
}
```

### 3. Permutations with Duplicates
```typescript
function permuteUnique(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);  // Important!
    const used: boolean[] = new Array(nums.length).fill(false);
    
    function backtrack(current: number[]): void {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }
            // Skip duplicates: if current element equals previous 
            // and previous is not used
            if (i > 0 && nums[i] === nums[i-1] && !used[i-1]) {
                continue;
            }
                
            used[i] = true;
            current.push(nums[i]);
            backtrack(current);
            current.pop();
            used[i] = false;
        }
    }
    
    backtrack([]);
    return result;
}
```

### 4. Combinations with Duplicates
```typescript
function combinationSum2(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    candidates.sort((a, b) => a - b);  // Important!
    
    function backtrack(start: number, current: number[], remaining: number): void {
        if (remaining === 0) {
            result.push([...current]);
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates at same recursion level
            if (i > start && candidates[i] === candidates[i-1]) {
                continue;
            }
            if (candidates[i] > remaining) {
                break;
            }
                
            current.push(candidates[i]);
            backtrack(i + 1, current, remaining - candidates[i]);
            current.pop();
        }
    }
    
    backtrack(0, [], target);
    return result;
}
```

## Key Decision Points

| Problem Type | Start Index | Allow Reuse | Sort Input |
|--------------|-------------|-------------|------------|
| Basic Permutations | - | No | Optional |
| Basic Combinations | i+1 | No | Optional |
| Permutations with Duplicates | - | No | **Yes** |
| Combinations with Duplicates | i+1 | No | **Yes** |
| Combination Sum (reuse allowed) | i | Yes | Optional |

## Common LeetCode Problems with Links

### Core Problems
- [#46 - Permutations](https://leetcode.com/problems/permutations/) - Basic permutation template
- [#47 - Permutations II](https://leetcode.com/problems/permutations-ii/) - Handle duplicates with sorting + skip logic
- [#77 - Combinations](https://leetcode.com/problems/combinations/) - Basic combination template
- [#78 - Subsets](https://leetcode.com/problems/subsets/) - All possible combinations of all lengths

### Combination Sum Series
- [#39 - Combination Sum](https://leetcode.com/problems/combination-sum/) - Allow reusing same element
- [#40 - Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) - No reuse + handle duplicates
- [#216 - Combination Sum III](https://leetcode.com/problems/combination-sum-iii/) - Fixed length combinations with target sum

### Advanced Variations
- [#17 - Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) - Cartesian product style
- [#90 - Subsets II](https://leetcode.com/problems/subsets-ii/) - Subsets with duplicates
- [#131 - Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) - Combination-style string partitioning
- [#22 - Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) - Constrained permutation generation

### Next Permutation
- [#31 - Next Permutation](https://leetcode.com/problems/next-permutation/) - Find lexicographically next permutation
- [#60 - Permutation Sequence](https://leetcode.com/problems/permutation-sequence/) - Find kth permutation efficiently

### String Permutations
- [#567 - Permutation in String](https://leetcode.com/problems/permutation-in-string/) - Check if permutation exists in string
- [#438 - Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) - Find all permutation indices

## Optimization Tips

1. **Early termination**: Break when remaining sum < current candidate
2. **Sorting**: Always sort when dealing with duplicates
3. **Skip duplicates**: `if i > start && nums[i] === nums[i-1] continue`
4. **Space optimization**: Use start index instead of visited array for combinations

## Time Complexity
- Permutations: O(n! × n)
- Combinations: O(C(n,k) × k)
- Both grow exponentially, so focus on pruning invalid branches early

## Practice Order Recommendation

**Beginner**: Start with base cases  
- [#46 - Permutations](https://leetcode.com/problems/permutations/)
- [#77 - Combinations](https://leetcode.com/problems/combinations/)
- [#78 - Subsets](https://leetcode.com/problems/subsets/)

**Intermediate**: Handle duplicates and constraints  
- [#47 - Permutations II](https://leetcode.com/problems/permutations-ii/)
- [#39 - Combination Sum](https://leetcode.com/problems/combination-sum/)
- [#40 - Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)

**Advanced**: Apply to complex scenarios  
- [#17 - Letter Combinations](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
- [#22 - Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)
- [#131 - Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)

**Expert**: Master mathematical approaches  
- [#31 - Next Permutation](https://leetcode.com/problems/next-permutation/)
- [#60 - Permutation Sequence](https://leetcode.com/problems/permutation-sequence/)

This covers 90% of combination/permutation problems you'll encounter on LeetCode!


