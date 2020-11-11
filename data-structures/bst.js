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
       let current = this.root;
       if(!this.root) {
        this.root = node;
        return this;
       }
       while(true) {
            if(node.value === current.value) {
                return undefined;
            }
            while(node.value < current.value) {
                if(!current.left) {
                    current.left = node;
                    return this;
                }
                else {
                    current = current.left;
                }
            }
            while(node.value > current.value) {
                if(!current.right) {
                    current.right = node;
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
                return current;
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
    remove(value) {
        let current = this.root;
        let previous;
        let min;
        let previousInSubTree;
        let lastNodeInMin;
        if(current === null) return null;
        if(current.value === value && !current.left && !current.right) {
            this.root = null;
            return true;
        };

        while(current) {
            if(current.value === value) {
                // case 1: no child
                if(!current.left && !current.right) {
                    current = null;
                    if(previous.left && previous.left.value === value) {
                        previous.left = null;
                    }
                    if(previous.right && previous.right.value === value) {
                        previous.right = null;
                    }
                    // else {
                        // previous.right.value = null;   
                    // }
                    return true; 
                }
                // case 2: one child
                if(!current.left || !current.right) {
                    if(current === previous.left) {
                        if(current.left) {
                            previous.left = current.left;
                            current.value = null;
                            current.left = null;
                        }
                        if(current.right) {
                            previous.left = current.right;
                            current.value = null;
                            current.right = null;
                        }
                    }
                    if(current === previous.right) {
                        if(current.left) {
                            previous.right = current.left;
                            current.value = null;
                            current.left = null;
                        }
                        if(current.right) {
                            previous.right = current.right;
                            current.value = null;
                            current.right = null;
                        }
                    }
                } 
                // case 3: two children
                if(current.left && current.right) {
                    min = current.right;
                    previousInSubTree = min;
                    while(min.left) {
                        previousInSubTree = min;
                        min = min.left;
                    }

                    // min has no right child
                    if(!min.right) {
                        current.value = min.value;
                        previousInSubTree.left = null;
                        min.value = null;
                    }

                    // min has right child
                    if(min.right) {
                        // lastNodeInMin = min.right;
                        // while(lastNodeInMin.right) {
                        //     lastNodeInMin = lastNodeInMin.right;
                        // }    
                            previous.right.value = min.value;
                            previousInSubTree.left = min.right;
                            // previous.right.right = min.right;
                            // lastNodeInMin.right = previousInSubTree;
                    }
                }
                return true;  
            }
            if(current.value > value) {
                previous = current;
                current = current.left;
            }
            if(current.value < value) {
                previous = current;
                current = current.right;
            }
        }
    } 

    balancedHeight(current) {
        if(current === null) return 0;
        let h1 = this.balancedHeight(current.left);
        let h2 = this.balancedHeight(current.right);
        if(h1 === -1 || h2 === -1) return -1;
        if(Math.abs(h1 - h2) > 1) return -1;
        if(h1 > h2) return h1+1;
        return h2+1;
    }

    isBalanced() {
        let current = this.root;
        if(this.balancedHeight(current) > -1) return true;
        return false;
    }
}  

let bst = new BinarySearchTree();
bst.insert(22);
bst.insert(49);
bst.insert(85);
bst.insert(66);
bst.insert(95);
bst.insert(90);
bst.insert(100);
bst.insert(88);
bst.insert(93);
bst.insert(89);
console.log(bst);
console.log(bst.remove(85));
console.log(bst.root.right.right.value);
console.log(bst.root.right.right.right.left.left.value);
console.log(bst.isBalanced());

//-------------------------
// * Insert alternate solution
    // insert(value) {
    //     let node = new Node(value);
    //     let current = this.root;
    //     if(!current) {
    //         this.root = node;
    //     }
    //     while(current) {
                // if(node.value === current.value) {
                //    return undefined;
                // }
    //         if(node.value > current.value) {
    //             if(current.right === null) {
    //                 current.right = node;
    //                 return this;
    //             }
    //             current = current.right;
    //         }
    //         else if(node.value < current.value) {
    //             if(current.left === null) {
    //                 current.left = node;
    //                 return this;
    //             } 
    //             current = current.left;
    //         }    
    //     }
    // }

module.exports = { Node, BinarySearchTree} ;
