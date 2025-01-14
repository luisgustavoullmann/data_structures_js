class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty = () => {
        if(this.head === null) return true;
        return false;
    }

    getSize = () => {
        return this.size;
    }

    clear = () => {
        this.head = null;
        this.size = 0;
    }

    addAtEnd = (elem) => {
        const node = new Node(elem);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    addAtStart = (elem) => {
        const node = new Node(elem);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            const aux = this.head;
            this.head = node;
            node.next = aux;
        }
        this.size++;
    }

    __getNode__ = (index) => {
        if(index < 0 || index > this.getSize()) return null;
        let current = this.head;
        let i = 0;
        while(i != index) {
            current = current.next;
            i++
        }
        return current;
    }

    get = (index) => {
        let current = this.__getNode__(index);
        if(current) return current.value;
        return null;
    }

    addAtPosition = (index, elem) => {
        if(index === 0){
            this.addAtStart(elem);
        } else if(!this.get(index)) {
            this.addAtEnd(elem);
        } else {
            const newNode = new Node(elem);
            let beforeElem = this.__getNode__(index - 1);
            newNode.next = beforeElem.next;
            beforeElem.next = newNode;
            this.size++;
        }
    }

    indexOf = (elem) => {
        let current = this.head;
        let i = 0;
        while(current){
            if(current.value == elem) return i;
            current = current.next;
            i++
        }
        return -1;
    }

    removeAtPosition = (index) => {
        if(this.isEmpty() || !this.get(index)) return null;

        let item = null;
        if(index === 0) {
            item = this.head.value;
            this.head = this.head.next;
        } else if(index === this.getSize - 1) {
            item = this.get(index);
            let beforeElem = this.__getNode__(index - 1);
            beforeElem.next = null;
        } else {
            let beforeElem = this.__getNode__(index - 1);
            item = beforeElem.next.value;
            beforeElem.next = beforeElem.next.next;
        }
        this.size --;
        return item;
    }

    remove = (elem) => {
        let index = this.indexOf(elem);
        if(this.isEmpty() || index === - 1) return false;
        this.removeAtPosition(index);
        return true;
    }

    contains = (elem) => {
        let indexElem = this.indexOf(elem);
        if(indexElem != - 1) return true;
        return false;
    }

    print = () => {
        let currentNode = linkedList.head;
        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

// Test
const test_array = [20, 9, 86, -2, 16, 23];

const linkedList = new LinkedList();
for (let i = 0; i < test_array.length; i++) {
    linkedList.addAtEnd(test_array[i]);
}

linkedList.print()
console.log(`Get size: ${linkedList.getSize()}`)

linkedList.addAtStart(500)

linkedList.print()
console.log(`Get size: ${linkedList.getSize()}`)

console.log(`Get by index 3 value: ${linkedList.get(3)}`)
console.log(`Get invalid by index 500 value: ${linkedList.get(500)}`)

// middle
linkedList.addAtPosition(4, 79)
linkedList.print()
// end
linkedList.addAtPosition(500, 77)
linkedList.print()
// start
linkedList.addAtPosition(0, 3)
linkedList.print()

console.log(`Get by index: ${linkedList.indexOf(77)}`)
console.log(`Get invalid by index: ${linkedList.indexOf(10000)}`)

console.log(`Contains element: ${linkedList.contains(77)}`)
console.log(`Contains invalid element: ${linkedList.contains(10000)}`)

console.log(`Remove at index 0: ${linkedList.removeAtPosition(0)}`)
console.log(`Remove at index -1: ${linkedList.removeAtPosition(linkedList.getSize()-1)}`)
console.log(`Remove at index middle: ${linkedList.removeAtPosition(3)}`)
linkedList.print()

console.log(`Is empty ${linkedList.isEmpty()}`)

linkedList.clear()
console.log(`Clear list: ${linkedList.size}`)
console.log(`Remove at invalud index: ${linkedList.removeAtPosition(0)}`)