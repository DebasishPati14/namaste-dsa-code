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

  reverseLinkedList1(head: MyNode | null): void {
    let prevNode = null;
    let currNode: MyNode | null = head!;

    while (currNode != null) {
      console.log({ currNode });
      const tempNode: MyNode | null = currNode.next;
      currNode.next = prevNode;

      prevNode = currNode;
      currNode = tempNode;
    }
    this.head = prevNode;
  }
}

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);

console.log({ head: myLinkedList.head, siz: myLinkedList.size });
myLinkedList.addAtTail(5);
myLinkedList.addAtTail(6);
myLinkedList.addAtTail(7);
console.log({ tail: myLinkedList.tail, siz: myLinkedList.size });
myLinkedList.addAtIndex(1, 2);
myLinkedList.addAtIndex(2, 3);
myLinkedList.addAtIndex(3, 4);
console.log({
  at2: myLinkedList.get(1),
  at3: myLinkedList.get(2),
  at4: myLinkedList.get(3),
  siz: myLinkedList.size,
});

console.log('SIZE: ', myLinkedList.size);

for (let i = 0; i < myLinkedList.size; i++) {
  console.log('idx: ', i, myLinkedList.get(i));
}

myLinkedList.reverseLinkedList1(myLinkedList.head);
console.log('REVERSE', myLinkedList.size);

for (let i = 0; i < myLinkedList.size; i++) {
  console.log('idx: ', i, myLinkedList.get(i));
}
