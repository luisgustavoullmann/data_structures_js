const mergeSort = (nums) => { // O(n log(n))
    mergeSortRecursive(nums, 0, nums.length -1);
    return nums
}

const mergeSortRecursive = (nums, left, right) => {
    if(right - left) {
        let middle = Math.floor((left + right)/ 2);
        mergeSortRecursive(nums, left, middle);
        mergeSortRecursive(nums, middle + 1, right);
        merge(nums, left, middle, right);
    }
    return nums
}

const merge = (nums, left, middle, right) => {
    const result = []
    let length = right - left + 1;
    let i = left;
    let j = middle + 1;
    let k = 0;

    while (i <= middle && j <= right) {
        if(nums[i] < nums[j]) {
            result[k++] = nums[i++];
        } else {
            result[k++] = nums[j++];
        }
    }

    while (i <= middle) {
        result[k++] = nums[i++];
    }

    while (j <= right) {
        result[k++] = nums[j++];
    }

    for(let i = 0; i < length; i++) {
        nums[left + i] = result[i];
    }
}

console.log(mergeSort([20, 9, 86, -2, 16]));
console.log(mergeSort([30, 24, -2, 2, -4, -2, 2, 8, 10, 9, -4]));
console.log(mergeSort([1, 1, 1, 2, 2, 4, 8, 8, 16, 32]));