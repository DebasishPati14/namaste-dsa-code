import { MyLinkedList, MyNode } from './s05-e05-addAtMiddle';

declare module './s05-e02-MyLinkedList' {
  interface MyLinkedList {
    reverseLinkedList(): void;
  }
}

MyLinkedList.prototype.reverseLinkedList = function (): void {
  let currNode: MyNode | null = this.head;
  let prevNode: MyNode | null = null;

  while (currNode != null) {
    console.log(prevNode, currNode);
    const tempNode = currNode.next;
    //  assignment orders matters
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = tempNode;
  }
  this.head = prevNode;
};
