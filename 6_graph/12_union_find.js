export default class DisjointSet {
    constructor(numVertices){
        this.parent = [];
        for(let i = 0; i < numVertices; i++){
            this.parent[i] = i;
        }
    }


    find = (current) => {
        while(this.parent[current] !== current){
            current = this.parent[current];
        }
        return current;
    }

    union = (a, b) => {
        const rootX = this.find(a);
        const rootY = this.find(b);
        if(rootX !== rootY){
            this.parent[rootY] = rootX;
        }
    }
}


const unionFind = new DisjointSet(7);
unionFind.union(0, 1);
unionFind.union(2, 3);
unionFind.union(3, 4);
unionFind.union(5, 6);
unionFind.union(3, 6);
unionFind.union(6, 1);

console.log(unionFind.parent);
console.log(`Parent of 6 is: ${unionFind.find(6)}`);