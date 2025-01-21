// The graph is directed and weighted.
class Graph {
    constructor(numVertices){
        this.numVertices = numVertices;
        this.adjList = new Array(numVertices).fill(null).map(() => []);
    }

    addEdge = (a, b, w) => {
        this.adjList[a].push([b, w]);
    }

    removeEdge = (a, b) => {
        this.adjList[a] = this.adjList[a].filter(edge => edge[0] !== b);
    }

    lowestWeight = () => {
        let minEdge = [-1, -1, -1];
        let minValue = Infinity;

        for(let i = 0; i < this.numVertices; i++){
            for(let j =0; j < this.adjList[i].length; j++){
                let currentEdge = this.adjList[i][j];
                if(currentEdge[1] < minValue) {
                    minValue = currentEdge[1];
                    minEdge = [i, currentEdge[0], currentEdge[1]];
                }
            }
        }
        return minEdge;
    }

    neighbours = (v) => {
        return this.adjList[v].map(edge => edge[0]);
    }

    degree = (v) => {
        return this.adjList[v].length;
    }

    listByDegree = () => {
        let vertices = [];
        for(let i = 0; i < this.numVertices; i++){
            vertices.push({vertex: i, degree: this.degree(i)});
        }
        vertices.sort((a,b) => b.degree - a.degree);
        return vertices.map(v => v.vertex);
    }

    printGraph = () => {
        for(let i = 0; i < this.numVertices; i++){
            let edges = this.adjList[i].map(edge => `${edge[0]} (weight: ${edge[1]})`).join(", ");
            console.log(`${i} -> ${edges}`);
        }
    }
}


let graph = new Graph(5);
graph.addEdge(0, 1, 2);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 1);
graph.addEdge(1, 3, 7);
graph.addEdge(2, 4, 3);

console.log("Graph:");
graph.printGraph();

console.log("Neighbours of vertex 1:");
console.log(graph.neighbours(1));

console.log("Lowest weight:");
console.log(graph.lowestWeight());

console.log("Degree of vertex 1:");
console.log(graph.degree(1));