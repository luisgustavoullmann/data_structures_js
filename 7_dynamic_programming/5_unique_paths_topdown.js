const uniquePaths = (i, j, memory) => {
    if(memory[i][j] !== -1){
        return memory[i][j];
    }

    if(i == 0 || j == 0){
        return 1;
    }

    let moveUp = uniquePaths(i - 1, j, memory);
    let moveLeft = uniquePaths(i, j - 1, memory);

    memory[i][j] = moveUp + moveLeft;
    return memory[i][j];
}

const numberOfWays = (i, j) => {
    let memory = Array.from({ length: i}, () => Array(j).fill(-1));
    return uniquePaths(i - 1, j - 1, memory);
}

let i = 25, j = 25;
console.log(numberOfWays(i, j));