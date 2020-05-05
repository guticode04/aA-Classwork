class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insertRecur(word, position = this.root) {
        if(word === '') return position.isTerminal = true;
        if(position.children[word[0]] !== undefined) {
            this.insertRecur(word.substring(1), position.children[word[0]]);             
        } else {
            let node = new Node;
            position.children[word[0]] = node;
            this.insertRecur(word.substring(1), node);
        }
    }

    insertIter(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];
            if (!(letter in node.children)) {
                node.children[letter] = new Node();
            }
            node = node.children[letter];
        }
        node.isTerminal = true;
    }

    searchRecur(word, root = this.root) {
        if (word.length === 0) {
            if (root.isTerminal) {
                return true;
            } else {
                return false;
            }
        }

        if (word[0] in root.children) {
            return this.searchRecur(word.slice(1), root.children[word[0]]);
        } else return false;
    }

    searchIter(word) {
        let node = this.root;
        for(let i = 0; i < word.length; i++) {
            if(!(word[i] in node.children)) return false;
            node = node.children[word[i]];
        }
        return node.isTerminal;
    }

    findPostfixes(node) {
        let words = [],
            stack = [ ...Object.keys(node.children) ], // 'a'
            current,
            partial = '';

        while(stack.length) {
            partial += stack.pop(); 
            current = node.children[partial[partial.length - 1]];

            if(current.isTerminal) {
                words.push(partial);
            }

            // partial = 'e'
            words.push(...this.findPostfixes(current).map(
                postfix => partial + postfix
            ));

            partial = partial.substring(0,partial.length - 1)
        }

        return words;
    }

    wordsWithPrefix(prefix) {
        let node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            node = node.children[prefix[i]];
            if (node === undefined) return [];
        }

        let words = this.findPostfixes(node).map(postfix => prefix + postfix);

        if (node.isTerminal) words.push(prefix);

        return words;
    }

// should return an array of all recognized words w/ the prefix, including empty string
}


module.exports = {
    Node,
    Trie
};