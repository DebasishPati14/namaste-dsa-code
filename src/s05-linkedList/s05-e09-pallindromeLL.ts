import { MyLinkedList, MyNode } from './s05-e03-cycleLinkedList.ts';

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(2);
myLinkedList.addAtIndex(3, 2);
myLinkedList.addAtIndex(2, 3);
myLinkedList.addAtTail(1);
myLinkedList.addAtMiddle(3);

function checkIfPalindrome(headNode: MyNode): boolean {
  let beginNode: MyNode | null = headNode;
  let endNode: MyNode | null = headNode;
  let isPalindrome = true;

  for (let i = 0; i < myLinkedList.size / 2; i++) {
    for (let j = 0; j < myLinkedList.size; j++) {
      if (i + j == myLinkedList.size - 1) {
        if (beginNode!.value != endNode!.value) {
          isPalindrome = false;
          break;
        }
      }
      endNode = endNode!.next;
    }
    if (!isPalindrome) {
      break;
    }
    endNode = headNode;
    beginNode = beginNode!.next;
  }

  return isPalindrome;
}

for (let i = 0; i < myLinkedList.size; i++) {
  console.log('idx: ', i, myLinkedList.getAtIndex(i));
}

console.log({
  isPalindrome: checkIfPalindrome(myLinkedList.head!),
});
