import { MyLinkedList, MyNode, printList } from './s05-e03-exportBaseClass.ts';

function swapNodePairs(head: MyNode, rotNum: number): MyNode | null {
  let currNode: MyNode | null = head;
  const newHead = currNode.next;
  let prev: MyNode | null = head;

  while (currNode != null && currNode.next != null) {
    const temp = currNode.next;
    const secondTemp = temp.next;
    console.log({ currNode, prev });

    prev.next = temp;
    currNode.next = temp.next;
    temp.next = currNode;
    prev = currNode;
    currNode = secondTemp;
  }

  return newHead;
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

const newHead = swapNodePairs(myLinkedList.head!, 6);
console.log({ newMethod: 'removeNthEndNode By tutorial', newHead });
printList(newHead!);
