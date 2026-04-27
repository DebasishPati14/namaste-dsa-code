function MyNode(val: number) {
  this.value = val;
  this.next = null;
}

class MyLinkedList {
  head: typeof MyNode | null = null;
  size = 0;
  tail: typeof MyNode | null = null;

  get(index: number): number {
    if (index > this.size - 1) {
      return 0;
    }

    let curNode: typeof MyNode | null = this.head;

    for (let i = 0; i < this.size; i++) {
      if (i == index) {
        return curNode ? curNode.value! : 0;
      }
      curNode = curNode.next;
    }
    return 0;
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
    }
    this.tail.next = myNode;
    this.tail = myNode;
    this.size = this.size + 1;
  }

  addAtIndex(index: number, val: number) {
    if (index > this.size - 1) {
      return 0;
    }

    let curNode: typeof MyNode | null = this.head;

    for (let i = 0; i < this.size; i++) {
      if (i + 1 == index) {
        const myNode = new MyNode(val);
        myNode.next = curNode.next;
        curNode.next = myNode;
      }
      curNode = curNode.next;
    }

    this.size = this.size + 1;
  }

  deleteAtIndex(index: number) {
    if (index > this.size - 1) {
      return 0;
    }

    let curNode: typeof MyNode | null = this.head;

    for (let i = 0; i < this.size; i++) {
      if (i + 1 == index) {
        curNode.next = curNode.next.next;
      }
      curNode = curNode.next;
    }
    return 0;
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
