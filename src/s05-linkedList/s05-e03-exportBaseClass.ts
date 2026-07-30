class MyNode {
  value: number;
  next: MyNode | null = null;

  constructor(val: number) {
    this.value = val;
  }
}

class MyLinkedList {
  head: MyNode | null;
  size: number;
  tail: MyNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getAtIdx(index: number): number {
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

export function printList(head: MyNode, label: string = ''): void {
  let cur: MyNode | null = head;
  const arr: number[] = [];
  let maxLen = 20;

  while (cur != null && maxLen > 10) {
    arr.push(cur!.value ?? NaN);
    cur = cur!.next;
    maxLen--;
  }

  console.log(label, arr.join(' -> '));
}

export { MyLinkedList, MyNode };
