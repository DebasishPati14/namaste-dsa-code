import { MyNode, MyLinkedList } from './s05-e03-exportBaseClass.ts';
import { printList } from './s05-e12-removeNthFromEnd.ts';

function oddEvenConversion(head: MyNode): MyNode | null {
  // const sentinel = new MyNode(0);
  let oddNode: MyNode | null = head;
  let evenNode: MyNode | null = head.next;
  const evenHead = evenNode;

  while (oddNode && evenNode && evenNode.next != null && oddNode.next != null) {
    oddNode.next = oddNode.next.next;
    evenNode.next = evenNode.next.next;

    oddNode = oddNode.next;
    evenNode = evenNode.next;
  }

  oddNode!.next = evenHead;

  return head;
}

const myLinkedList = new MyLinkedList();

myLinkedList.addAtHead(1);
myLinkedList.addAtTail(2);
myLinkedList.addAtIndex(2, 3);
myLinkedList.addAtIndex(3, 4);
myLinkedList.addAtTail(5);
myLinkedList.addAtTail(6);
myLinkedList.addAtTail(7);
printList(myLinkedList.head!);

printList(myLinkedList.head!);

const newHead = oddEvenConversion(myLinkedList.head!);
console.log({ newMethod: 'removeNthEndNode By tutorial', newHead });
printList(newHead!);
