export class UnionFind {
    private parent: number[];
    private rank: number[];
    public componentCount: number;
    
    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
        this.componentCount = n; // Initially n separate components
    }
    
    find(x: number): number {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }
    
    union(x: number, y: number): boolean {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX === rootY) return false;
        
        // Union by rank
        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        
        this.componentCount--; // Two components merged into one
        return true;
    }
    
    connected(x: number, y: number): boolean {
        return this.find(x) === this.find(y);
    }
    
    getComponentCount(): number {
        return this.componentCount;
    }
}