// The graph is undirected and unweighted.
class Graph {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.adjMatrix = [];
        for (let i = 0; i < this.numVertices; i++) {
            this.adjMatrix[i] = [];
            for(let j = 0; j < this.numVertices; j++) {
                this.adjMatrix[i][j] = 0;
            }
        }
    }

    addEdge = (a, b) => {
        this.adjMatrix[a][b] = 1;
        this.adjMatrix[b][a] = 1;
    }

    removeEdge = (a, b) => {
        this.adjMatrix[a][b] = 0;
        this.adjMatrix[b][a] = 0;
    }

    degree = (v) => {
        let count = 0;
        for(let i = 0; i < this.numVertices; i++) {
            if(this.adjMatrix[v][i] == 1) {
                count++;
            }
        }
        return count;
    }

    listByDegree = () => {
        let degrees = [];
        for(let i = 0; i < this.numVertices; i ++) {
            let degree = this.degree(i);
            if(!degrees[degree]){
                degrees[degree] = [];
            }
            degrees[degree].push(i);
        }

        for(let i = 0; i <= this.numVertices; i++){
            if(degrees[i]){
                console.log(`degrees = ${i}: {${degrees[i].join(", ")}}`);
            } else {
                console.log(`degree = ${i}: {}`);
            }
        }
    }

    printGraph = () => {
        for(let i = 0; i < this.numVertices; i++){
            console.log(this.adjMatrix[i].join(" "));
        }
    }
}

const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(3, 3);
// graph.removeEdge(0, 1);
graph.printGraph();
console.log("Degree: " + graph.degree(3));
console.log("Degree: " + graph.degree(0));
graph.listByDegree();