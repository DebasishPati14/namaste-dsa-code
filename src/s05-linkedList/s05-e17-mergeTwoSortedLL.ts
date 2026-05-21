import { MyNode, MyLinkedList, printList } from './s05-e03-exportBaseClass.ts';

function mergeTwoSortedLists(head1: MyNode, head2: MyNode): MyNode | null {
  // const sentinel = new MyNode(0);
  let firstNode: MyNode | null = head1;
  let secondNode: MyNode | null = head2;
  let resultNode = new MyNode(0);
  const sentinel = resultNode;

  while (firstNode != null && secondNode != null) {
    if (firstNode.value < secondNode.value) {
      const tempNode = new MyNode(firstNode.value);
      resultNode.next = tempNode;
      resultNode = tempNode;
      firstNode = firstNode.next;
    } else {
      const tempNode = new MyNode(secondNode.value);
      resultNode.next = tempNode;
      resultNode = tempNode;
      secondNode = secondNode.next;
    }
  }

  let nonEmptyNode = firstNode === null ? secondNode : firstNode;

  while (nonEmptyNode != null) {
    const tempNode = new MyNode(nonEmptyNode.value);
    resultNode.next = tempNode;
    resultNode = tempNode;
    nonEmptyNode = nonEmptyNode.next;
  }

  return sentinel.next;
}

function mergeSortedLLOptimized(head1: MyNode, head2: MyNode): MyNode | null {
  const sentinel = new MyNode(0);
  let currNode = sentinel;

  let firstNode: MyNode | null = head1;
  let secondNode: MyNode | null = head2;
  while (firstNode && secondNode) {
    if (firstNode.value < secondNode.value) {
      currNode.next = firstNode;
      currNode = firstNode;
      firstNode = firstNode.next;
    } else {
      currNode.next = secondNode;
      currNode = secondNode;
      secondNode = secondNode.next;
    }
  }

  let incompleteNode = firstNode === null ? secondNode : firstNode;

  while (incompleteNode != null) {
    currNode.next = incompleteNode;
    currNode = incompleteNode;
    incompleteNode = incompleteNode.next;
  }

  return sentinel.next;
}

const myLinkedList1 = new MyLinkedList();
const myLinkedList2 = new MyLinkedList();

myLinkedList1.addAtHead(1);
myLinkedList1.addAtTail(2);
myLinkedList1.addAtIndex(2, 4);

myLinkedList2.addAtHead(1);
myLinkedList2.addAtTail(3);
myLinkedList2.addAtIndex(2, 5);

printList(myLinkedList1.head!);

printList(myLinkedList2.head!);

const newHead = mergeTwoSortedLists(myLinkedList1.head!, myLinkedList2.head!);
console.log({ newMethod: 'removeNthEndNode By tutorial', newHead });
printList(newHead!);
