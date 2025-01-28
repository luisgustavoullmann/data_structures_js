const min_coins = (v, c) => {
    let memory = Array(v + 1).fill(Infinity);

    memory[0] = 0;

    for(let i = 1; i <= v; i++){
        for(let coin of c) {
            let subproblem = i - coin;
            if(subproblem >= 0){
                memory[i] = Math.min(memory[i], memory[subproblem] + 1);
            }
        }
    }
    return memory[v];
}

console.log(min_coins(2000000, [10, 7, 1]));