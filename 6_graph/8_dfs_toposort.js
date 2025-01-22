class Graph{
    constructor(numVertices){
        this.numVertices = numVertices;
        this.adjList = [];
        for(let i = 0; i < this.numVertices; i++){
            this.adjList[i] = [];
        }
    }

    addEdge = (a, b) => {
        this.adjList[a].push(b);
    }

    neighbours = (vertex) => {
        return this.adjList[vertex];
    }

    _dfsUtil = (vertex, visited, ordered_list) => {
        visited[vertex] = true;
        console.log(`Visited ${vertex}`);

        for(const neighbour of this.neighbours(vertex)){
            if(!visited[neighbour]){
                visited[neighbour] = true;
                this._dfsUtil(neighbour, visited, ordered_list);
            }
        }

        ordered_list.unshift(vertex);
    }

    toposort = () => {
        let visited = Array(this.numVertices).fill(false);
        let ordered_list = [];

        for(let i = 0; i < this.numVertices; i++){
            if(!visited[i]){
                this._dfsUtil(i, visited, ordered_list);
            }
        }
        return ordered_list;
    }
}

// Test
const graph = new Graph(10);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(0, 5);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(4, 6);
graph.addEdge(5, 6);
graph.addEdge(5, 4);
graph.addEdge(9, 6);
graph.addEdge(6, 8);
graph.addEdge(6, 7);
graph.addEdge(7, 8);
console.log(graph.toposort())