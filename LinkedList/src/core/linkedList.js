class LinkedList {

  //constructor
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //method to add value to the end of linked list
  addToEnd(value) {
    var Node = require('./node.js');
    let node = new Node(value);

    if (this.length === 0) {
      //if length = 0, then linked list is empty -> set new node as head
      this.head = node;
    } else {
      //iterate through linked list and set new node as last node
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    //increment linked list length
    this.length++;
  }
  //method to add value to the beginning of linked list
  addToBegin(value) {
    var Node = require('./node.js');
    let node = new Node(value);
    if (this.length === 0) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
      
    }
    //increment linked list length
    this.length++;
  }

  //getter: list length
  get listlength() {
    return this.length;
  }

  //getter: last element in linked list
  get lastelement() {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    //return where next node is null
    return current.element;
  }

  //return linked list as array
  toArray() {
    //create array, iterate through linked list, fill array
    var elements = new Array();
    //Abbruchbedingung: return if linked list is empty
    if (this.head == null) {
      //make sure array will be returned, even if empty -> JavaScript is not type safe
      return elements;
    }
    var count = 0;
    let current = this.head;
    while (current.next != null) {
      elements.push(current.element);
      current = current.next;
      count++;
    }
    //push last element
    elements.push(current.element);
    //Validation:
    //console.log(elements.length)
    return elements;
  }

  //reorder linked list
  reorderLinkedList() {
    var reversearray = this.toArray().reverse();
    let reversedlinkedlist = new LinkedList();
    for (var i = 0; i < reversearray.length; i++) {
      reversedlinkedlist.addToEnd(reversearray[i]);
    }
    //return linked list
    return reversedlinkedlist;
  }
}
module.exports = LinkedList;