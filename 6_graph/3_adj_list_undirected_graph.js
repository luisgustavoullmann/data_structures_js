// The graph is undirected and unweighted.
class Graph {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.adjList = [];
        for(let i =0; i < this.numVertices; i++){
            this.adjList[i] = [];
        }
    }

    addEdge = (a, b) => {
        this.adjList[a] = b;
        this.adjList[b] = a;
    }

    removeEdge = (a, b) => {
        this.adjList[a] = this.adjList[a].filter(v => v !== b);
        this.adjList[b] = this.adjList[b].filter(v => v !== a);
    }

    degree = (v) => {
        return this.adjList[v].length;
    }

    listByDegree = () => {
        let degrees = [];

        for(let i = 0; i < this.numVertices; i++){
            let degree = this.degree(i);

            if(!degrees[degree]){
                degrees[degree] = [];
            }
            degrees[degree].push(i);
        }

        for(let i = 0; i < this.numVertices; i++){
            if(degrees[i]){
                console.log(`$degree ${i}: [${degrees[i].join(", ")}]`);
            } else {
                console.log(`degree ${i}: []`);
            }
        }
    }

    printGraph = () => {
        for(let i = 0; i < this.numVertices; i++){
            let edges = this.adjList[i];
            console.log(`${i} -> ${edges}`);
        }
    }
}

let graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

console.log("Graph:");
graph.printGraph();

console.log("Degree of vertice 1:");
console.log(graph.degree(1));

console.log("List of vertices ascending by degree:");
console.log(graph.listByDegree());