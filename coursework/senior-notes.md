# Leetcode Patterns

## Array & String Fundamentals

### 📌 1. Two Pointers & Variants

**Focus:** Sorted arrays, avoiding duplicates, shrinking/growing windows

#### 🔹 Problems:

- 3Sum
- 4Sum
- Container With Most Water

#### 📚 Tips:

- Use when array is sorted or needs O(n²) optimization
- Carefully skip duplicates
- Practice left/right pointer movement logic

---

### 📌 2. Sliding Window (Basic → Advanced)

**Focus:** Strings/arrays with constraints (distinct elements, frequencies, min/max)

#### 🔹 Problems:

- Longest Substring Without Repeating Characters
- Minimum Window Substring
- Sliding Window Maximum

#### 📚 Tips:

- Use the common template:

```python
while right < len(s):
    # Expand window
    right += 1

    while window is invalid:
        # Shrink window
        left += 1
```

- Use `set()` or `Counter` for frequency maps
- Use `deque` for O(n) sliding max

---

### 📌 3. Prefix/Suffix Techniques

**Focus:** Pre-compute ranges (sum, max, product) for faster queries

#### 🔹 Problems:

- Product of Array Except Self
- Trapping Rain Water (one approach)

#### 📚 Tips:

- Build `prefix[]` or `suffix[]` arrays
- Use for “everything except current” type problems
- Trade memory for time complexity

---

### 📌 4. Monotonic Stack

**Focus:** Next greater/smaller element, histogram area, greedy with constraints

#### 🔹 Problems:

- Daily Temperatures
- Largest Rectangle in Histogram
- Maximal Rectangle
- Remove Duplicate Letters

#### 📚 Tips:

- Use the pattern:

```python
while stack and condition:
    stack.pop()
```

- Stack usually stores **indices**, not values
- In `Remove Duplicate Letters`, maintain:
  - `seen` set
  - `char_count` map
  - Ensure lexicographically smallest result

---

### 📌 5. Greedy Approaches

**Focus:** Local optimal → global optimal solutions

#### 🔹 Problems:

- Container With Most Water
- Remove Duplicate Letters

#### 📚 Tips:

- Ask: Can I make a **greedy choice** at each step?
- Often combined with two pointers or stack
- Think in terms of maximizing area or minimizing lexicographical order

---

## 🧠 Part 2: How to Identify the Right Technique

### 🔍 Problem Diagnosis Flow:

| Question                                                                       | Technique              |
| ------------------------------------------------------------------------------ | ---------------------- |
| Is the array sorted and involves pairs/triples/quadruples?                     | ➤ Two Pointers         |
| Do you need to track a subarray or substring under certain constraints?        | ➤ Sliding Window       |
| Are you asked to compute a result excluding the current index or over a range? | ➤ Prefix/Suffix Arrays |
| Do you need to find next greater/smaller elements or max histogram area?       | ➤ Monotonic Stack      |
| Does the problem ask for maximizing/minimizing something greedily?             | ➤ Greedy Strategy      |

---

## ✅ Final Tips

- 🧠 **Visualize**: Draw arrays, stacks, and windows to understand movement
- 🔄 **Templates**: Memorize sliding window and monotonic stack patterns
- 📉 **Optimization**: Always ask — can brute-force be reduced to O(n)?
- 🔁 **Simulation**: Manually trace stack operations or pointer movement
- 💭 **Constraints Matter**: Frequency-based logic → try hashmaps/sets
- 🎯 **Target Pattern Recognition**: Most problems are variations of a core template

---

## ✨ Bonus (Optional): Flashcard Topics to Create

- Sliding Window Template
- Prefix vs. Suffix Arrays
- Monotonic Stack Use Cases
- Two Pointer Duplication Handling
- Greedy Stack for Lexicographical Problems

---
