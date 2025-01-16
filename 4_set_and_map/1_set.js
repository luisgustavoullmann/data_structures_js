let A = new Set([1,2,3,4,5]);
let B = new Set([4,5,6,7,8]);

print = (elem) => { return `[${Array.from(elem)}]` }

// Add
A.add(10);
console.log(`Added 10: ${A}`);

// Remove
A.delete(10)

// Has
console.log(`Has 5: ${A.has(5)}`)

// isEmpty
console.log(`Is empty: ${A.size === 0}`)

// Size
console.log(`Size: ${A.size}`)

// Union
let C1 = new Set([...A, ...B])
console.log(`Union A and B: ${print(C1)}`)

// Intersection
C1 = new Set([...A].filter(x => B.has(x)))
console.log(`Intersection A and B: ${print(C1)}`)

// Diff
C1 = new Set([...A].filter(x => !B.has(x)))
console.log(`Diff A and B: ${print(C1)}`)