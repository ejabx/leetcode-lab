# Binary Search: A Complete Guide

Binary search is one of the most fundamental and efficient search algorithms in computer science. It works by repeatedly dividing a sorted dataset in half until the target element is found.

## How Binary Search Works

Binary search operates on the "divide and conquer" principle. Given a sorted array, it compares the target value with the middle element:

- If the target equals the middle element, we've found our answer
- If the target is less than the middle element, search the left half
- If the target is greater than the middle element, search the right half

This process repeats until the element is found or the search space is exhausted.

## Key Requirements

**Critical prerequisite**: The data must be sorted. Binary search only works on sorted collections.

## Time and Space Complexity

- **Time Complexity**: O(log n) - dramatically faster than linear search's O(n)
- **Space Complexity**: O(1) for iterative implementation, O(log n) for recursive

## Basic Implementation

### Iterative Approach (Recommended)

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1  # Element not found
```

### Recursive Approach

```python
def binary_search_recursive(arr, target, left=0, right=None):
    if right is None:
        right = len(arr) - 1

    if left > right:
        return -1

    mid = (left + right) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)
```

## Common Variations

### Finding Insertion Point

```python
def find_insertion_point(arr, target):
    left, right = 0, len(arr)

    while left < right:
        mid = (left + right) // 2
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid

    return left
```

### Finding First/Last Occurrence

```python
def find_first_occurrence(arr, target):
    left, right = 0, len(arr) - 1
    result = -1

    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            result = mid
            right = mid - 1  # Continue searching left
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return result
```

## Real-World Applications

Binary search appears in many contexts beyond simple array searching:

- **Database indexing**: B-trees use binary search principles
- **Finding square roots**: Numerical methods for approximation
- **Peak finding**: In mountain-like data structures
- **Version control**: Git uses binary search in `git bisect`
- **Memory management**: Finding free blocks in sorted free lists

## Common Pitfalls

### Integer Overflow

```python
# Dangerous - can overflow
mid = (left + right) // 2

# Safer approach
mid = left + (right - left) // 2
```

### Off-by-One Errors

- Pay careful attention to loop conditions (`<=` vs `<`)
- Be consistent with inclusive vs exclusive bounds
- Test with arrays of length 0, 1, and 2

### Unsorted Data

Binary search will produce incorrect results on unsorted data without warning.

## Example Walkthrough

Searching for `7` in `[1, 3, 5, 7, 9, 11, 13]`:

```
Step 1: left=0, right=6, mid=3, arr[3]=7 ✓ Found!
```

Searching for `6` in the same array:

```
Step 1: left=0, right=6, mid=3, arr[3]=7 > 6, so right=2
Step 2: left=0, right=2, mid=1, arr[1]=3 < 6, so left=2
Step 3: left=2, right=2, mid=2, arr[2]=5 < 6, so left=3
Step 4: left=3, right=2, left > right, return -1 (not found)
```

## When to Use Binary Search

**Use binary search when**:

- Data is sorted or can be sorted
- You need O(log n) search performance
- Memory usage needs to be minimal

**Consider alternatives when**:

- Data is small (linear search may be faster due to simplicity)
- Data changes frequently (maintaining sorted order is expensive)
- Hash tables are viable (O(1) average case lookup)
