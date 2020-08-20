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
            else {
                break;
            }
        }    
        return this.values;
    } 
    remove() {
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
        while((array[index] < array[left] || array[index] < array[right])) {
                if(array[left] > array[right]) {
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

let heap  = new Heap();
heap.insert(60);
heap.insert(100);
heap.insert(40);
heap.insert(30);
heap.insert(10);
heap.insert(35);
heap.insert(25);
console.log(heap);
console.log(heap.remove());
console.log(heap);

//--------------------------------------------------
// Insert alternate solution

// let heap = [];

// function insert(value) {
//     heap.push(value);
//     let index = heap.length - 1; 
//     let parentIndex = Math.floor((index - 1)/2)
//     while(heap[index] > heap[parentIndex]) {
//         //swap
//         let temp = heap[index];
//         heap[index] = heap[parentIndex];
//         heap[parentIndex] = temp;
//         index = parentIndex;
//         parentIndex =  Math.floor((index - 1)/2)
//     }
//     return heap;
// }
