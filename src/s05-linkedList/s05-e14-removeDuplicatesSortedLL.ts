import { MyNode, MyLinkedList } from './s05-e03-exportBaseClass.ts';
import { printList } from './s05-e12-removeNthFromEnd.ts';

function removeDuplicatesSortedLL(head: MyNode): MyNode | null {
  const sentinel = new MyNode(0);
  sentinel.next = head;
  let currNode: MyNode | null = sentinel;

  while (currNode != null && currNode.next != null) {
    if (currNode.value == currNode.next.value) {
      currNode.next = currNode.next.next;
    } else {
      currNode = currNode.next;
    }
  }

  return sentinel.next;
}

const myLinkedList = new MyLinkedList();

myLinkedList.addAtHead(1);
myLinkedList.addAtTail(1);
myLinkedList.addAtTail(1);
myLinkedList.addAtTail(1);
myLinkedList.addAtTail(1);
myLinkedList.addAtTail(2);
myLinkedList.addAtIndex(5, 2);
myLinkedList.addAtIndex(6, 2);
myLinkedList.addAtTail(5);
myLinkedList.addAtTail(5);

printList(myLinkedList.head!);

printList(myLinkedList.head!);

const newHead = removeDuplicatesSortedLL(myLinkedList.head!);
console.log({ newMethod: 'removeNthEndNode By tutorial', newHead });
printList(newHead!);
