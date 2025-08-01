# Monotone Stack

## What is a Monotone Stack?

A monotone stack is a stack data structure that maintains its elements in either:
- **Monotone increasing**: Elements are in non-decreasing order from bottom to top
- **Monotone decreasing**: Elements are in non-increasing order from bottom to top

The key insight is that we maintain this property by popping elements that violate the monotone condition before pushing new elements.

## How It Works

### Monotone Increasing Stack
```python
def monotone_increasing_stack(arr):
    stack = []
    for num in arr:
        # Pop elements that are greater than current number
        while stack and stack[-1] > num:
            stack.pop()
        stack.append(num)
    return stack
```

### Monotone Decreasing Stack
```python
def monotone_decreasing_stack(arr):
    stack = []
    for num in arr:
        # Pop elements that are smaller than current number
        while stack and stack[-1] < num:
            stack.pop()
        stack.append(num)
    return stack
```

## Common LeetCode Problem Types

### 1. Next Greater Element Problems
- **Pattern**: Find the next greater element for each element in an array
- **Stack Type**: Monotone decreasing
- **Examples**: LC 496, LC 503, LC 739

```python
def next_greater_element(nums):
    result = [-1] * len(nums)
    stack = []  # stores indices
    
    for i in range(len(nums)):
        # While stack is not empty and current element is greater
        while stack and nums[i] > nums[stack[-1]]:
            idx = stack.pop()
            result[idx] = nums[i]
        stack.append(i)
    
    return result
```

### 2. Largest Rectangle Problems
- **Pattern**: Find maximum area of rectangles
- **Stack Type**: Monotone increasing
- **Examples**: LC 84, LC 85

```python
def largest_rectangle_area(heights):
    stack = []
    max_area = 0
    
    for i in range(len(heights)):
        while stack and heights[i] < heights[stack[-1]]:
            h = heights[stack.pop()]
            w = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, h * w)
        stack.append(i)
    
    # Process remaining elements
    while stack:
        h = heights[stack.pop()]
        w = len(heights) if not stack else len(heights) - stack[-1] - 1
        max_area = max(max_area, h * w)
    
    return max_area
```

### 3. Sliding Window Maximum
- **Pattern**: Find maximum in each sliding window
- **Stack Type**: Monotone decreasing deque
- **Examples**: LC 239

## Key Insights

### When to Use Monotone Stack
1. **Next/Previous Greater/Smaller**: When you need to find the next or previous element that is greater or smaller
2. **Area Calculations**: When calculating areas under histograms or in matrices
3. **Sliding Window Problems**: When maintaining maximum/minimum in sliding windows
4. **Subarray Problems**: When finding subarrays with certain properties

### Time Complexity
- **Time**: O(n) - Each element is pushed and popped at most once
- **Space**: O(n) - Stack can contain up to n elements

## Problem-Solving Template

```python
def monotone_stack_template(arr):
    stack = []
    result = []
    
    for i in range(len(arr)):
        # Maintain monotone property
        while stack and condition_to_pop(stack[-1], arr[i]):
            # Process the popped element
            popped = stack.pop()
            # Update result based on problem requirements
            
        # Push current element
        stack.append(i)  # Usually store index, not value
    
    # Process remaining elements in stack
    while stack:
        # Handle remaining elements
        pass
    
    return result
```

## Common LeetCode Problems

| Problem | Number | Type | Stack Property |
|---------|---------|------|----------------|
| Next Greater Element I | 496 | Next Greater | Decreasing |
| Next Greater Element II | 503 | Next Greater | Decreasing |
| Daily Temperatures | 739 | Next Greater | Decreasing |
| Largest Rectangle in Histogram | 84 | Area | Increasing |
| Maximal Rectangle | 85 | Area | Increasing |
| Trapping Rain Water | 42 | Area | Varies |
| Sliding Window Maximum | 239 | Sliding Window | Decreasing |
| Sum of Subarray Minimums | 907 | Contribution | Increasing |

## Tips for Success

1. **Identify the Pattern**: Look for keywords like "next greater", "largest area", "maximum in window"
2. **Choose Stack Type**: 
   - Use decreasing stack for "next greater" problems
   - Use increasing stack for "largest area" problems
3. **Store Indices**: Usually more useful than storing values directly
4. **Handle Edge Cases**: Empty arrays, single elements, all same elements
5. **Process Remaining Elements**: Don't forget elements left in the stack

## Practice Strategy

1. Start with basic "Next Greater Element" problems
2. Move to histogram and area problems
3. Practice with circular arrays and sliding windows
4. Combine with other techniques (DP, binary search) for advanced problems

The monotone stack is a powerful technique that can transform O(n²) brute force solutions into elegant O(n) algorithms. Master this pattern and you'll be well-equipped to handle a wide range of LeetCode problems!


