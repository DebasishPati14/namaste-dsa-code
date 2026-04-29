class MyNode {
  value: number | null = null;
  next: MyNode | null = null;
}

class MyLinkedList {
  head: MyNode | null = null;
  tail: MyNode | null = null;
  size: number = 0;

  public addAtHead(val: number): void {
    const newNode = new MyNode();
    newNode.value = val;
    if (this.size == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  public addAtTail(val: number): void {
    const newNode = new MyNode();
    newNode.value = val;
    if (this.size == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  public addAtIndex(val: number, idx: number): void {
    if (idx < 0 || idx > this.size) {
      console.error('Invalid idx provided');
      return;
    }

    if (idx == 0) {
      this.addAtHead(val);
      return;
    } else if (idx == this.size) {
      this.addAtTail(val);
      return;
    } else {
      const newNode = new MyNode();
      newNode.value = val;
      let tempNode = this.head;
      for (let i = 0; i < idx; i++) {
        if (i == idx - 1) {
          newNode.next = tempNode!.next;
          tempNode!.next = newNode;
        }
        tempNode = tempNode!.next;
      }
      this.size++;
    }
  }

  public addAtMiddle(val: number): void {
    if (this.size == 0) {
      this.addAtHead(val);
      return;
    } else if (this.size == 1) {
      this.addAtTail(val);
      return;
    } else {
      const newNode = new MyNode();
      newNode.value = val;
      let tempNode = this.head;
      for (let i = 0; i < Math.round(this.size / 2); i++) {
        if (i == Math.round(this.size / 2) - 1) {
          newNode.next = tempNode!.next;
          tempNode!.next = newNode;
        }
        tempNode = tempNode!.next;
      }
      this.size++;
    }
  }

  public deleteAtIndex(idx: number): void {
    if (idx < 0 || idx >= this.size || this.size == 0) {
      console.error('Invalid idx provided');
      return;
    }

    if (idx == 0) {
      this.head = this.head!.next;
      if (0 == this.size) {
        this.tail = null;
      }
    } else {
      let tempNode = this.head;
      for (let i = 0; i < idx; i++) {
        if (i == idx - 1) {
          tempNode!.next = tempNode!.next!.next;
          if (idx == this.size - 1) {
            this.tail = tempNode;
          }
          break;
        }
        tempNode = tempNode!.next;
      }
    }
    this.size--;
  }
}
const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(2);
myLinkedList.addAtIndex(3, 2);
myLinkedList.addAtIndex(5, 3);
myLinkedList.addAtTail(6);
myLinkedList.addAtMiddle(4);

for (let i = 0; i < myLinkedList.size; i++) {
  console.log('idx: ', i, myLinkedList.get(i));
}
