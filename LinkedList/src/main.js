//Test frame
var LinkedList = require('./core/linkedList.js');
const { performance } = require('perf_hooks');

let linkedlist = new LinkedList();
var t0 = performance.now()
for(var i = 0; i<100000; i++){
linkedlist.addToEnd(i);
}
var t1 = performance.now()
console.log("Insert 100000 entries into linked list at the end took " + (t1 - t0) + " milliseconds.")

console.log('Länge der LinkedList:', linkedlist.listlength);
//console.log('LinkedList als Array:', linkedlist.toArray());
console.log('Letztes Element der LinkedList:', linkedlist.lastelement);
//console.log('Umgekehrte Reihenfolge der LinkedList:', linkedlist.reorderLinkedList().toArray());

let secondlinkedlist = new LinkedList();
var t2 = performance.now()
for(var i = 0; i<100000; i++){
    secondlinkedlist.addToBegin(i);
    }
    var t3 = performance.now()
console.log("Insert 100000 entries into linked list at the beginning took " + (t3 - t2) + " milliseconds.")

console.log('Länge der LinkedList:', secondlinkedlist.listlength);
//console.log('LinkedList als Array:', secondlinkedlist.toArray());
console.log('Letztes Element der LinkedList:', secondlinkedlist.lastelement);
//console.log('Umgekehrte Reihenfolge der LinkedList:', secondlinkedlist.reorderLinkedList().toArray());
