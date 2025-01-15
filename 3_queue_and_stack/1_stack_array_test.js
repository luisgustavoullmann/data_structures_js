import StackArray from "./1_stack_array.js";

let stack = new StackArray(10);

console.log(`count: ${stack.count()}`)
console.log(`isEmpty: ${stack.isEmpty()}`)

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(`count: ${stack.count()}`)
console.log(`isEmpty: ${stack.isEmpty()}`)
console.log(`peek: ${stack.peek()}`)

console.log("Itens:")
while(!stack.isEmpty()) {
    let item = stack.pop();
    console.log(`Item: ${item}`);
}

stack.clear()
console.log(`isEmpty: ${stack.isEmpty()}`)