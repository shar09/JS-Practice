let { BinarySearchTree } = require('../../data-structures/bst')

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
//console.log(tree);

function bfs(tree) {
    let queue = [];
    let visited = [];
    let current = tree.root;
    if(current) {
        queue.push(current);
    }
    while(queue.length) {
        let current = queue.shift();
        visited.push(current.value);
        if(current.left) {
            queue.push(current.left);
        }
        if(current.right) {
            queue.push(current.right);
        }
    }
    return visited;
}

console.log(bfs(tree));
