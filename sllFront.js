class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        // Creating a new node object with the value provided
        let new_node = new Node(val);
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, place the new node as the head 
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
        new_node.next = this.head;
        // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
        this.head = new_node;
        return this;
    }
    removeFront(val) {
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, return "no head to remove" 
        if(!this.head) {
            message = "no head to remove"
            return message;
    }
        this.head.next = this.head;
        return this
}
}
car = new Node(5);
car1 = new Node(10);
console.log(car)
console.log(car1)

train = new LinkedList()
console.log(train)

train.addFront(car)
console.log(train)

train.addFront(car1)
console.log(train)
