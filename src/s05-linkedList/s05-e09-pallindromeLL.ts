class MyNode {
  value: number;
  next: MyNode | null = null;

  constructor(val: number) {
    this.value = val;
  }
}

export class MyLinkedList {
  head: MyNode | null;
  size: number;
  tail: MyNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  get(index: number): number {
    if (index < 0 || index > this.size - 1) {
      return NaN;
    }

    let curNode: MyNode = this.head!;

    for (let i = 0; i < this.size; i++) {
      if (i == index) {
        return curNode ? curNode.value! : NaN;
      }
      curNode = curNode.next!;
    }
    return NaN;
  }

  addAtHead(val: number): void {
    const myNode = new MyNode(val);
    myNode.next = this.head;
    this.head = myNode;
    if (this.size == 0) {
      this.tail = myNode;
    }
    this.size = this.size + 1;
  }

  addAtTail(val: number): void {
    const myNode = new MyNode(val);
    if (this.size == 0) {
      this.tail = myNode;
      this.head = myNode;
    } else {
      this.tail!.next = myNode;
      this.tail = myNode;
    }
    this.size = this.size + 1;
  }

  addAtIndex(index: number, val: number): void {
    if (index == 0) {
      this.addAtHead(val);
      return;
    } else if (index < 0 || index > this.size + 1) {
      return;
    } else if (index == this.size) {
      this.addAtTail(val);
      return;
    }

    let curNode: MyNode = this.head!;

    for (let i = 0; i < this.size; i++) {
      if (i + 1 == index) {
        const myNode = new MyNode(val);
        myNode.next = curNode.next;
        curNode.next = myNode;
        break;
      }
      curNode = curNode.next!;
    }

    this.size = this.size + 1;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index > this.size - 1) {
      return;
    }
    if (index == 0) {
      this.head = this.head!.next;
      if (this.size == 1) {
        this.tail = null;
      }
      this.size = this.size - 1;
      return;
    }

    let curNode: MyNode = this.head!;

    for (let i = 0; i < this.size; i++) {
      if (i + 1 == index) {
        curNode.next = curNode.next!.next;
        if (index == this.size - 1) {
          this.tail = curNode;
        }
        break;
      }
      curNode = curNode.next!;
    }
    this.size = this.size - 1;
  }
}

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(2);
myLinkedList.addAtIndex(2, 3);
myLinkedList.addAtIndex(3, 2);
myLinkedList.addAtTail(1);

function checkIfPalindromeBruteForce(headNode: MyNode): boolean {
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

function checkIfPalindrome(headNode: MyNode): boolean {
  let isPalindrome = true;
  // 1st findMiddle Of LinkedList
  let slow: MyNode | null = headNode;
  let fast: MyNode | null = headNode;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow!.next;
  }

  // 2nd Reverse Second Half
  let prevNode = null;
  let curNode = slow;

  while (curNode != null) {
    const temp: MyNode | null = curNode.next;

    curNode.next = prevNode;
    prevNode = curNode;
    curNode = temp;
  }

  // 3rd Check if palindrome
  let forward = headNode;
  let backward = prevNode;
  while (forward != null) {
    console.table({
      forVal: forward.value,
      forNxt: forward.next,
      backVal: backward?.value,
      backNxt: backward?.next,
    });
    if (forward.value != backward!.value) {
      isPalindrome = false;
    }
    forward = forward.next;
    backward = backward!.next;
  }

  return isPalindrome;
}

console.log({ myLinkedList, size: myLinkedList.size });
for (let i = 0; i < myLinkedList.size; i++) {
  console.log('idx: ', i, myLinkedList.get(i));
}

console.log({
  isPalindromeBF: checkIfPalindromeBruteForce(myLinkedList.head!),
  isPalindrome: checkIfPalindrome(myLinkedList.head!),
});
