class Deque {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0
    }

    addFront(item) {
        return this.items.push(item)
    }

    addRear(item) {
        return this.items.unshift(item)
    }

    removeFront() {
        return this.items.pop()
    }

    removeRear() {
        return this.items.shift()
    }

    size () {
        return this.items.length
    }
}

let deque = new Deque()
