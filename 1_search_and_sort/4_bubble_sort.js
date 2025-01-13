const swap = (num, a, b) => {
    const aux = num[a];
    num[a] = num[b];
    num[b] = aux;
}

const bubbleSort = (num) => { // O(n²) 
    for(let i = 0; i < num.length; i++) {
        let swapped = false;
        for (let j =0; j < num.length - 1 - i; j++) {
            if(num[j] > num[j + 1]){
                swap(num, j, j + 1);
                swapped = true;
            }
        }
        if(!swapped) { break; }
    }
    return num;
}

console.log(bubbleSort([20, 9, 86, -2, 16]));
console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(bubbleSort([38, 23, 8, -5, 16, 29, 0, 13, 2]));