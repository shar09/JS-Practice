class Heap {
    constructor() {
        this.values = [];
    }
    insert(value) {
        let array = this.values;
        array.push(value);
        let index = array.length - 1;
        
        // bubble up
        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2); 
            if(array[index] > array[parentIndex]) {
                // swap
                let temp = array[parentIndex];
                array[parentIndex] = array[index];
                array[index] = temp;
                index = parentIndex;
            }
        }    
        return this.values;
    } 
}

let heap  = new Heap();
heap.insert(60);
heap.insert(100);
heap.insert(40);
heap.insert(30);
heap.insert(10);
heap.insert(35);
heap.insert(25);
console.log(heap);