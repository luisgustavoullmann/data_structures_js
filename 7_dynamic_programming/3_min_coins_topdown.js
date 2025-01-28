let memory = []

const min_coins = (v, c) => {
    if(memory[v] != null) {
        return memory[v];
    }

    if(v == 0) {
        return 0;
    }

    let result = Infinity;

    for(let coin of c) {
        let subproblem = v - coin;
        if(subproblem >= 0){
            result = Math.min(result, min_coins(subproblem, c) + 1);
        }
    }
    memory[v] = result;
    return memory[v];
}

console.log(min_coins(15, [10, 7, 1]));