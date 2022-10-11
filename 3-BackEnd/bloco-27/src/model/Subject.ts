export class Subject {
  subjects: string

  constructor(subjects: string) {
    this.subjects = subjects
  }

  get() {
    return this.subjects
  }

  set(subjects: string) {
    if(subjects.length <= 3) {
      throw new Error('subjects must be at least 3 characters long')
    }
    this.subjects = subjects
  }
}