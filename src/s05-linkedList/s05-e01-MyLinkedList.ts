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
    this.size = this.size + 1;
  }

  deleteAtIndex(index: number) {
    this.size = this.size - 1;
  }
}
const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(5);
console.log({ head: myLinkedList.head, siz: myLinkedList.size });
myLinkedList.addAtTail(6);
console.log({ tail: myLinkedList.tail, siz: myLinkedList.size });
console.log({ at2: myLinkedList.get(1) });
