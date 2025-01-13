const swap = (num, a, b) => {
    const aux = num[a];
    num[a] = num[b];
    num[b] = aux;
}

const selectionSort = (num) => { // O(n²) 
    for(let i = 0; i < num.length - 1; i++) {
        let minIndex = i;
        for(let j = i + 1; j < num.length; j++) {
            if(num[j] < num[minIndex]) minIndex = j;
        }
        if(minIndex != i) swap(num, i, minIndex);
    }
    return num;
}

console.log(selectionSort([20, 9, 86, -2, 16]));
console.log(selectionSort([5, 4, 3, 2, 1]));
console.log(selectionSort([38, 23, 8, -5, 16, 29, 0, 13, 2]));