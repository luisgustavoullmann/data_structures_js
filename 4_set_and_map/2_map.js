let map = new Map();

map.set("user", "maria34");
map.set("email", "ana@gmail.com");
map.set("email", "maria@gmail.com");
map.set("last-login", "2024-07-04T21:42:40.353283800Z");

console.log("Values: ");
for(let value of map.values()) {
    console.log(value);
}

console.log("Keys and values: ")
for(let [key, value] of map){
    console.log(`${key}: ${value}`);
}

console.log(`Is empty: ${map.size === 0}`);
console.log(`Size: ${map.size}`);

console.log(`Has: ${map.has("email")}`);
let removed = map.get("email");
console.log(`Remove: ${removed}`);
map.delete(removed);


console.log(`Has: ${map.has("email")}`);
removed = map.get(removed);
console.log(`trying to remove again: ${removed}`);