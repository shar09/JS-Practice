class Graph {
    constructor() {
        this.adjacencyList = {};
    } 
    addVertex(vertex) {
        if(!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        let keys = Object.keys(this.adjacencyList);
        if(keys.includes(vertex1.toString()) && keys.includes(vertex2.toString())) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2) {
        let keys = Object.keys(this.adjacencyList);
        if(keys.includes(vertex1.toString()) && keys.includes(vertex2.toString())) {          
            let edgeIndex1 = this.adjacencyList[vertex1].indexOf(vertex2);
            this.adjacencyList[vertex1].splice(edgeIndex1, 1);
            let edgeIndex2 = this.adjacencyList[vertex2].indexOf(vertex1);
            this.adjacencyList[vertex2].splice(edgeIndex2, 1);     
        }  
        // can also be done with filter method  
    }
    removeVertex(vertex) {
        let removedVertex = this.adjacencyList[vertex];
        //console.log(removedVertex);
        for(let element of removedVertex) {
            let edge = this.adjacencyList[element];
            this.adjacencyList[element] = edge.filter(v => v !== vertex);
        }
        delete this.adjacencyList[vertex];
    }
}

// let graph = new Graph();
// graph.addVertex(6);
// graph.addVertex(12);
// graph.addVertex(4);
// graph.addVertex(2);
// graph.addEdge(4,2);
// graph.addEdge(6,12);
// graph.addEdge(6,2);
// graph.addEdge(2,12);
// console.log(graph);
// graph.removeEdge(4,2);
// graph.removeVertex(12);
// console.log(graph);

module.exports = { Graph } ;