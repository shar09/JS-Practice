class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size); 
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i=0; i<key.length; i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let hash = this._hash(key.toLowerCase());
        if(!this.keyMap[hash]) {
            this.keyMap[hash] = [{[key]: value }];  
        }
        else {
            this.keyMap[hash].push({[key]: value}); 
        }
    }
    get(key) {
        let hash =  this._hash(key.toLowerCase());
        let bucket = this.keyMap[hash];
        for(let i=0; i<bucket.length; i++) {
            if(key in bucket[i]) {
                return bucket[i][key];
            }
        }
        return undefined;
    }
    keys() {
        let keys = [];
        for(let i=0; i<this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j=0; j<this.keyMap[i].length; j++) {
                    keys.push(Object.keys(this.keyMap[i][j])[0]);
                }
            }
        }
        return keys;
    }
    values() {
        let values = [];
        for(let i=0; i<this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j=0; j<this.keyMap[i].length; j++) {
                    if(values.includes(Object.values(this.keyMap[i][j])[0])) {
                        continue;
                    }
                    values.push(Object.values(this.keyMap[i][j])[0]);
                }
            }
        }
        return values;
    }
}

let hashTable = new HashTable(3);
hashTable.set("white", "#ffffff");
hashTable.set("black", "#000000");
hashTable.set("grey", "#aaaaaa");
hashTable.set("darkgrey", "#aaaaaa");
console.log(hashTable);
console.log(hashTable.get("black"));
console.log(hashTable.keys());
console.log(hashTable.values());