import Queue from "./3_queue.js";

const queue = new Queue();

console.log(`is Empty: ${queue.isEmpty()}`)

queue.add(1)
queue.add(2)
queue.add(3)
queue.add(4)

console.log(`Count: ${queue.count()}`)
console.log(`is Empty: ${queue.isEmpty()}`)



console.log("Itens:")
while(!queue.isEmpty()) {
    console.log(`Removing item: ${queue.remove()}`);
}

queue.clear()
console.log(`is Empty: ${queue.isEmpty()}`)