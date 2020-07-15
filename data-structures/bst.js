class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) { 
       let node  = new Node(value);
       let iterate = true;
       let current = this.root;
       if(!this.root) {
        this.root = node;
        return this;
       }
       while(iterate) {
            if(node.value === current.value) {
                return undefined;
            }
            while(node.value < current.value) {
                if(!current.left) {
                    current.left = node;
                    iterate = false;
                    return this;
                }
                else {
                    current = current.left;
                }
            }
            while(node.value > current.value) {
                if(!current.right) {
                    current.right = node;
                    iterate = false;
                    return this;
                }
                else {
                    current = current.right;
                }
            }
        }
    }
    find(value) {
        let current = this.root;
        while(current) {
            if(current.value === value) {
                return true;
            }
            if(current.value > value) {
                current = current.left;
            }
            else if(current.value < value) {
                current = current.right;
            }
        }
        return false;
    }
}    

let bst = new BinarySearchTree();
bst.insert(3);
bst.insert(2);
bst.insert(4);
bst.insert(1);
bst.insert(10);
bst.insert(6);
console.log(bst.insert(6));
console.log(bst);
console.log(bst.find(6));
