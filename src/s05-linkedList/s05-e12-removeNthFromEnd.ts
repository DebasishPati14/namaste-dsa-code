import { MyLinkedList, MyNode } from './s05-e03-exportBaseClass.ts';

const removeNthEndElements = function (head: MyNode, nthIdx: number): number {
  let currNode: MyNode | null = reverseLL(head);
  let curAt = 1;

  while (currNode != null) {
    if (curAt == nthIdx - 1) {
      currNode = currNode.next!.next;
      break;
    }
    currNode = currNode!.next;
    curAt++;
  }

  return currNode!.value || NaN;
};

export function reverseLL(head: MyNode) {
  let currNode: MyNode | null = head;
  let prevNode: MyNode | null = head;

  while (currNode != null) {
    const temp: MyNode | null = currNode.next;

    currNode.next = prevNode;
    prevNode = currNode;
    currNode = temp;
  }
  return prevNode;
}

export function printList(list: MyLinkedList, label: string = ''): void {
  let cur = list.head;
  const arr: number[] = [];

  while (cur) {
    arr.push(cur.value ?? NaN);
    cur = cur.next;
  }

  console.log(label, arr.join(' -> '));
}
const myLinkedList = new MyLinkedList();

myLinkedList.addAtHead(1);
myLinkedList.addAtTail(2);
myLinkedList.addAtIndex(2, 3);
myLinkedList.addAtIndex(3, 4);
myLinkedList.addAtTail(5);

printList(myLinkedList);

console.log({ afterRemove: removeNthEndElements(myLinkedList.head!, 2) });

printList(myLinkedList);
