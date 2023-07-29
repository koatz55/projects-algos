class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    display() {
            //We first have to tell our train attendant that we want them to start at the front of the train
            let runner=this.head
            let sum=""
            //Since a Linked List does not know how many nodes is within it, we will not be able to use a for loop to             iterate, instead we'll use a while
            //Also we need to tell them when to stop otherwise they will just run off the end of the train
            while(runner !== null){
                //Since the runner is set to the current node, its value will be equal to the value of the node they                 are currently on
                 sum+= runner.data
                 console.log(runner.data)
                //Tell our attendant to move to the next car
                runner=runner.next
            }
            return sum
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
}

car = new Node(5);
car1 = new Node(10);
console.log(car)
console.log(car1)

train = new SLL()
console.log(train)

train.addFront(car)
console.log(train)

train.addFront(car1)
console.log()

mytrain = JSON.stringify(train)
console.log(mytrain)

SLL1 = new SLL()
SLL1.addFront(76)//   => Node { data: 76, next: null }
SLL1.addFront(2) //=> Node { data: 2, next: Node { data: 76, next: null } }
SLL1.display() //=> "2, 76"
SLL1.addFront(11.41)// => Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
SLL1.display() //=> "11.41, 2, 76"