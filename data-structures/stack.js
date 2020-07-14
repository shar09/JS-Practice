class Node {
    constructor(value) {
        this.val=value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        let node = new Node(value);
        if(!this.first) {
            this.first = node;
            this.last = node;
        }
        else {
            let temp = this.last;
            this.last = node;
            node.next = temp;
        }
        return ++this.size;
    }   
    pop() {
        if(!this.first) {
            return undefined;
        }
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        }
        else {
            let temp = this.last;
            this.last = temp.next;
            temp.next = null;
        }
        this.size--;
        return temp.value;   
    } 
}

let stack = new Stack();
stack.push(10);
stack.push(18);
stack.push(20);
console.log(stack.pop());
console.log(stack);