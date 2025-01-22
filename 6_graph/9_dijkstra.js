class Graph {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.adjList = [];
        // Inicializar lista de adjacências de cada vértice
        for (let i = 0; i < this.numVertices; i++) {
            this.adjList[i] = [];
        }
    }

    addEdge(v1, v2, w) {
        this.adjList[v1].push([v2, w]);
        this.adjList[v2].push([v1, w]);
    }


    dijkstra = (vertex) => {
        const dist = new Array(this.numVertices).fill(Infinity);
        const visited = new Array(this.numVertices).fill(false);
        const previous = new Array(this.numVertices).fill(-1);

        dist[vertex] = 0;
        previous[vertex] = vertex;

        for(let i = 0; i < this.numVertices; i++){
            let current = -1;

            for(let j = 0; j < this.numVertices; j++){
                if(visited[j]) continue;
                if(current === -1 || dist[j] < dist[current]){
                    current = i;
                }
            }

            visited[current] = true;

            for(const [neighbour, weight] of this.adjList[current]){
                if(dist[current] + weight < dist[neighbour]){
                    dist[neighbour] = dist[current] + weight;
                    previous[neighbour] = current;
                }
            }
        }
        return [dist, previous];
    }

    recoverPath = (vertex, previous) => {
        let current = vertex;
        let path = [];
        path.push(current);

        while(previous[current] != current){
            path.push(previous[current]);
            current = previous[current];
        }
        return path.reverse();
    }
}

const graph = new Graph(6);
graph.addEdge(0, 1, 9);
graph.addEdge(0, 2, 3);
graph.addEdge(1, 2, 1);
graph.addEdge(1, 3, 6);
graph.addEdge(2, 4, 2);
graph.addEdge(1, 4, 3);
graph.addEdge(3, 4, 5);
graph.addEdge(4, 5, 8);
graph.addEdge(3, 5, 2);

let vertex = 0;

const [dist, previous] = graph.dijkstra(vertex);

for (let i = 0; i < dist.length; i++) {
    console.log(`dist[${vertex}, ${i}] = ${dist[i]}`);
}

console.log(graph.recoverPath(5, previous));