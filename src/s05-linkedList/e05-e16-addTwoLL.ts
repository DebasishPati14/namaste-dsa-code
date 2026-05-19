import { MyNode, MyLinkedList, printList } from './s05-e03-exportBaseClass.ts';

function addTwoLists(head1: MyNode, head2: MyNode): MyNode | null {
  // const sentinel = new MyNode(0);
  let firstNode: MyNode | null = head1;
  let secondNode: MyNode | null = head2;
  let resultNode = new MyNode(0);
  const sentinel = resultNode;

  let sum = 0;
  while (firstNode != null && secondNode != null) {
    sum += (firstNode.value ?? 0) + (secondNode.value ?? 0);

    console.log({ sum, isIt: sum % 10 });
    if (sum < 10) {
      const tempNode = new MyNode(sum);
      resultNode.next = tempNode;
      resultNode = tempNode;
      sum = 0;
    } else {
      const tempNode = new MyNode(sum % 10);
      resultNode.next = tempNode;
      resultNode = tempNode;
      sum = sum / 10;
    }

    firstNode = firstNode.next;
    secondNode = secondNode.next;
  }

  let nonEmptyNode = firstNode === null ? secondNode : firstNode;

  while (nonEmptyNode != null) {
    sum += nonEmptyNode.value;
    const tempNode = new MyNode(sum);
    resultNode.next = tempNode;
    resultNode = tempNode;
    nonEmptyNode = nonEmptyNode.next;
    sum = Math.floor(sum / 10);
  }

  console.log(sum);
  if (sum > 0) {
    const tempNode = new MyNode(sum);
    resultNode.next = tempNode;
    resultNode = tempNode;
  }

  return sentinel.next;
}

const myLinkedList1 = new MyLinkedList();
const myLinkedList2 = new MyLinkedList();

myLinkedList1.addAtHead(1);
myLinkedList1.addAtTail(2);
myLinkedList1.addAtIndex(2, 3);

myLinkedList2.addAtHead(1);
myLinkedList2.addAtTail(2);
myLinkedList2.addAtIndex(2, 3);

printList(myLinkedList1.head!);

printList(myLinkedList2.head!);

const newHead = addTwoLists(myLinkedList1.head!, myLinkedList2.head!);
console.log({ newMethod: 'removeNthEndNode By tutorial', newHead });
printList(newHead!);
