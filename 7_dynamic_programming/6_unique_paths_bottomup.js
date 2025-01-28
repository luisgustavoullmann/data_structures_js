const numberOfWays = (i, j) => {
    let table = Array.from({ length: i}, () => Array(j).fill(0));

    // fullfil first line
    for(let n = 0; n < i; n++){
        table[n][0] = 1;
    }

    // fullfil first column
    for(let m = 0; m < j; m++){
        table[0][m] = 1;
    }

    // fullfil  table
    for(let n = 1; n < i; n++){
        for(let m = 1; m < j; m++){
            table[n][m] = table[n - 1][m] + table[n][m - 1];
        }
    }

    // return right position
    return table[i - 1][j - 1];
}

let i = 3, j = 2;
console.log(numberOfWays(i, j));