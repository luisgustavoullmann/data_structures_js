const uniquePaths = (i, j) => {
    if(i == 0 || j == 0){
        return 1;
    }

    let moveUp = uniquePaths(i - 1, j);
    let moveLeft = uniquePaths(i, j - 1);

    return moveUp + moveLeft;
}

console.log("algo");
n = 25, m = 25
console.log(uniquePaths(n - 1, m - 1));
