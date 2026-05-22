import { MyNode, MyLinkedList, printList } from './s05-e03-exportBaseClass.js';

function rotateList(head: MyNode, rotNum: number): MyNode | null {
  // const sentinel = new MyNode(0);
  let curNode: MyNode | null = head;
  const originalHead = head;
  let count = 0;

  // 1. Get the count
  while (curNode != null) {
    curNode = curNode.next;
    count++;
  }

  // 2. rotate until (rotateNum % count)
  curNode = originalHead;
  let tempNode: MyNode | null = null;

  for (let i = 0; i < count - (rotNum % count) && curNode; i++) {
    if (i == count - (rotNum % count) - 1) {
      tempNode = curNode.next;
      curNode!.next = null;
      break;
    } else {
      curNode = curNode!.next;
    }
  }

  // 3. Assign the cut down node to old head
  const newHead = tempNode;
  console.log({ tempNode });
  while (tempNode != null) {
    if (tempNode.next == null) {
      tempNode.next = originalHead;
      break;
    } else {
      tempNode = tempNode.next;
    }
  }

  return tempNode === null ? originalHead : newHead;
}

const myLinkedList = new MyLinkedList();

myLinkedList.addAtHead(1);
myLinkedList.addAtTail(2);
myLinkedList.addAtIndex(2, 4);

myLinkedList.addAtTail(5);
myLinkedList.addAtIndex(2, 3);

printList(myLinkedList.head!);

const newHead = rotateList(myLinkedList.head!, 1);
console.log({ newMethod: 'removeNthEndNode By tutorial', newHead });
printList(newHead!);
