import { MyLinkedList, MyNode, printList } from './s05-e03-exportBaseClass.ts';

function swapNodePairsRecursive(head: MyNode): MyNode | null {
  const left = head;
  const right = left.next;

  if (left == null) {
    return null;
  } else if (right == null) {
    return left;
  }

  left.next = swapNodePairsRecursive(right.next!); //swappedList
  right!.next = left;

  return right;
}

const myLinkedList = new MyLinkedList();

myLinkedList.addAtHead(1);
myLinkedList.addAtTail(2);
myLinkedList.addAtIndex(2, 4);

myLinkedList.addAtTail(5);
myLinkedList.addAtIndex(2, 3);
myLinkedList.addAtTail(6);
myLinkedList.addAtTail(7);
// myLinkedList.addAtTail(8);

printList(myLinkedList.head!);

const newHead = swapNodePairsRecursive(myLinkedList.head!);
console.log({ newMethod: 'removeNthEndNode By tutorial', newHead });
printList(newHead!);
