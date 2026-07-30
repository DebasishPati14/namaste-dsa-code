import { MyLinkedList, MyNode } from './s05-e03-exportBaseClass.ts';
import { printList } from './s05-e12-removeNthFromEnd.ts';

const removeElementsApproach1 = function (
  head: MyNode,
  val: number,
): MyNode | null {
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

const removeElements = function (head: MyNode, val: number): MyNode | null {
  const sentinelNode: MyNode = new MyNode(0);
  sentinelNode.next = head;
  let prevNode = sentinelNode;

  while (prevNode != null && prevNode.next != null) {
    if (prevNode.next.value == val) {
      prevNode.next = prevNode.next.next;
    } else {
      prevNode = prevNode.next;
    }
    console.log({ val: prevNode.value, sentinelNode });
    // currNode = currNode.next;
  }

  return sentinelNode.next;
};

const myLinkedList = new MyLinkedList();

myLinkedList.addAtHead(2);
myLinkedList.addAtTail(2);
myLinkedList.addAtIndex(2, 2);
myLinkedList.addAtIndex(3, 2);
myLinkedList.addAtTail(2);

printList(myLinkedList.head!);

const afterRemove1 = removeElementsApproach1(myLinkedList.head!, 2);
// const afterRemove2 = removeElements(myLinkedList.head!, 2);

// printList(afterRemove!);
printList(afterRemove1!);
