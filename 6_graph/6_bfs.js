class Graph {
    constructor(numVertices){
        this.numVertices = numVertices;
        this.adjList = [];
        for(let i = 0; i < numVertices; i++){
            this.adjList[i] = [];
        }
    }

    addEdge = (a, b) => {
        this.adjList[a].push(b);
        this.adjList[b].push(a);
    }

    neighbours = (vertex) => {
        return this.adjList[vertex];
    }

    _bsf = (vertex, visited) => {
        let queue = [];

        queue.push(vertex);
        visited[vertex] = true;

        while(queue.length > 0){
            vertex = queue.shift();
            console.log(`vertex: ${vertex}`);

            for(const v of this.neighbours(vertex)){
                if(!visited[v]){
                    visited[v] = true;
                    queue.push(v);
                }
            }
        }
    }

    bsf_connected_components = () => {
        let visited = new Array(this.numVertices).fill(false);
        let count = 0;

        for(let i = 0; i < this.numVertices; i++){
            if(!visited[i]){
                console.log(`Component: ${count}`);
                this._bsf(i, visited);
                count++;
            }
        }
        return count;
    }
}

const graph = new Graph(7);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(3, 4);
graph.addEdge(2, 6);
console.log(`Number of conected components:  ${graph.bsf_connected_components()}`);