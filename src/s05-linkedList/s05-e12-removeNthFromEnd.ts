import { MyNode, MyLinkedList } from './s05-e03-exportBaseClass.ts';

const removeNthEndElements = function (head: MyNode, nthIdx: number): void {
  const currHead: MyNode | null = reverseLL(head);
  let currNode = currHead;
  let curAt = 0;

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

printList(myLinkedList.head!);

removeNthEndElements(myLinkedList.head!, 2);

printList(myLinkedList.head!);
