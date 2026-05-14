import { MyNode, MyLinkedList } from './s05-e03-exportBaseClass.ts';

const removeNthEndElements = function (head: MyNode, nthIdx: number): void {
  const currHead: MyNode | null = reverseLL(head);
  let currNode = currHead;
  let curAt = 1;

  while (currNode != null && currNode.next != null) {
    console.table({ val: currNode.value });
    if (curAt == nthIdx - 1) {
      currNode.next = currNode.next!.next;
      break;
    } else {
      currNode = currNode!.next;
    }
    curAt++;
  }

  reverseLL(currHead!);
};

export function reverseLL(head: MyNode) {
  let currNode: MyNode | null = head;
  let prevNode: MyNode | null = null;

  while (currNode != null) {
    const temp: MyNode | null = currNode.next;

    currNode.next = prevNode;
    prevNode = currNode;
    currNode = temp;
  }
  return prevNode;
}

function removeNthEndNode(head: MyNode | null, nthIdx: number) {
  let traverseNode = head;
  let lengthOfList = 0;

  while (traverseNode != null) {
    traverseNode = traverseNode.next;
    lengthOfList++;
  }

  const sentinelNode = new MyNode(0);
  sentinelNode.next = head;
  const deleteIdx = lengthOfList - nthIdx;

  traverseNode = sentinelNode;
  for (let i = 0; i < deleteIdx; i++) {
    if (i == deleteIdx - 1) {
      traverseNode!.next = traverseNode!.next!.next;
      break;
    }
    traverseNode = traverseNode!.next;
  }

  return sentinelNode.next;
}

export function printList(head: MyNode, label: string = ''): void {
  let cur: MyNode | null = head;
  const arr: number[] = [];
  let maxLen = 20;

  while (cur != null && maxLen > 10) {
    arr.push(cur!.value ?? NaN);
    cur = cur!.next;
    maxLen--;
  }

  console.log(label, arr.join(' -> '));
}
const myLinkedList = new MyLinkedList();

myLinkedList.addAtHead(1);
myLinkedList.addAtTail(2);
myLinkedList.addAtIndex(2, 3);
myLinkedList.addAtIndex(3, 4);
myLinkedList.addAtTail(5);
myLinkedList.addAtTail(6);
myLinkedList.addAtHead(0);

printList(myLinkedList.head!);

removeNthEndElements(myLinkedList.head!, 2);

printList(myLinkedList.head!);

const newHead = removeNthEndNode(myLinkedList.head!, 2);
console.log({ newMethod: 'removeNthEndNode By tutorial', newHead });
printList(newHead!);
