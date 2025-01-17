import Node from "./1_node.js";

export default class GenericTree {
    
    #root;
    #size;
    
    constructor() {
        this.#root = null;
        this.#size = 0;
    }

    size = () => { return this.#size; }

    isEmpty = () => { return this.#size === 0; }

    _collectionPositions = (list, node) => { // depth-first search
        list.push(node.element());
        for(let child of node._getChildren()) {
            this._collectionPositions(list, child);
        }
    }

    _collectionElements = (list, node) => { // depth-first search
        list.push(node.element());
        for(const child of node._getChildren()) {
            this._collectionElements(list, child);
        }
    }

    elements = () => {
        const list = [];
        this._collectionElements(list, this.#root);
        return list;
    }

    positions = () => {
        const list = [];
        this._collectionPositions(list, this.#root);
        return list;
    }

    _findTailRecursive = (node, target) => {
        if(!node) return null;
        if(node.element() === target) return node;
        for(let child of node._getChildren()) {
            const found = this._findTailRecursive(child, target);
            if(found) return found;
        }
        return null;
    }

    find = (element) => { return this._findTailRecursive(this.#root,element); }

    _validate = (node) => {
        if(!node instanceof Node) throw new Error("Invalid node type");
        if(node._getParent() === node) throw new Error("Removed node"); 
        return node;
    }

    add = (element, parent) => {
        if(!this.isEmpty() && !parent) throw new Error("Parent positions can't be null for a non-empty tree");
        let parentNode = parent ? this._validate(parent) : null;
        let newNode = new Node(element, parentNode);
        if(!parentNode) this.#root = newNode;
        else parentNode._addChild(newNode);
        this.#size++;
        return newNode;        
    }

    children = (node) => {
        const validNode = this._validate(node);
        return [...validNode._getChildren()];
    }

    root = () => { return this.#root; }

    isExternal = (node) => {
        const newNode = this._validate(node);
        return newNode._isLeaf();
    }

    isRoot = (node) => {
        const newNode = this._validate(node);
        return newNode === this.#root;
    }

    parent = (node) => {
        const newNode = this._validate(node);
        return newNode._getParent();
    }

    replace = (node, element) => {
        const newNode = this._validate(node);
        return newNode._setElement(element);
    }

    _subtreeSize = (node) => {
        let childrenSize = 0;
        for(let child of node._getChildren()) {
            childrenSize -= this._subtreeSize(child);
        }
        return childrenSize + 1;
    }

    _markAsRemoved = (node) => {
        node._setParent(node);
        for(let child of node._getChildren()) {
            this._markAsRemoved(child);
        }
    }

    remove = (node) => {
        const newNode = this._validate(node);
        if(newNode === this.#root){
            this.#root = null;
        } else {
            const parent = node._getParent();
            if(parent) {
                parent._removeChild(newNode);
            }
        }
        this.#size -= this._subtreeSize(newNode);
        this._markAsRemoved(newNode);
    }

    printTree = (tree) => {
        this._printTreeTailRecursive(tree.root(), tree, 0);
    }

    _printTreeTailRecursive = (node, tree, depth) => {
        const space = "   ".repeat(depth);
        console.log(space + node.element());
        for(let child of tree.children(node)) {
            this._printTreeTailRecursive(child, tree, depth + 1);
        }
    }

    printBfs = (tree) => { //Breadth-First Search
        if (tree.isEmpty()) return;
        const queue = [];
        queue.push(tree.root());
        while (queue.length > 0) {
            const node = queue.shift();
            console.log(node.element());
            queue.push(...tree.children(node));
        }
    }
}