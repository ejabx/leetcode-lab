export class GraphNode {
  val: number;
  neighbors: GraphNode[];

  constructor(val?: number, neighbors?: GraphNode[]) {
    this.val = val ?? 0;
    this.neighbors = neighbors ?? [];
  }

  static adjacencyList(graph: GraphNode | null): Record<number, number[]> | null {
    if (!graph) return null;
    const seen = new Map<GraphNode, number>();
    const result: Record<number, number[]> = {};
    let id = 1;

    const dfs = (n: GraphNode) => {
      if (seen.has(n)) return;
      seen.set(n, n.val);
      result[n.val] = n.neighbors.map(nei => nei.val);
      for (const nei of n.neighbors) {
        dfs(nei);
      }
    };

    dfs(graph);
    return result;
  }
}