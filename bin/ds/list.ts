export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }

  static fromArray(values: number[]): ListNode | null {
    const dummy = new ListNode();
    let current = dummy;
    for (const val of values) {
      current.next = new ListNode(val);
      current = current.next;
    }
    return dummy.next;
  }

  toArray(): number[] {
    const result: number[] = [];
    let node: ListNode | null = this;
    while (node) {
      result.push(node.val);
      node = node.next;1
    }
    return result;
  }
}

export type Pair<T,K> = [T,K];

export class RandomListNode {
  val: number;
  next: RandomListNode | null;
  random: RandomListNode | null;

  constructor(val?: number, next?: RandomListNode | null, random?: RandomListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
    this.random = random ?? null;
  }

  static fromArray(values: Pair<number, number | null>[]): RandomListNode | null {
    if (values.length === 0) return null;

    const nodes: RandomListNode[] = values.map(([val]) => new RandomListNode(val));

    for (let i = 0; i < values.length; i++) {
      if (i < values.length - 1) {
        nodes[i].next = nodes[i + 1];
      }
      const randomIndex = values[i][1];
      if (randomIndex !== null) {
        nodes[i].random = nodes[randomIndex];
      }
    }

    return nodes[0];
  }
  
  toArray(): Pair<number, number | null>[] {
    const result: Pair<number, number | null>[] = [];
    const nodes: RandomListNode[] = [];
    const nodeToIndex = new Map<RandomListNode, number>();

    let curr: RandomListNode | null = this;
    let index = 0;
    while (curr !== null) {
      nodes.push(curr);
      nodeToIndex.set(curr, index++);
      curr = curr.next;
    }

    for (const node of nodes) {
      const rand = node.random ? nodeToIndex.get(node.random)! : null;
      result.push([node.val, rand]);
    }

    return result;
  }
}