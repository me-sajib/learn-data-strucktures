class Students {
  constructor() {
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  removeStudent() {
    if (this.students.length) {
      this.students.shift();
    }
  }
}
const addStudent = new Students();
addStudent.addStudent("rafiq");
addStudent.addStudent("sabbir");
addStudent.addStudent("jobbar");
addStudent.removeStudent();
addStudent.removeStudent();
console.log(addStudent.students);
