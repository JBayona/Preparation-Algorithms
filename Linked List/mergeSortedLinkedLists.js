function Node(data, next) {
  this.data = data;
  this.next = next || null;
}

function mergeList(headA, headB) {
  // We could have a null value from one of the lists

  if(!headA) return headB;
  if(!headB) return headA;

  let current = null;
  let newHead = null;

  // Set the first head
  if(headA.data < headB.data) {
    newHead = headA;
    current = headA;
    headA = headA.next;
  }else {
    newHead = headB;
    current = headB;
    headB = headB.next;
  }

  while(headA && headB){
    if(headA.data < headB.data) {
      current.next = headA;
      headA = headA.next;
    }else {
      current.next = headB;
      headB = headB.next;
    }
    current = current.next;
  }

  if(headA) {
    current.next = headA
  } else {
    current.next = headB;
  }

  return newHead;
}

l1 = new Node(1, new Node(3, new Node(6, new Node(7))));
l2 = new Node(2, new Node(4, new Node(5, new Node(8, new Node(9)))));
console.log(mergeList(l1, l2));