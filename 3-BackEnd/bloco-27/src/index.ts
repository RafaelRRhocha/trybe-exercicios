import { Employees } from './model/Employees';
import { Student } from './model/Student';

const student = new Student(
  'Jessy James',
  '26/05/1995',
  Student.generateEnrollment(),
  [10, 9, 8, 7],
  [7, 8, 9, 10]
);

console.table(student);

const employees = new Employees(
  Employees.generateRegistrationId(),
  3.5,
  '27/07/2003',
  'Ana',
  'História'
);

console.table(employees);
