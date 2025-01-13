const jsonFilePath = "./input.json";

const input = fetch(jsonFilePath)
  .then((response) => {
    // Verificar se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro ao carregar o JSON: ${response.statusText}`);
    }
    // Retorna os dados do JSON como um objeto JavaScript
    return response.json();
  })
  .catch((error) => {
    console.error('Erro:', error);
  });


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

let start = Date.now();
insertionSort(input);
let end = Date.now();
let time = end - start;



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

let start_bubble = Date.now();
bubbleSort(input);
let end_bubble = Date.now();
let time_bubble = end_bubble - start_bubble;



const quickSort = (nums) => { // O(n²)
    quickSortTailRecursive(nums, 0, nums.length - 1);
    return nums;
}


const quickSortTailRecursive = (nums, left, right) => {
    if(left < right) {
        let pivot = partition(nums, left, right);
        quickSortTailRecursive(nums, left, pivot - 1);
        quickSortTailRecursive(nums, pivot + 1, right);
    }
    return nums;
}

const partition = (nums, left, right) => {
    let pivot = nums[right];
    let i = left;
    for(let j = left; j < right; j++) {
        if(nums[j] <= pivot) {
            swap(nums, j, i);
            i += 1;
        }
    }
    swap(nums, i, right);
    return i;
}

let start_quick = Date.now();
quickSort(input);
let end_quick = Date.now();

let time_quick = end_quick - start_quick;

console.log(`Insertion Sort - Duration: ${time.toFixed(2)}ms`);
console.log(`Bubble Sort - Duration: ${time_bubble.toFixed(2)}ms`);
console.log(`Quick Sort - Duration: ${time_quick.toFixed(2)}ms`);