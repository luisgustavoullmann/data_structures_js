import DisjointSet from "./12_union_find.js";

class Graph {
    constructor(numVertices){
        this.numVertices = numVertices;
        this.edges = [];
    }

    addEdge = (a, b, weight) => {
        this.edges.push([a, b, weight]);
    }

    kruskal = () => {
        // sort by vertices by weight - descending
        this.edges.sort((a, b) => a[2] - b[2]);

        const disjointSet = new DisjointSet(this.numVertices);
        const mst = [];
        let totalWeight = 0;

        for(const [a, b, weight] of this.edges) {
            if(disjointSet.find(a) !== disjointSet.find(b)) {
                disjointSet.union(a, b);
                mst.push([a, b, weight]);
                totalWeight += weight;
            }
        }
        return { mst, totalWeight };
    }
}

// Test
const graph = new Graph(7);
graph.addEdge(0, 1, 4);
graph.addEdge(0, 2, 8);
graph.addEdge(1, 2, 11);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 8);
graph.addEdge(2, 5, 1);
graph.addEdge(2, 3, 6);
graph.addEdge(3, 6, 10);
graph.addEdge(3, 5, 5);
graph.addEdge(4, 6, 7);
graph.addEdge(5, 6, 6);

const result = graph.kruskal();
console.log('Minimum Spanning Tree:', result.mst);
console.log('Total Weight:', result.totalWeight);