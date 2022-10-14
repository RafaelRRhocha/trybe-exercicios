import { IEmployee } from "../interfaces/Employee";
import { Subject } from "./Subject";

export class Employees extends Subject implements IEmployee {
  registration: string
  salary: number
  admissionDate: string
  name: string

  constructor(registration: string, salary: number, admissionDate: string, name: string, subjects: string) {
    super(subjects)
    this.registration = registration
    this.salary = salary
    this.admissionDate = admissionDate
    this.name = name
  }

  static generateRegistrationId = () => {
    const numbers =
      '0123456789';
    let result = '';
    for (let i = 0; i < 10; i += 1) {
      result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return result;
  };

  getRegistration() {
    return this.registration;
  }

  getSalary(): number {
    return this.salary
  }

  getAdmissionDate(): string {
    return this.admissionDate
  }

  getName(): string {
    return this.name
  }
}