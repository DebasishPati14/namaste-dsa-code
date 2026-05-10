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

/* =========================================================
   EXTRA HELPERS FOR LEETCODE 160 TESTING
   (Nothing from your original class was modified)
========================================================= */

function printList(list: MyLinkedList, label: string): void {
  let cur = list.head;
  const arr: number[] = [];

  while (cur) {
    arr.push(cur.value);
    cur = cur.next;
  }

  console.log(label, arr.join(' -> '));
}

/* =========================================================
   METHOD 1
   A: 1 -> 2 -> 3 -> 8 -> 9
   B: 4 -> 5 ----^
========================================================= */

/*
function createIntersectingListsMethod(): {
  listA: MyLinkedList;
  listB: MyLinkedList;
} {
  const listA = new MyLinkedList();
  listA.addAtTail(1);
  listA.addAtTail(2);
  listA.addAtTail(3);

  const intersect1 = new MyNode(8);
  const intersect2 = new MyNode(9);

  intersect1.next = intersect2;

  listA.tail!.next = intersect1;
  listA.tail = intersect2;

  const listB = new MyLinkedList();
  listB.addAtTail(4);
  listB.addAtTail(5);

  listB.tail!.next = intersect1;
  listB.tail = intersect2;

  return { listA, listB };
}
*/

/* =========================================================
   METHOD 2
   A: 10 -> 20 -> 30 -> 40
   B: 99 --------------^
========================================================= */

/*
function createIntersectingListsMethod(): {
  listA: MyLinkedList;
  listB: MyLinkedList;
} {
  const listA = new MyLinkedList();

  listA.addAtTail(10);
  listA.addAtTail(20);

  const intersect1 = new MyNode(30);
  const intersect2 = new MyNode(40);

  intersect1.next = intersect2;

  listA.tail!.next = intersect1;
  listA.tail = intersect2;

  const listB = new MyLinkedList();
  listB.addAtTail(99);

  listB.tail!.next = intersect1;
  listB.tail = intersect2;

  return { listA, listB };
}
*/

/* =========================================================
   METHOD 3
   A: 7 -> 14 -> 21 -> 28 -> 35
   B: 1 -> 2 -> 3 -----------^
========================================================= */

function createIntersectingListsMethod(): {
  listA: MyLinkedList;
  listB: MyLinkedList;
} {
  const listA = new MyLinkedList();

  listA.addAtTail(7);
  listA.addAtTail(14);

  const intersect1 = new MyNode(21);
  const intersect2 = new MyNode(28);
  const intersect3 = new MyNode(35);

  intersect1.next = intersect2;
  intersect2.next = intersect3;

  listA.tail!.next = intersect1;
  listA.tail = intersect3;

  const listB = new MyLinkedList();

  listB.addAtTail(1);
  listB.addAtTail(2);
  listB.addAtTail(3);

  listB.tail!.next = intersect1;
  listB.tail = intersect3;

  return { listA, listB };
}

const { listA, listB } = createIntersectingListsMethod();
// const { listA, listB } = createIntersectingListsMethod2();
// const { listA, listB } = createIntersectingListsMethod3();

printList(listA, 'List A:');
printList(listB, 'List B:');

function verifyIntersect(head1: MyNode, head2: MyNode) {
  const list1Set = new Set<MyNode>();
  let traverseNode: MyNode | null = head1;
  let doesIntersect = false;

  while (traverseNode != null) {
    list1Set.add(traverseNode);
    traverseNode = traverseNode.next;
  }
  traverseNode = head2;
  while (traverseNode != null) {
    if (list1Set.has(traverseNode)) {
      doesIntersect = true;
      break;
    }
    traverseNode = traverseNode.next;
  }

  if (doesIntersect) {
    console.log({
      intersectAt1: traverseNode,
      intersectVal: traverseNode?.value,
    });
  }
  return;
}

verifyIntersect(listA.head!, listB.head!);
/*
  Now call your own function here.

  Example:

  const ans = yourFunction(listA.head, listB.head);
  console.log(ans?.value);
*/
