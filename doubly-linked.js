class Node {
    constructor(value) {
        this.value = value;
        this.next_node = null;
        this.prev_node = null;
    }

}

let a = new Node(1)
let b = new Node(2)
let c = new Node(3)

a.next_node = b
b.prev_node = a
b.next_node = c 
c.prev_node = b
