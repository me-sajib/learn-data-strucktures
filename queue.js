class Students {
  constructor() {
    this.students = [];
  }

  enqueue(student) {
    this.students.push(student);
  }

  dequeue() {
    if (this.students.length) {
      this.students.shift();
    }
  }
}
const names = new Students();
names.enqueue("rafiq");
names.enqueue("sabbir");
names.enqueue("jobbar");
names.dequeue();
names.dequeue();
console.log(names.students);
