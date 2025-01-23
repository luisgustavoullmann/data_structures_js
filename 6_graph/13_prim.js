class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this.bubbleUp();
    }

    extractMin() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][1] <= this.heap[index][1]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex][1] < this.heap[smallest][1]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex][1] < this.heap[smallest][1]) {
                smallest = rightChildIndex;
            }
            if (smallest === index) break;
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

class Graph {
    constructor(nuVertices){
        this.nuVertices = nuVertices;
        this.adjList = [];
        for(let i = 0; i < this.nuVertices; i++){
            this.adjList[i] = [];
        }
    }

    addEdge = (a, b, weight) => {
        this.adjList[a].push([b, weight]);
        this.adjList[b].push([a, weight]);
    }

    prim = (vertex) => {
        const minHeap = new MinHeap();
        const mst = [];
        const visited = new Array(this.nuVertices).fill(false);
        let totalWeight = 0;

        // queuing initial vertex
        minHeap.insert([vertex, 0]);

        while(!minHeap.isEmpty()){
            // recorver queued top edge
            const [current, weight] = minHeap.extractMin();

            // if it's already visited, continue
            if(visited[current]) continue;

            visited[current] = true;
            totalWeight += weight;
            mst.push([current, weight]);

            for(const [neighbour, neighbourWeight] of this.adjList[current]){
                if(!visited[neighbour]){
                    minHeap.insert([neighbour, neighbourWeight]);
                }
            }
        }
        return { mst, totalWeight };
    }
}

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

const result = graph.prim(0);
console.log('Minimum Spanning Tree:', result.mst);
console.log('Total weight:', result.totalWeight);