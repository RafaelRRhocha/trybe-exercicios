import { Student } from './model/Student';

const student = new Student(
  'Jessy',
  '26/05/1995',
  Student.generateEnrollment(),
  [10, 9, 8, 7],
  [7, 8, 9, 10]
);

console.table(student);


console.table(employees);
