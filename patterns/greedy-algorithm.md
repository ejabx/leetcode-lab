# Greedy Algorithms

## What is a Greedy Algorithm?

A **greedy algorithm** is a problem-solving approach that makes the locally optimal choice at each step, hoping to find a global optimum. It follows the principle of "take what looks best right now" without considering future consequences.

## Key Characteristics

### 1. **Greedy Choice Property**
- At each step, make the choice that seems best at the moment
- Never reconsider previous choices
- The local optimum leads to a global optimum

### 2. **Optimal Substructure**
- The optimal solution contains optimal solutions to subproblems
- If you solve each subproblem optimally, the overall solution is optimal

### 3. **No Backtracking**
- Once a choice is made, it's never undone
- This makes greedy algorithms efficient (usually O(n) or O(n log n))

## How Greedy Algorithms Work

```
1. Start with an empty solution
2. While there are more choices to make:
   a. Select the best available choice according to some criteria
   b. Add it to the solution
   c. Update the problem state
3. Return the solution
```

## Classic Examples

### 1. Coin Change (Greedy Version)
**Problem**: Make change for a given amount using the fewest coins.

**Greedy Strategy**: Always use the largest coin that doesn't exceed the remaining amount.

```typescript
function coinChangeGreedy(amount: number, coins: number[]): number[] | null {
    const sortedCoins = [...coins].sort((a, b) => b - a); // Start with largest coins
    const result: number[] = [];
    
    for (const coin of sortedCoins) {
        while (amount >= coin) {
            result.push(coin);
            amount -= coin;
        }
    }
    
    return amount === 0 ? result : null;
}

// Example: amount = 67, coins = [25, 10, 5, 1]
// Steps: 67 → 42 (use 25) → 17 (use 25) → 7 (use 10) → 2 (use 5) → 0 (use 1, 1)
// Result: [25, 25, 10, 5, 1, 1] = 6 coins
```

**Note**: This only works for certain coin systems (like US coins). For arbitrary coin systems, dynamic programming is needed.

### 2. Activity Selection Problem
**Problem**: Given start and end times of activities, select the maximum number of non-overlapping activities.

**Greedy Strategy**: Always pick the activity that finishes earliest.

```typescript
interface Activity {
    start: number;
    end: number;
    id?: string;
}

function activitySelection(activities: Activity[]): Activity[] {
    // Sort by end time
    const sorted = [...activities].sort((a, b) => a.end - b.end);
    
    const selected: Activity[] = [sorted[0]];
    let lastEndTime = sorted[0].end;
    
    for (let i = 1; i < sorted.length; i++) {
        const { start, end } = sorted[i];
        if (start >= lastEndTime) { // No overlap
            selected.push(sorted[i]);
            lastEndTime = end;
        }
    }
    
    return selected;
}

// Example: activities with start and end times
const activities: Activity[] = [
    { start: 1, end: 3, id: 'A' },
    { start: 2, end: 5, id: 'B' },
    { start: 4, end: 6, id: 'C' },
    { start: 6, end: 7, id: 'D' },
    { start: 5, end: 8, id: 'E' }
];
// After sorting by end time: A(1,3), B(2,5), C(4,6), D(6,7), E(5,8)
// Selected: A(1,3), C(4,6), D(6,7)
console.log(activitySelection(activities)); // [A, C, D]
```

### 3. Fractional Knapsack
**Problem**: Fill a knapsack with items to maximize value, where items can be broken into fractions.

**Greedy Strategy**: Always take the item with the highest value-to-weight ratio.

```typescript
interface Item {
    weight: number;
    value: number;
    name?: string;
}

function fractionalKnapsack(capacity: number, items: Item[]): number {
    // Sort by value-to-weight ratio (descending)
    const sortedItems = [...items].sort((a, b) => (b.value / b.weight) - (a.value / a.weight));
    
    let totalValue = 0;
    let remainingCapacity = capacity;
    
    for (const item of sortedItems) {
        if (remainingCapacity >= item.weight) {
            // Take the whole item
            totalValue += item.value;
            remainingCapacity -= item.weight;
        } else {
            // Take fraction of the item
            const fraction = remainingCapacity / item.weight;
            totalValue += item.value * fraction;
            break;
        }
    }
    
    return totalValue;
}

// Example: capacity = 50, items with weight and value
const items: Item[] = [
    { weight: 10, value: 60, name: 'Item1' },
    { weight: 20, value: 100, name: 'Item2' },
    { weight: 30, value: 120, name: 'Item3' }
];
// Ratios: [6.0, 5.0, 4.0]
// Take: whole Item1(10,60), whole Item2(20,100), part of Item3(30,120)
// Value: 60 + 100 + 120*(20/30) = 240
console.log(fractionalKnapsack(50, items)); // 240
```

### 4. Huffman Coding
**Problem**: Create optimal prefix-free codes for characters based on their frequencies.

**Greedy Strategy**: Always combine the two nodes with smallest frequencies.

```typescript
interface HuffmanNode {
    frequency: number;
    character?: string;
    left?: HuffmanNode;
    right?: HuffmanNode;
}

function huffmanCoding(frequencies: Record<string, number>): HuffmanNode {
    const heap = new MinHeap();
    
    // Create leaf nodes for each character
    for (const [char, freq] of Object.entries(frequencies)) {
        heap.push({ frequency: freq, character: char });
    }
    
    // Build Huffman tree
    while (heap.size > 1) {
        const left = heap.pop()!;
        const right = heap.pop()!;
        
        const merged: HuffmanNode = {
            frequency: left.frequency + right.frequency,
            left,
            right
        };
        
        heap.push(merged);
    }
    
    return heap.pop()!;
}

// Example: frequencies = {'a': 5, 'b': 9, 'c': 12, 'd': 13, 'e': 16, 'f': 45}
// Greedy choice: always merge the two smallest frequency nodes
const frequencies = { 'a': 5, 'b': 9, 'c': 12, 'd': 13, 'e': 16, 'f': 45 };
const huffmanTree = huffmanCoding(frequencies);
console.log('Huffman tree built with greedy approach');
```

## When Greedy Algorithms Work

### ✅ **Good Cases**
- **Minimum Spanning Tree** (Kruskal's, Prim's)
- **Shortest Path** (Dijkstra's - for non-negative weights)
- **Activity Selection**
- **Fractional Knapsack**
- **Huffman Coding**

### ❌ **Bad Cases**
- **0/1 Knapsack** (need dynamic programming)
- **Coin Change** (for arbitrary coin systems)
- **Longest Path** (NP-hard)
- **Graph Coloring** (greedy gives approximation)

## Proving Greedy Correctness

To prove a greedy algorithm is correct, show:

### 1. **Greedy Choice Property**
Prove that making the greedy choice at each step leads to an optimal solution.

### 2. **Optimal Substructure**
Prove that the problem can be broken down into subproblems, and optimal solutions to subproblems lead to an optimal solution of the original problem.

### Example Proof (Activity Selection)
**Claim**: Always choosing the activity that finishes earliest gives the maximum number of activities.

**Proof**:
- Let A be the activity that finishes earliest
- In any optimal solution, we can replace the first activity with A without making the solution worse
- The subproblem (remaining activities after A) has the same structure
- By induction, the greedy choice is optimal

## Greedy vs Other Approaches

| Approach | Time Complexity | Space Complexity | Optimality |
|----------|----------------|------------------|------------|
| **Greedy** | O(n) to O(n log n) | O(1) to O(n) | Sometimes |
| **Dynamic Programming** | O(n²) to O(n³) | O(n) to O(n²) | Always* |
| **Brute Force** | O(2ⁿ) to O(n!) | O(n) | Always |

*When applicable

## Common Greedy Strategies

1. **Earliest Deadline First** (Activity Selection)
2. **Highest Value First** (Fractional Knapsack)
3. **Shortest Job First** (CPU Scheduling)
4. **Minimum Weight First** (MST)
5. **Maximum Frequency First** (Huffman Coding)

## Tips for Identifying Greedy Problems

- Look for **optimization problems** (min/max)
- Check if **local optimal choices** seem reasonable
- See if problem has **optimal substructure**
- Try to prove the **greedy choice property**
- Consider if **sorting** might help reveal the greedy strategy

## Limitations

- **Not always optimal**: Greedy doesn't guarantee the global optimum for all problems
- **Hard to prove**: Proving correctness can be challenging
- **Problem-specific**: The greedy criterion must be carefully chosen
- **No backtracking**: Can't undo bad choices

## Conclusion

Greedy algorithms are powerful when they work, offering simple, efficient solutions to complex problems. The key is recognizing when the greedy approach will lead to an optimal solution and being able to prove it. While not universally applicable, they form the foundation for many important algorithms in computer science.
