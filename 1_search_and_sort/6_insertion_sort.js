const insertionSort = (nums) => { // O(n²) 
    for(i = 1; i < nums.length; i ++) {
        let aux = nums[i];
        let j = i - 1;
        while(j >= 0 && nums[j] > aux) {
            nums[j + 1] = nums[j];
            j -= 1;
        }
        nums[j + 1] = aux;
    }
    return nums;
}

console.log(insertionSort([20, 9, 86, -2, 16]));
console.log(insertionSort([5, 4, 3, 2, 1]));
console.log(insertionSort([38, 23, 8, -5, 16, 29, 0, 13, 2]));