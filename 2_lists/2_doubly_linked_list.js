class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    clear = () => {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty = () => {
        return this.head == null;
    }

    getSize = () => {
        return this.size;
    }


    addAtStart = (elem) => {
        const node = new Node(elem);
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
        return;
    }
    
    addAtEnd = (elem) => {
        const node = new Node(elem);
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node
        }
        this.size++;
        return;
    }

    addAtPosition = (index, elem) => {
        if(index == 0){
            this.addAtStart(elem);
        } else if(!this.get(index) || index == this.getSize()) {
            this.addAtEnd(elem);
        } else {
            const node = new Node(elem);
            let current = this.__getNode__(index - 1);
            current.next.prev = node;
            node.next = current.next;
            node.prev = current;
            current.next = node;
        }
        this.size++;
        return;
    }

    removeHead = () => {
        const node = this.head;
        this.head = this.head.next;

        if(this.head == null) this.tail = null;
        else this.head.prev = null
        this.size--;
        return node.value;
    }

    removeTail = () => {
        const node = this.tail;
        this.tail = this.tail.prev;

        if(this.tail == null) this.head = null;
        else this.tail.next = null;
        this.size--;
        return node.value;
    }

    removeAtPosition = (index) => {
        if(this.isEmpty() || !this.get(index)) return null;

        if(index == 0) return this.removeHead(index);
        else if(index == this.getSize() - 1) return this.removeTail(index);
        else {
            const current = this.__getNode__(index);
            current.prev.next = current.next;
            current.next.prev = current.prev;
            this.size--;
            return current.value;
        }
    }

    remove = (elem) => {
        let index = this.indexOf(elem);
        if(this.isEmpty() || index == -1) return false;
        this.removeAtPosition(index);
        return true;
    }

    reverse = () => {
        const nodeHead = this.head;
        const nodeTail = this.tail;

        let current = nodeHead;
        let aux = null
        while(current) {
            aux = current.next;
            current.next = current.prev;
            current.prev = aux;
            current = aux;
        }
    }

    __getNode__ = (index) => {
        if(index < 0 || index > this.getSize()) return null;
        let current = this.head;
        let currentIndex = 0;
        while(current !== null && currentIndex < index) {
            current = current.next;
            currentIndex++;
        }
        return current;
    }

    get = (index) => {
        let current = this.__getNode__(index);
        if(current) return current.value;
        return null;
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

    contains = (elem) => {
        let indexElem = this.indexOf(elem);
        if(indexElem != - 1) return true;
        return false;
    }

    toArray = () => {
        let current = this.head;
        let vet = [];
        while(current) {
            vet.push(current.value);
            current = current.next;
        }
        return vet;
    }

    print = () => {
        let currentNode = doublyLinkedList.head;
        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}



// Test
const test_array = [20, 9, 86, -2, 16, 23];

const doublyLinkedList = new DoublyLinkedList();
for (let i = 0; i < test_array.length; i++) {
    doublyLinkedList.addAtEnd(test_array[i]);
}

console.log(doublyLinkedList.toArray())

console.log(`Add at start:`);
doublyLinkedList.addAtStart(19)
console.log(doublyLinkedList.toArray())

console.log(`Get by index 0: ${doublyLinkedList.get(0)}`)

console.log(`Add 77 at index 3:`)
doublyLinkedList.addAtPosition(3, 77)
console.log(doublyLinkedList.toArray())

console.log(`Remove Head: ${doublyLinkedList.removeHead()}`)
console.log(doublyLinkedList.toArray())

console.log(`Remove Tail: ${doublyLinkedList.removeTail()}`)
console.log(doublyLinkedList.toArray())

console.log(`Remove at position: ${doublyLinkedList.removeAtPosition(3)}`)
console.log(doublyLinkedList.toArray())

console.log(`Remove: ${doublyLinkedList.remove(20)}`)
console.log(doublyLinkedList.toArray())

console.log(`Reverse doubly linked list`)
console.log(doublyLinkedList.toArray())


