function Queue ()  {

    this.items = [];

    this.enqueue = (item) => {
        return this.items.unshift(item);
    };
    this.dequeue =  () => {
        return this.items.pop()
    };
    this.size = () => {
        return this.items.length
    };
    this.isEmpty = () => {
        return this.items.length === 0
    }
}


queue = new Queue()

console.log(queue.isEmpty())

queue.enqueue(70)

queue.enqueue(70)

console.log(queue.size())


