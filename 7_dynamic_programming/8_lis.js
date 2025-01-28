// Longest Increasing Subsequence
const lis = (v) => {
    let memory = Array(v.length).fill(1);

    let resp = 1;
    for(let i = 0; i < v.length; i++){
        for(let j = 0; j < i; j++) {
            if(v[j] < v[i]) {
                memory[i] = Math.max(memory[i], 1 + memory[j]);
            }
        }
        resp = Math.max(resp, memory[i]);
    }
    return resp;
}

let s = [3,1,8,2,5];
console.log(lis(s));

s = [10, 4, 5, 6, 5, 15, 2, 3];
console.log(lis(s));