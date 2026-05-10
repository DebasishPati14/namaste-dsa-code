import { MyLinkedList, MyNode } from './s05-e03-exportBaseClass.ts';

const removeElements = function (head: MyNode, val: number): MyNode | null {
  let currNode: MyNode | null = head;
  let resNode: MyNode | null = null;
  let newHead = null;

  while (currNode != null) {
    const tempNode: MyNode | null = currNode.next;
    if (currNode.value != val) {
      if (!newHead) {
        newHead = currNode;
        resNode = currNode;
        resNode!.next = null;
      } else {
        resNode!.next = currNode;
        resNode = currNode;
        resNode.next = null;
      }
    }
    console.log({ tempNode });
    currNode = tempNode;
  }

  return newHead;
};

function printList(list: MyLinkedList, label: string = ''): void {
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
myLinkedList.addAtIndex(3, 2);
myLinkedList.addAtTail(1);

printList(myLinkedList);

console.log({ afterRemove: removeElements(myLinkedList.head!, 2) });

printList(myLinkedList);
