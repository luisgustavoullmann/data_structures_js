class Node {
    constructor(key, parent) {
        this.key = key;
        this.left = this.right = null;
        this.parent = parent;
    }

    _isSentinel = () => { return this.key === null; }
}

export default class BinarySearchTreeSet {
    #size;
    #root;

    constructor(collection = []) {
        this.#size = 0;
        this.#root = new Node(null, null);
        this.addAll(collection);
    }

    size = () => { return this.#size; }

    isEmpty = () => { return this.#size === 0 }

    findMin = (node) => {
        while(!node.left._isSentinel()) {
            node = node.left;
        }
        return node;
    }

    findKeyLocation = (node, key) => {
        while(!node._isSentinel()) {
            let cmp = (key < node.key) ? -1 : (key > node.key) ? 1 : 0;
            if(cmp === 0) {
                return node
            } else if(cmp < 0) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        return node;
    }

    _keyIsNotNull = (key) => {
        if(key === null) throw new Error("Key cannot be null");
        else true;
    }

    remove = (key) => {
        this._keyIsNotNull(key);
        
        let nodeToRemove = this.findKeyLocation(this.#root, key);

        if(nodeToRemove._isSentinel()) { return false; }

        if(!nodeToRemove.left._isSentinel() && !nodeToRemove.right._isSentinel()) {
            let sucessor = this.findMin(nodeToRemove.right);
            nodeToRemove.key = sucessor.key;
            nodeToRemove = sucessor;
        }

        let child = nodeToRemove.left._isSentinel() ? nodeToRemove.right : nodeToRemove.left;

        if(nodeToRemove.parent === null) {
            this.#root = child;
        } else if(nodeToRemove === nodeToRemove.parent.left) {
            nodeToRemove.parent.left = child;
        } else {
            nodeToRemove.parent.right = child;
        }

        this.#size--;
        return true;
    }

    add = (key) => {
        this._keyIsNotNull(key);

        if(this.isEmpty()) {
            this.#root = new Node(key, null);
            this.#root.left = new Node(null, this.#root);
            this.#root.right = new Node(null, this.#root.right);
            this.#size++;
            return;
        }

        let node = this.findKeyLocation(this.#root, null);

        if(node._isSentinel()) {
            let parent = node.parent;
            let newNode = new Node(key, parent);
            newNode.left = new Node(null, newNode);
            newNode.right = new Node(null, newNode);

            if(node === parent.left) {
                parent.left = newNode;
            } else if(node === parent.right) {
                parent.right = newNode;
            }
        }    
        this.#size++;
    }

    addAll = (collection) => { collection.forEach(item => this.add(item)); }

    contains = (key) => {
        let node = this.findKeyLocation(this.#root, key);
        return !node._isSentinel();
    }

    collectionKeys = (node, keyList) => {
        if(!node._isSentinel()) {
            this.collectionKeys(node.left, keyList);
            keyList.push(node.key);
            this.collectionKeys(node.right, keyList);
        }
    }

    keys = () => {
        let keyList = [];
        this.collectionKeys(this.#root, keyList);
        return keyList;
    }

    union = (other) => {
        let result = new BinarySearchTreeSet();
        this.keys().forEach(key => result.add(key));
        other.keys().forEach(key => result.add(key));
        return result;
    }

    intersection = (other) => {
        let result = new BinarySearchTreeSet();
        this.keys().forEach(key => {
            if(other.contains(key)) { result.add(key); }
        });
        return result;
    }

    difference = (other) => {
        let result = new BinarySearchTreeSet();
        this.keys().forEach(key => {
            if(!other.contains(key)) { result.add(key); }
        });
        return result;
    }


    toString = () => { return this.keys().toString() }


    toStringFormatHelper = (node, depth, sb) => {
        if(!node._isSentinel()) {
            this.toStringFormatHelper(node.right, depth + 1, sb);
            let space = (depth > 0) ? "       ".repeat(depth - 1) + "--" : "";
            let parent = (depth > 0) ? node.parent.key.toString() : "";
            sb.push(`${space}(${node.key})${parent}\n`);
            this.toStringFormatHelper(node.left, depth + 1, sb);
        }
    }

    toStringFormat = () => {
        let sb = [];
        this.toStringFormatHelper(this.#root, 0, sb);
        return sb.join("");
    }
}