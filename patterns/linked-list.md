# Linked Lists

## What is a Linked List?

A linked list is a linear data structure where elements (called nodes) are stored in a sequence, but unlike arrays, elements are not stored in contiguous memory locations. Instead, each node contains data and a reference (or pointer) to the next node in the sequence.

## Basic Structure

### Node Structure
```
[Data | Next] -> [Data | Next] -> [Data | Next] -> NULL
```

Each node contains:
- **Data**: The actual value stored
- **Next**: A pointer/reference to the next node

### Basic Node Implementation (JavaScript)
```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
```

## Types of Linked Lists

### 1. Singly Linked List
- Each node points to the next node
- Traversal only possible in one direction (forward)
- Last node points to NULL

### 2. Doubly Linked List
- Each node has pointers to both next and previous nodes
- Bidirectional traversal possible
- Requires more memory per node

### 3. Circular Linked List
- Last node points back to the first node
- No NULL termination
- Can be singly or doubly circular

## Key Operations

### 1. Insertion
- **At beginning**: O(1) time complexity
- **At end**: O(n) time complexity (unless you maintain tail pointer)
- **At specific position**: O(n) time complexity

### 2. Deletion
- **From beginning**: O(1) time complexity
- **From end**: O(n) time complexity
- **Specific node**: O(n) time complexity

### 3. Search
- **Time complexity**: O(n)
- Must traverse from head to find element

### 4. Traversal
- **Time complexity**: O(n)
- Visit each node sequentially

## Advantages vs Arrays

### Advantages of Linked Lists:
- **Dynamic size**: Can grow/shrink during runtime
- **Memory efficient**: Only allocates memory as needed
- **Easy insertion/deletion**: At beginning is O(1)
- **No memory waste**: No unused allocated space

### Disadvantages of Linked Lists:
- **No random access**: Must traverse from head
- **Extra memory**: Requires storage for pointers
- **Not cache-friendly**: Nodes scattered in memory
- **No backward traversal**: In singly linked lists

## Common Interview Problems

### 1. Reverse a Linked List
- **Approach**: Use three pointers (prev, current, next)
- **Time**: O(n), **Space**: O(1)

### 2. Detect Cycle
- **Floyd's Algorithm**: Use slow and fast pointers
- **Time**: O(n), **Space**: O(1)

### 3. Find Middle Element
- **Two-pointer technique**: Slow pointer moves 1, fast moves 2
- **Time**: O(n), **Space**: O(1)

### 4. Merge Two Sorted Lists
- **Approach**: Compare nodes and link smaller one
- **Time**: O(n + m), **Space**: O(1)

### 5. Remove Duplicates
- **Sorted list**: Single pass comparison
- **Unsorted list**: Use hash set or sort first

## Implementation Tips

### Creating a Linked List Class
```javascript
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;  // Optional: track size
    }
    
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
}
```

### Memory Management
- JavaScript handles garbage collection automatically
- No need to manually free memory like in C/C++
- Always update pointers carefully to avoid losing references
- Set removed nodes to null to help garbage collection

## When to Use Linked Lists

### Good for:
- Frequent insertions/deletions at the beginning
- Unknown or highly variable data size
- Implementing other data structures (stacks, queues)
- When memory is limited and you need dynamic allocation

### Not ideal for:
- Frequent random access to elements
- Binary search operations
- When cache performance is critical
- Small, fixed-size datasets

## Time Complexity Summary

| Operation | Linked List | Array |
|-----------|-------------|--------|
| Access | O(n) | O(1) |
| Search | O(n) | O(n) |
| Insertion (beginning) | O(1) | O(n) |
| Insertion (end) | O(n) | O(1) |
| Deletion (beginning) | O(1) | O(n) |
| Deletion (end) | O(n) | O(1) |

## Study Tips

1. **Practice drawing**: Visualize pointer manipulations on paper
2. **Edge cases**: Always consider empty lists, single node, and NULL pointers
3. **Pointer arithmetic**: Master the concept of updating multiple pointers
4. **Recursive thinking**: Many linked list problems have elegant recursive solutions
5. **Two-pointer technique**: Learn slow/fast pointer patterns for cycle detection and finding middle elements

## Common Mistakes to Avoid

- Losing reference to the head node
- Not handling NULL pointer cases
- Forgetting to update size counters
- Memory leaks in manual memory management languages
- Not considering edge cases (empty list, single node)

## Practice Problems

Start with these fundamental problems:
1. Implement basic linked list operations
2. Reverse a linked list (iterative and recursive)
3. Find the middle of a linked list
4. Detect and remove cycles
5. Merge two sorted linked lists
6. Remove nth node from end
7. Check if linked list is palindrome
