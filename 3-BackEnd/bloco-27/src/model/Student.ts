import { People } from "./People";

export class Student extends People {
  enrollment: any;
  examsGrades: number[];
  worksGrades: number[];

  constructor(name: string, birthDate: string, enrollment: any, examsGrades: number[], worksGrades: number[]) {
    super(name, birthDate)
    this.enrollment = enrollment;
    this.examsGrades = examsGrades;
    this.worksGrades = worksGrades;
  }

  static generateEnrollment = () => {
    const characters =
      'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 16; i += 1) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result.toUpperCase();
  };

  getEnrollment() {
    return this.enrollment;
  }

  getExamsGrades() {
    return this.examsGrades;
  }

  getWorksGrades() {
    return this.worksGrades;
  }
}