class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    addWord(word, index = 0) {
        if(index === word.length) {
            this.isWord = true;
        }
        else if(index < word.length) {
            let char = word[index];
            let subTrie = this.characters[char] || new Trie();
            // console.log(index, subTrie);
            subTrie.addWord(word, index+1);
            this.characters[char] = subTrie;
            // console.log("l: ", this.characters[char]);
        }
        return this;
    }
}

let trie = new Trie();
console.log(trie.addWord("fa"));
// console.log(trie.addWord("fan"));
// console.log(trie.addWord("dun"));