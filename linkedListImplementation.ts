import LinkedListNode from "./linkedListNode";
import LinkedList from "./linkedList";
let ll = new LinkedList;
let n1 = new LinkedListNode(1);
ll.insert(0, n1);
let n2 = new LinkedListNode(2);
ll.insert(0, n2);
let n3 = new LinkedListNode(3);
ll.insert(0, n3);
let n4 = new LinkedListNode(4);
ll.insert(1, n4);
let n5 = new LinkedListNode(5);
ll.insert(2 ,n5);
ll.print();
ll.delete(3);

ll.print();
