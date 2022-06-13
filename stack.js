class Stack {
  constructor() {
    this.users = [];
  }

  add(item) {
    this.users.push(item);
  }
  remove() {
    if (this.users.length) {
      this.users.pop();
    }
  }
}

const additem = new Stack();
additem.add("rafiq");
additem.add("sabbir");
console.log(additem.users);
additem.remove();
console.log(additem.users);
