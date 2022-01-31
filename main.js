class LinkedList{
  constructor() {
      this.root = {
      data:null,
      next:null,
      };
}

  append(value){
    const node ={
      data: value,
      next: null,
  };

  let lastNode = this.root;
  while (lastNode.next !== null){
    lastNode = lastNode.next;
  };
  lastNode.next = node;
  };

  find(value){
  let targetNode = this.root;
  while (targetNode.data !== value && targetNode.next !== null){
  };
  return targetNode.data === value ? targetNode : null;
  };

  add(valueToAdd, valueAfter){
  let addNode = this.root;
  while(addNode.data !== valueAfter && addNode.next !== null){
  addNode = addNode.next;
  };

  addNode.next = {
    data: valueToAdd,
    next: addNode.next
};
};

  delete(value){
    let deleteNode = this.root;
    let previousNode;
    while(deleteNode.data !== value && deleteNode.next !== null){
      previousNode = deleteNode;
      deleteNode = deleteNode.next;
    };
    previousNode.next = deleteNode.next;
    };

  print() {
    console.log(this.root);
  };
};

const LinkedList1 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append(3);
LinkedList1.append(333);
LinkedList1.append(44);
LinkedList1.delete(3)
LinkedList1.print();
console.log(result);
console.log(linkedList1.find(44));