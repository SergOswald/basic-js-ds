const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

/*

class LinkedListNode {
  constructor( value, next = null ) {
    this.value = value ;
    this.next = next ;
  } ;
} ;

class LinkedList {
  constructor( comparator ) {
    this.head = null ;
    this.tail = null ;

    this.comparator =
      comparator ||
      function ( i , j ) {
        if ( i < j ) return -1 ;
        if ( i > j ) return 1 ;
        return 0 ;
      } ; 
  } ;

  append( value ) {
    let newNode = new LinkedListNode(value);
    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
    if (!this.head) this.head = newNode;
  } ;

  delete(value) {
    if (!this.head) return;

    while (this.head && this.comparator(this.head.value, value) === 0) {
      this.head = this.head.next;
    }

    let current = this.head;

    if (current !== null) {
      while (current.next) {
        if (this.comparator(current.next.value, value) === 0) {
          current.next = current.next.next;
        } else {
          current = current.next;
        } ;
      } ;
    } ;

    if (this.comparator(this.tail.value, value) === 0) {
      this.tail = current;
    } ;
  } ;

  deleteHead() {
    if (!this.head) return null;
    let deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  } ;


} ;


class Queue {
  constructor() {
    this.linkedList = new LinkedList() ;
  } ;

  enqueue(value) {
    this.linkedList.append( value ) ;
  } ;

  dequeue() {
    const removedHead = this.linkedList.deleteHead() ;
    return removedHead ? removedHead.value : null;
  } ;

  getUnderlyingList() {
    return this.linkedList ;

  } ;


 
  /*
  isEmpty() {
    return !this.linkedList.head;
  }
 
  peek() {
    if (!this.linkedList.head) {
      return null;
    }
 
    return this.linkedList.head.value;
  }
   */
// }

class Node {
  constructor(value) {
     this.value = value
     this.next = null 
   }
 }

 class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }


  isEmpty() {
    return !this.size
  }

  enqueue(item) {
    // Create node
    const newNode = new Node(item)
    /**
     * * If our list is empty than both our 
     * * first item and last item is going to point the new node. 
     */
    if (this.isEmpty()) {
      this.first = newNode
      this.last = newNode
    }
    else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
    return this 
  }
  /**
   * 
   * @returns 
   */

  dequeue() {

    //* if our queue is empty we return null 
    if (this.isEmpty()) return null
    const itemToBeRemoved = this.first

    /**
     * * if both our first and last node are pointing the same item
     * * we dequeued our last node. 
     */
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return itemToBeRemoved
  }

  /**
   * * Returns the next element to be dequeued. 
   * @returns 
   */
  peek() {
    return this.first
  }

  getUnderlyingList() {
    return this ;

  } ;

}


module.exports = {
  Queue
};
