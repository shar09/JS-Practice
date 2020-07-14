class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val);
        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop() {
        let temp = this.tail;
        if(!this.head) {
            return undefined;
        }
        if(this.length===1) {
            this.head=null;
            this.tail=null;         
        }
        else {
            this.tail=this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }
    shift() {
        let temp = this.head;
        if(!this.head) {
            return undefined;
        }
        if(this.length===1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
    unshift(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
        return this;
    }
    get(index) {
        if(index<0 || index>=this.length) {
            return undefined;
        }
        if(index === 0) {
            return this.head;
        }
        if(index === this.length-1) {
            return this.tail;
        }
        if((this.length-index) > index) {
            let current = this.head;
            for(let i=0;i<index;i++) {
               current = current.next;
            }
            return current;
        }
        else {
            let current = this.tail;
            for(let i=this.length-1;i>index;i--) {
                current = current.prev;
            }
            return current;
        }
    }
    set(index, value) {
        let current = this.get(index);
        if(current) {
            current.val = value; 
            return true;
        }    
        return false; 
    }
    insert(index, value) {
        if(index >= this.length || index < 0) {
            return false;
        }
        if(index === 0) {
            this.unshift(value);
        }
        else if(index === this.length-1) {
            this.push(value);
        }
        else {
            let node = new Node(value);
            let current = this.get(index);
            let previous = this.get(index-1);
            previous.next = node;
            current.prev = node;
            node.prev = previous;
            node.next = current;
            this.length++;
        }
        return true;
    }
    remove(index) {
        if(index<0 || index>=this.length) {
            return false;
        }
        if(index === 0) {
            this.shift();
        }
        else if(index === this.length-1) {
            this.pop();
        }
        else {
            let current = this.get(index);
            let previous = current.prev;
            let next = current.next;
            previous.next = current.next;
            next.prev = current.prev;
            current.next = null;
            current.prev = null; 
            this.length--;
        }
        return true;
    }
    print() {
        let arr = [];
        let current = this.head;
        for(let i=0; i<this.length; i++) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let previous = null;
        while(node) {
            next = node.next;
            previous = node.prev;
            node.prev = next;
            node.next = previous;
            previous = node;
            node = next;
        }
        return this; 
    }
    // reverse() {
    //     let currNode = this.head;
    //     let prevNode = null;
    //     let nextNode = null;
    
    //     while (currNode) {
    //       // Store next node.
    //       nextNode = currNode.next;
    //       prevNode = currNode.prev;
    
    //       // Change next node of the current node so it would link to previous node.
    //       currNode.next = prevNode;
    //       currNode.prev = nextNode;
    
    //       // Move prevNode and currNode nodes one step forward.
    //       prevNode = currNode;
    //       currNode = nextNode;
    //     }
    
    //     // Reset head and tail.
    //     this.tail = this.head;
    //     this.head = prevNode;

    //     return this;
    //   }
}

let list = new DoublyLinkedList();
list.push(6); 
list.push(2);
list.push(7);
list.push(10);
//console.log(list.pop());
//console.log(list.shift());
//list.unshift(5);
//console.log(list.get(9));
//list.set(0,1);
//list.insert(0,9);
//list.remove(1);
//console.log(list);
console.log(list.print());
console.log(list.reverse());
console.log(list.print());

