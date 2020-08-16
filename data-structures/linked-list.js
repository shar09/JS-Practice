class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = this.head;
        while(current.next) {
            newTail = current; 
            current = current.next;   
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if(!this.head) {
            return undefined;
        }
        let currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } 
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if(index < 0 || index >= this.length) {
            return null;
        }
        let current = this.head;
        let counter = 0;
        while(counter!=index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, value) {
        let current = this.get(index);
        if(current) {
           current.val = value;
        }
        return current;
    }
    insert(index, val) {
        if(index<0 || index >this.length) {
            return false; 
        }
        if(index === this.length) {
            this.push(val);
            return true;
        }
        else if(index === 0) {
            !!this.unshift(val);
        }
        else {
            //let current = this.get(index);
            let previous = this.get(index-1);
            let current = previous.next;
            let node = new  Node(val); 
            previous.next = node;
            node.next = current;
            this.length++;
        }
        return true;
    }
    remove(index) {
        if(index<0 || index >=this.length) {
            return undefined;
        }
        else if(index === this.length-1) {
            this.pop();
        }
        else if(index === 0) {
            this.shift();
        }
        else {
            let previous = this.get(index-1);
            let current = previous.next;
            previous.next = current.next;
            this.length--;
            return current;
        }
    }
    print() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i=0; i<this.length; i++) {
           next = node.next;
           node.next = prev;
           prev = node;
           node = next;           
        }
        return this;
    }
}


let list = new LinkedList();
//console.log(list.push(6));
//console.log(list.push(7));
// console.log(list.pop());
// console.log(list.pop());
// console.log(list);
// console.log(list.shift());
// console.log(list.shift());
//console.log(list.unshift(9));
list.push(4);
list.push(5);
list.push(6);
list.push(7);
console.log(list);
//console.log(list.get(2));
//console.log(list.set(0,8));
//console.log(list.insert(0,9));
//console.log(list.remove(1));
// console.log(list.print());
// console.log(list.reverse());
