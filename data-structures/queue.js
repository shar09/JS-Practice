class Node {
    constructor(value) {
        this.val = value; 
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    enqueue(value) {
        let node = new Node(value)
        if(!this.first) {
            this.first = node;
            this.last = node;
        }
        else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.length;
    }
    dequeue() {
        if(!this.first) {
            return undefined;
        }
        let temp = this.first;
        this.first = this.first.next;
        temp.first = null;
        this.length--;
        return temp;
    }
}

let queue = new Queue();
queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(8);
queue.dequeue();
queue.dequeue();
console.log(queue);

