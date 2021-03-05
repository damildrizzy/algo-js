class Node {
    constructor (value) {
        this.value = value;
        this.nextNode = null
    }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)

a.nextNode = b
b.nextNode = c

