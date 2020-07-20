class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
       this.values = [];
    }
    enqueue(value, priority) {
        let node = new Node(value, priority);
        let array = this.values;
        array.push(node);
        let index = array.length - 1;
        let parent;
        //bubble
        while(index > 0) {
            parent = Math.floor((index-1)/2);
            if(array[index].priority < array[parent].priority) {
                //swap
                [array[index], array[parent]] = [array[parent], array[index]];
                index = parent; 
            }
            else {
                break;
            }
        }
    }
    dequeue() {
        let array = this.values;
        if(array.length<=1) {
            return array.pop();
        }
        let max = array[0];
        let end = array.pop();
        array[0] = end;
        let index = 0;
        let left = 2*index + 1;
        let right = 2*index + 2;
        while((array[left] && array[index].priority > array[left].priority) || (array[right] && array[index].priority > array[right].priority)) {
                if(array[left].priority < array[right].priority) {
                    let temp = array[index];
                    array[index] = array[left];
                    array[left] = temp;
                    index = left;
                }
                else {
                    let temp = array[index];
                    array[index] = array[right];
                    array[right] = temp;
                    index = right;
                }
            left = 2*index + 1;
            right = 2*index + 2;
        }
        return max;
    }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue(60, 0);
priorityQueue.enqueue(40, 1);
priorityQueue.enqueue(30, 1);
priorityQueue.enqueue(20, 2);
priorityQueue.enqueue(25, 2);
priorityQueue.enqueue(35, 0);
priorityQueue.enqueue(100, 1);
priorityQueue.dequeue();
priorityQueue.enqueue(101, -1);
console.log(priorityQueue);