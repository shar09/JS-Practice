let { Graph } = require('../../data-structures/graph')

class Traversal {
    constructor() {
        this.graph = g;
    }
    dfsRecursive(start) {
        let result = [];
        let visited = {};
        let adjacencyList = this.graph.adjacencyList;
        function helper(vertex) {
            if(!vertex) {
                return null;
            }
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return helper(neighbor);
                }
            })
        }
        helper(start);
        return result;
    }

    dfs(start) {
        let stack = [start];
        let visited = {};
        let result = [];
        let currentVertex;
        visited[start] = true;
        while(stack.length) {
            currentVertex = stack.pop();
            this.graph.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
            result.push(currentVertex);
        }
        return result;
    }
    bfs(start) {
        let queue = [start];
        let visited = {};
        let result = [];
        let currentVertex;
        visited[start] = true;
        while(queue.length) {
            currentVertex = queue.shift();
            this.graph.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
            result.push(currentVertex);
        }
        return result;
    }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

let t = new Traversal();
console.log(t.dfsRecursive("A"));
console.log(t.dfs("A"));
console.log(t.bfs("A"));

