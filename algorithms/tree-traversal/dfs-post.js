let { BinarySearchTree } = require('../../data-structures/bst')

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
//console.log(tree);

function dfsPost(tree) {
    current = tree.root;
    let visited = [];
    function traverse(current) {
        if(current.left) {
           traverse(current.left);
        }
        if(current.right) {
            traverse(current.right);
        }
        visited.push(current.value);
        return;
    }
    traverse(current);
    return visited;
}

console.log(dfsPost(tree));