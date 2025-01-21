class Graph {
    constructor(numVertices){
        this.numVertices = numVertices;
        this.adjList = [];
        for(let i = 0; i < this.numVertices; i++){
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

    dfs = (vertex) => {
        let visited = Array(this.numVertices).fill(false);
        this._dfs_recursive(vertex, visited);
    }

    _dfs_recursive = (vertex, visited) => {
        visited[vertex] = true;

        console.log(`vertex: ${vertex}`);

        for(const neighbour of this.neighbours(vertex)) {
            if(!visited[neighbour]){
                visited[neighbour] = true;
                this._dfs_recursive(neighbour, visited);
            }
        }
    }


    dfs_iter = (vertex) => {
        let visited = Array(this.numVertices).fill(false);
        let stack = [];

        stack.push(vertex);
        visited[vertex] = true;

        while(stack.length != 0){
            vertex = stack.pop();
            console.log(`visited: ${vertex}`);

            for(const neighbour of this.neighbours(vertex)){
                if(!visited[neighbour]){
                    stack.push(neighbour);
                    visited[neighbour] = true;
                }
            }
        }
    }
}


const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
console.log("DFS recursive");
graph.dfs(0);
console.log("DFS iterative");
graph.dfs_iter(0);